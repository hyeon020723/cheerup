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
  res.send("여기는 루트입니다");
});

// 회원가입
app.post("/api/signup", async (req, res) => {
  const userData = req.body.user;
  try {
    await signupUser(userData);
    res.send("");
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "error" });
  }
});

// 로그인
app.post(
  "/api/login",
  async (req, res) => {
    const userId = req.body.userId;
    const userPw = req.body.userPw;

    // try {
    //   const result = await database.runQuery(
    //     "SELECT * FROM members WHERE id = ?",
    //     [user.userId]
    //   );
    axios // axios로 post 요청보냄
      .post("http://localhost:8081/auth/login", {
        userId: id,
        password: pw,
      }) // res를 받아서 사용. res.data에 받은 data 있음. store의 login 메소드를 호출해서 store에 userId랑 token 값 넣어줌
      .then((res) => {
        if (res.status === 200) {
          this.$store.commit("login", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // if문 수정필요
  //   if (userId.length > 0 && userPw.length > 2) {
  //     res.status(200).json({ message: "로그인 성공", token: "yourAuthToken" });
  //   } else {
  //     res.status(401).json({ message: "Invalid login credentials" });
  //   }
  // }
);

// 서버
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
