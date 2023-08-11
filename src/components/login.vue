<template>
  <div class="contents">
    <div class="loginCard">
      <div class="signUp">
        <img src="../assets/logo.png" />
      </div>

      <div class="projectName">
        <b><span style="color: #000080; font-size: 28px">취</span></b>
        <b><span style="color: #ffd700; font-size: 28px">얼업</span></b>
      </div>
      <!--여기서부터 지워야하는 부분-->
      <p>
        <br />
        임시 data<br />id: "user", password: "0000" <br />id: "admin", password:
        "1234"<br />
      </p>
      <!--여기까지 지워야하는 부분-->

      <div class="loginInputCard">
        <p><b>아이디</b></p>
        <input
          class="loginInput"
          type="text"
          id="id"
          v-model="id"
          placeholder="아이디를 입력해주세요"
        />
      </div>

      <div class="loginInputCard">
        <p><b>비밀번호</b></p>
        <input
          class="loginInput"
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div class="login">
        <button id="loginBtn" @click="loginClicked">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cheerupLogin",
  data() {
    return {
      id: "",
      password: "",

      // 임시회원db
      users: [
        { id: "user", password: "0000" },
        { id: "admin", password: "1234" },
      ],
    };
  },
  methods: {
    loginClicked() {
      const ID = this.id;
      const PW = this.password;

      if (ID === "") {
        alert("아이디를 입력해주세요");
        return;
      }
      if (PW === "") {
        alert("비밀번호를 입력해주세요");
        return;
      }
      if (ID !== "" && PW !== "") {
        const user = this.users.find((user) => user.id === ID);

        if (user && user.password === PW) {
          alert("로그인이 완료되었습니다.");
          console.log(ID, PW);
          this.isLoggedIn = true;
          this.$router.push("/");
        } else {
          alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
      }
    },
  },
};
</script>

<style>
.loginCard {
  background-color: white;
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.signUp {
  display: flex;
  flex-direction: column;
}
.loginInputCard {
  height: 40px;
  margin-top: 30px;
  justify-items: center;
  align-items: center;
  width: 100%;
  display: flex;
}

.loginInputCard > p {
  width: 50%;
}

/* input박스 테두리 둥글게 */
.loginInput {
  width: 100%;
  height: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  padding-left: 3%;
}

/* 로그인 버튼 */
#loginBtn {
  padding: 10px 40px;
  margin-top: 20px;
  background-color: #e2e2e2;
  color: gray;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
}
</style>
