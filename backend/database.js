const database = require("./database");

// ...

async function signupUser(userData) {
  const query = `
    INSERT INTO members (studentID, id, nickname, password)
    VALUES ('${req.body.content.studentID}','${req.body.content.id}','${req.body.content.nickname}','${req.body.content.password}')
  `;
  const user = [
    userData.studentID,
    userData.id,
    userData.nickname,
    userData.password,
  ];

  try {
    await database.runQuery(query, user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
}

//router

router.post("/signUp", function (req, res) {
  const user = {
    studentID: req.body.user.studentID,
    id: req.body.user.id,
    nickname: req.body.user.nickname,
    password: req.body.user.password,
  };
  connection.query('SELECT id FROM members WHERE id = "' + user.id + '"');
});

router.post("/login", function (req, res) {
  const user = {
    id: req.body.user.id,
    password: req.body.user.password,
  };
  connection.query(
    'SELECT id, password FROM users WHERE id = "' + user.id + '"',
    function (err, row) {
      if (err) {
        res.json({
          // 매칭되는 아이디 없을 경우
          success: false,
          message: "Login failed please check your id or password!",
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
