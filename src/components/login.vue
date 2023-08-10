<template>
  <!-- contents부분 코드 -->
  <div class="contents">
    <div class="loginCard">
      <!-- 카드형식으로 만들기 위해 전체를 묶음-->

      <div class="signUp">
        <!-- 제일 윗 줄 -->
        <img src="../assets/logo.png" />
        <!-- 로고 이미지로 삽입 -->
      </div>

      <div class="projectName">
        <!-- 두번째 줄 -->
        <b><span style="color: #000080; font-size: 28px">취</span></b>
        <b><span style="color: #ffd700; font-size: 28px">얼업</span></b>
      </div>

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
          type="text"
          id="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div class="login">
        <button id="loginBtn" @click="loginClicked">로그인</button>
      </div>
      <!-- 로그인 버튼 눌렀을 때, alert뜨고 확인 누르면 main으로 이동?? -->
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
    };
  },
  methods: {
    loginClicked() {
      if (this.id === "") {
        alert("아이디를 입력해주세요");
        return;
      } else if (this.password === "") {
        alert("비밀번호를 입력해주세요");
        return;
      } else {
        alert("로그인이 완료되었습니다.");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
/* 카드형식으로 만들기 */
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
.loginInputCard {
  height: 40px;
  margin-top: 30px;
  justify-items: center;
  align-items: center;
  width: 100%;
  display: flex;
}

.loginInputCard p {
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