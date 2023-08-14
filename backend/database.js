const database = require("./database");

// ...

async function signupUser(userData) {
  const query = `
    INSERT INTO members (studentID, id, nickname, password)
    VALUES ('${req.body.content.studentID}','${req.body.content.id}','${req.body.content.nickname}','${req.body.content.password}')
  `;
  const values = [
    userData.studentID,
    userData.id,
    userData.nickname,
    userData.password,
  ];

  try {
    await database.runQuery(query, values);
  } catch (error) {
    console.error("Error signing up:", error);
  }
}
