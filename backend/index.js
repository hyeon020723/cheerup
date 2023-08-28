const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./database");
const database = require("./database");

app.use(bodyParser.json());

//
//
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

  // DB에 추가 해야돼 !!!!!!!
  // try {
  //   await signupUser(user);
  //   res.status(201).json({ message: "회원가입이 완료되었습니다." });
  // } catch (error) {
  //   console.error("회원가입 에러:", error);
  //   res.status(500).json({ message: "회원가입을 다시 진행해주세요." });
  // }

  res.send(user);
});

//
//
//
// 로그인
app.post("/api/login", async (req, res) => {
  const userId = req.body.userId;
  const userPw = req.body.userPw;

  // try {
  //   const result = await database.runQuery(
  //     "SELECT * FROM members WHERE id = ?",
  //     [user.userId]
  //   );

  if (userId === "user" && userPw === "0000") {
    res.status(200).send({ message: "로그인이 완료되었습니다." });
  } else {
    res
      .status(401)
      .send({ message: "아이디 또는 비밀번호가 일치하지 않습니다." });
  }
});

//
//

//
// 게시물 목록
app.get("/api/reviewlist", async (req, res) => {
  const results = await database.run("SELECT * FROM review_info");
  res.send(results);
});

// ?

db.getUserList()
  .then((rows) => {
    console.log(rows);
  })
  .catch((errMsg) => {
    console.log(errMsg);
  });

//게시물 업로드
app.post("/api/reviewupload", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  res.send({ title, content });
});

//게시물 읽기
app.get("/api/reviewread", async (req, res) => {
  const pageNumber = req.query.pageNumber;

  try {
    const query = "SELECT * FROM review_info WHERE pageNumber = ?";
    const results = await database.runQuery(query, [pageNumber]);

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
