<template>
  <!-- contents부분 코드 -->
  <article class="contents">
    <div class="loginCard">
      <!-- 카드형식으로 만들기 위해 전체를 묶음-->

      <div class="signUp">
        <!-- 제일 윗 줄 -->
        <img src="./logo.png" />
        <!-- 로고 이미지로 삽입 -->
      </div>

      <div class="projectName">
        <!-- 두번째 줄 -->
        <strong><span style="color: #000080; font-size: 28px">취</span></strong>
        <strong
          ><span style="color: #ffd700; font-size: 28px">얼업</span></strong
        >
      </div>

      <div class="inputCard">
        <!-- 세번째 줄 -->
        <b><span>이메일</span></b>
      </div>

      <div class="inputContent">
        <!-- 네번째 줄 -->
        <input
          type="text"
          id="name"
          name="name"
          placeholder="아이디를 입력해주세요"
        />
      </div>

      <div class="inputCard">
        <!-- 다섯번째 줄 -->
        <b><span>비밀번호</span></b>
      </div>

      <div class="inputContent">
        <!-- 여섯번째 줄 -->
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="비밀번호를 입력하세요"
        />
        <!-- 비밀번호 입력 공간 -->
      </div>

      <div class="login">
        <button class="loginBtn" @click="loginClicked">로그인</button>
      </div>
      <!-- 로그인 버튼 눌렀을 때, alert뜨고 확인 누르면 main으로 이동?? -->
    </div>
  </article>
</template>

<script>
export default {
  name: "cheerupLogin",
  methods: {
    loginClicked() {
      alert("로그인이 완료되었습니다.");
      this.$router.push("/");
    },
  },
};
</script>

<style>
html {
  background-color: #e2e2e2;
  text-align: center;
}

/* 카드형식으로 만들기 */
.loginCard {
  background-color: white;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 이메일, 비밀번호 글자 왼쪽 정렬 */
.inputCard {
  height: 40px;
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
}

.projectName {
  display: flex;
  justify-content: center;
}

.inputContent {
  height: 40px;
  display: flex;
  justify-content: center;
}

/* input박스 테두리 둥글게 */
.loginCard .inputContent * {
  flex: 1;
  border: 1px solid #e2e2e2;
  border-radius: 2px;
}

/* input 요소의 placeholder 색상 변경 */
input::placeholder {
  color: #e2e2e2;
}

.login {
  display: flex;
  justify-content: center;
}

.loginCard .login * {
  flex: 1;
}

/* 로그인 버튼 꾸미기 */
.loginCard .login .loginBtn {
  padding: 10px 40px;
  margin-top: 50px;
  background-color: #e2e2e2;
  color: gray;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
}
</style>
