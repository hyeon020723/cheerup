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

//
//
//
// 회원가입
app.post("/api/signup", async (req, res) => {
  const userData = req.body.user;

  axios
    .post("http://localhost:8081/auth/login", {
      user: user,
    })
    .then((res) => {
      if (response.status === 200) {
        // 회원 가입 성공 시 알림 및 로그인 페이지로 이동
        console.log("회원 가입 성공:", response.data);
        alert("회원가입이 완료되었습니다.");
        this.$router.push("/login");
      }
    })
    .catch((error) => {
      console.error("회원 가입 에러:", error);
      alert("회원가입을 다시 진행해주세요.");
    });
});

//
//
//
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
