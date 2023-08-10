const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/hello", (req, res) => {
  res.send("안녕");
});

//서버띄우기
app.listen(3000, function () {
  console.log("서버가동");
});

// API 라우터 등록
const authRoutes = require("./routes/auth"); // 로그인과 관련된 API 라우터
app.use("/api/auth", authRoutes);
