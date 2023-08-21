const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const database = require("./database"); // Assuming you have a database.js file

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("여기는 백엔드입니다.");
});

//
//
//
// 회원가입

app.post("/api/signup", async (req, res) => {
  const user = req.body.user;

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
// 게시물

// 서버
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
