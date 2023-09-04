const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

// API 라우터 등록
const authRoutes = require("./routes/auth"); // 로그인과 관련된 API 라우터
app.use("/api/auth", authRoutes);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
