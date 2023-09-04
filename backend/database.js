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

// ----------------------------------------------------------//

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
          // 매칭되는 아이디 없을 경우
          success: false,
          message: "아이디나 비번확인!",
        });
      }
      if (row[0] !== undefined && row[0].id === user.id) {
        bcrypt.compare(user.password, row[0].password, function (err, res2) {
          if (res2) {
            res.json({
              // 로그인 성공
              success: true,
              message: "성공!",
            });
          } else {
            res.json({
              // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            success: false,
              message: "비번틀림!",
            });
          }
        });
      }
    }
  );
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
