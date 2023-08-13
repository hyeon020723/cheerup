const express = require("express");
const app = express();
const port = 3000;
const newmember = require("body-parser");
const database = require("./database");

app.use(bodyParser.json());

app.get("/api/members", async (req, res) => {
  const memberData = await database.run("SELECT * FROM members");

  res.send(result);
});

app.post("/api/members", async (req, res) => {
  const { studentID, id, nickname, password } = req.body;

  await database.run(
    `INSERT INTO members (studentID, id, nickname, password) VALUES (?, ?, ?, ?)`,
    [studentID, id, nickname, password]
  );

  res.status(201).send({ message: "회원 가입이 완료되었습니다." });
});

app.put("/api/members/:id", async (req, res) => {
  await database.run(`UPDATE members SET content = ? WHERE id = ?`, [
    req.body.content,
    req.params.id,
  ]);
  const result = await database.run("SELECT * FROM members");
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// API 라우터 등록
// const authRoutes = require("./routes/auth"); // 로그인과 관련된 API 라우터
// app.use("/api/auth", authRoutes);

// //mysql 연결

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   no: "no",
//   id: "id", // 호스트 이름
//   nickName: "nickName", // 사용자 이름
//   password: "password", // 비밀번호
//   employment: "employment",
//   category: "category",
//   database: "쿼리.sql", // 데이터베이스 이름
// });
// connection.connect();
