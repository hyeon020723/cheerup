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
        백엔드 임시 data<br />id: "user", pw: "0000" <br />
      </p>
      <!--여기까지 지워야하는 부분-->

      <div class="loginInputCard">
        <p><b>아이디</b></p>
        <input
          class="loginInput"
          type="text"
          id="userId"
          v-model="userId"
          placeholder="아이디를 입력해주세요"
          @keyup.enter="login()"
        />
      </div>

      <div class="loginInputCard">
        <p><b>비밀번호</b></p>
        <input
          class="loginInput"
          type="password"
          id="userPw"
          v-model="userPw"
          placeholder="비밀번호를 입력하세요"
          @keyup.enter="login()"
        />
      </div>

      <div class="login">
        <button id="loginBtn" @click="login()">로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
import cheerupHeader from "@/components/cheerupHeader.vue";
import axios from "axios";

export default {
  name: "cheerupLogin",

  data() {
    return {
      userId: "",
      userPw: "",
      loginSuccess: false,
    };
  },

  components: {
    // eslint-disable-next-line
    cheerupHeader,
  },

  methods: {
    login() {
      const saveData = { userId: this.userId, userPw: this.userPw };

      if (saveData.userId === "") {
        alert("아이디를 입력해주세요");
        return;
      }
      if (saveData.userPw === "") {
        alert("비밀번호를 입력해주세요");
        return;
      }

      axios
        .post("/api/login", {
          userId: saveData.userId,
          userPw: saveData.userPw,
        })

        .then((res) => {
          if (res.status === 200) {
            alert("로그인이 완료되었습니다.");
            localStorage.setItem("cheerup", res.data.token);
            this.loginSuccess = true;

            //store로 로그인 상태 ==> 문제발생
            // this.$store.commit("login", res.data);

            //화면이동
            this.$router.push("/");
          }
        })
        .catch((error) => {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          console.error(error);
        });
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
  border: 0px;
  border-bottom: 1px solid rgb(191, 191, 191);
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
