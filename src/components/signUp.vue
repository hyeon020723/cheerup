<template>
  <!-- contents부분 코드 -->
  <article class="contents">
    <div class="signUpCard">
      <!-- 카드형식으로 만들기 위해 전체를 묶음-->

      <div class="signUp">
        <!-- 제일 윗 줄 -->
        <span style="font-size: 18px"><b>회원가입</b></span>
        <span style="font-size: 12px; color: gray">* 필수입력 정보입니다.</span>
      </div>

      <div class="inputCard">
        <!-- 두번째 줄 -->
        <input class="choice" type="file" accept="image/" />
        <!-- 업로드 할 파일 선택 -->
        <button class="upload">학생증 사진 업로드</button>
        <!-- 선택된 파일 업로드 버튼 -->
      </div>

      <div class="inputCard" id="inputId">
        <!-- 세번째 줄 -->
        <input
          class="email"
          type="email"
          id="email"
          name="email"
          placeholder="id를 입력하세요 *"
        />
        <!-- 아이디를 email로 표현 -->
        <button type="button" class="duplicateCheck">중복확인</button>
        <!-- 중복확인 버튼 -->
        <!-- 데이터베이스에 아이디 있으면 alert로 중복표시? -->
      </div>

      <div class="inputCard">
        <!-- 네번째 줄 -->
        <input
          type="text"
          id="nickName"
          name="nickName"
          placeholder="사용하실 닉네임을 입력하세요 *"
        />
        <!-- 닉네임 입력 공간 -->
      </div>

      <div class="inputCard">
        <!-- 다섯번째 줄 -->
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="비밀번호를 입력하세요 *"
        />
        <!-- 비밀번호 입력 공간 -->
      </div>

      <div class="inputCard">
        <!-- 여섯번째 줄 -->
        <input
          type="password"
          id="checkPassword"
          name="checkPassword"
          placeholder="비밀번호를 다시 입력하세요 *"
        />
        <!-- 비밀번호확인 입력 공간 -->
      </div>

      <div class="submit">
        <button class="submitBtn">가입하기</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "cheerupSignup",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  background-color: #e2e2e2;
  text-align: center; /* 중앙정렬 */
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signUpCard {
  background-color: white;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.signUp {
  display: flex;
  justify-content: space-between;
}

.inputCard {
  height: 40px;
  margin-top: 30px; /* 칸마다 간격 띄우기*/
  display: flex;
  justify-content: center;
}

#inputItem #email {
  width: 50px;
}

/* 내부 요소들을 flex크기에 따라 자동조절*/
.signUpCard .inputCard * {
  flex: 1;
}

/* 중복확인 버튼 크기 작게하기*/
.signUpCard .inputCard .email {
  flex: 4;
}

/* duplicateCheck를 flex크기에 따라 자동조절*/
.signUpCard .inputCard .duplicateCheck {
  flex: 1;
}

/* 업로드 버튼 크기 작게하기*/
.signUpCard .inputCard .choice {
  flex: 4;
}

/* upload를 flex크기에 따라 자동조절*/
.signUpCard .inputCard .upload {
  flex: 1;
}

#inputId {
  width: 100%;
}

/*제출버튼 간격조절*/
.submit {
  flex: 1;
  margin-top: 10px;
}

.signUpCard .submit {
  text-align: center;
}

/* 버튼 모양 둥글게 만들기 */
.signUpCard .submit .submitBtn {
  padding: 10px 40px;
  background-color: #000080;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
}
</style>
