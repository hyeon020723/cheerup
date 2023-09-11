const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const database = require("./database");
const jwt = require("jsonwebtoken");

//
// 변경사항 확인

//
// root
app.get("/", (req, res) => {
  res.send("여기는 백엔드입니다.");
});

//
//
//
// 회원가입
app.post("/api/signup", async (req, res) => {
  const user = req.body.user;

  await database.run(
    `INSERT INTO member (studentID, id, nickName, password) VALUES ('${req.body.user.StudentID}','${req.body.user.Id}','${req.body.user.NickName}','${req.body.user.Pw}')`
  );
  // res.status(201).send({ message }); ->> error
  res.send(user);
});

//
// 로그인
app.post("/api/login", async (req, res) => {
  const userId = req.body.userId;
  const userPw = req.body.userPw;

  const userRow = await database.run(
    `SELECT id, password FROM member WHERE id = '${userId}';`
  );

  const checkId = userRow[0].id;
  const checkPw = userRow[0].password;

  if (userId === checkId) {
    if (userPw === checkPw) {
      const token = jwt.sign({ userId }, "cheerup", { expiresIn: "5m" });
      console.log(token);

      return res.status(200).send({ message: "Success", token });
    } else {
      return res.status(401).send({ message: "비밀번호를 다시 입력하세요" });
    }
  } else {
    return res.status(401).send({ message: "아이디를 다시 입력하세요." });
  }
});

//
// 마이페이지
app.get("/api/mypage/user", async (req, res) => {
  try {
    const userId = req.params.userId;
    const query = "SELECT * FROM member WHERE id = ?";

    const results = await database.run(query, [userId]);

    if (results.length === 0) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.send(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

// 게시물 목록
app.get("/api/reviewlist", async (req, res) => {
  const results = await database.run("SELECT * FROM review_info");
  res.send(results);
});

//
//게시물 업로드
app.post("/api/reviewupload", async (req, res) => {
  try {
    userId = "user";
    const { title, content } = req.review;
    const Row = await database.run(
      `SELECT id, password FROM member WHERE id = '${userId}';`
    );

    // 업로드 시기
    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const queryInsertReview =
      "INSERT INTO review_info (content, title, uploadDate, nickName, studentID) VALUES (?, ?, ?, ?, ?)";
    await pool.query(queryInsertReview, [
      content,
      title,
      formattedDate,
      "닉네임",
      "202112345",
    ]);
    res.status(200).json({ message: "게시물이 성공적으로 업로드되었습니다." });
  } catch (error) {
    console.error("게시물 업로드 오류:", error);
    res.status(500).json({ error: "게시물 업로드 중 오류가 발생했습니다." });
  }
});

// 게시물 읽기
app.get("/api/reviewread/:pageNumber", async (req, res) => {
  const pageNumber = req.params.pageNumber;

  try {
    const query = "SELECT * FROM review_info WHERE pageNumber = ?";
    const results = await database.run(query, [pageNumber]);

    if (results.length === 0) {
      return res.status(404).send({ error: "Review not found" });
    }
    return res.send(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});

//
//
// 서버
// 서버

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
