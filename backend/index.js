const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// app.use(bodyParser.json());
// app.use(cookieParser());

//

app.get("/", (req, res) => {
  res.send("여기는 루트입니다");
});

// 회원가입

app.use(express.json());

app.post("/api/signup", async (req, res) => {
  await database.run(
    `INSERT INTO members (studentID, id, nickname, password) VALUES ('${req.body.content.studentID}','${req.body.content.id}','${req.body.content.nickname}','${req.body.content.password}')`
  );
  res.send();
});

//

// 사용가능 아이디확인
// 코드 필요

//
//로그인

//
//
//

// 서버 가동

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
