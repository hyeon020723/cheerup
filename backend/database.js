const database = require("./database");
const express = require("express");
const router = express.Router();
const mariadb = require("mariadb");
const vals = require("./consts.js");

const pool = mariadb.createPool({
  host: vals.DBHost,
  port: vals.DBPort,
  user: vals.DBUser,
  password: vals.DBPass,
  database: "cheerup",
  connectionLimit: 5,
});

async function GetUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query("USE cheerup");
    rows = await conn.query("SELECT * FROM member");
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
    return rows[0];
  }
}

//로그인
router.post("/login", function (req, res) {
  const user = {
    userId: req.body.user.userId,
    userPw: req.body.user.userPw,
  };

  connection.query(
    'SELECT id, password FROM users WHERE id = "' + user.id + '"',
    function (err, row) {
      if (err) {
        res.json({
          success: false,
          message: "아이디나 비번확인!",
        });
      }
      if (row[0] !== undefined && row[0].id === user.id) {
        bcrypt.compare(user.password, row[0].password, function (err, res2) {
          if (res2) {
            res.json({
              success: true,
              message: "성공!",
            });
          } else {
            res.json({
              message: "비밀번호가 틀립니다!",
            });
          }
        });
      }
    }
  );
});

// 마이페이지
router.get("/mypage/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const connection = await pool.getConnection();

    const sql = "SELECT * FROM member WHERE id = ?";
    const [rows] = await connection.query(sql, [userId]);
    connection.release();

    if (rows.length === 0) {
      res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    } else {
      // 사용자 정보를 응답으로 보내기
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    // 오류 발생 시 500 에러 응답
    console.error("데이터베이스 오류:", error);
    res.status(500).json({ message: "데이터베이스 오류가 발생했습니다." });
  }
});

module.exports = {
  getUserList: GetUserList,
  async run(query) {
    return new Promise((resolve) => {
      pool
        .getConnection()
        .then((conn) => {
          conn
            .query(query)
            .then((rows) => {
              resolve(rows);
            })
            .catch((err) => {
              console.log(err);
              conn.end();
            });
        })
        .catch((err) => {});
    });
  },
};
