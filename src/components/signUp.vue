<template>
  <!-- contents부분 코드 -->
  <div class="contents">
    <div class="signUpCard">
      <!-- 카드형식으로 만들기 위해 전체를 묶음-->
      <form @submit.prevent="submitForm">
        <div class="signUp">
          <!-- 제일 윗 줄 -->
          <p style="font-size: 18px"><b>회원가입</b></p>
          <p style="font-size: 12px; color: gray">* 필수입력 정보입니다.</p>
        </div>

        <div class="inputCard">
          <input class="choice" type="file" accept="image/" />
          <!-- 업로드 할 파일 선택 -->
          <button id="studentPicUpload">학생증 사진 업로드</button>
          <!-- 선택된 파일 업로드 버튼 -->
        </div>

        <div class="inputCard" id="inputId">
          <!-- 세번째 줄 -->
          <input
            class="input"
            id="inputId"
            placeholder="아이디를 입력하세요 *"
          />
          <button id="duplicateCheck">중복확인</button>
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="nickName"
            placeholder="사용하실 닉네임을 입력하세요 *"
          />
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="password"
            placeholder="비밀번호를 입력하세요 *"
          />
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="checkPassword"
            placeholder="비밀번호를 다시 입력하세요 *"
          />
          <!-- 비밀번호확인 입력 공간 -->
        </div>

        <div class="inputCard">
          <div class="dropdown">
            <p id="employment">취업 상태 :</p>
            <select class="employment">
              <option value="none">-</option>
              <option>취업</option>
              <option>취업준비</option>
            </select>
          </div>

          <div class="dropdown">
            <p id="category">분야 :</p>
            <select class="category">
              <option value="none">-</option>
              <option v-for="item in categoryOptions" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>

        <div class="submit">
          <button id="submitBtn">가입하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "cheerupSignup",
  data() {
    return {
      showCategory: false, // 드롭다운 토글 변수
      categoryOptions: [
        "개발",
        "경영마케팅",
        "제조업",
        "정보통신",
        "공기업",
        "유통물류",
        "금융",
        "컨설팅",
        "교육",
        "기타",
      ], // 카테고리 옵션들

      //받아올 데이터 입력받을 곳
      choice: "",
      id: "",
      nickName: "",
      password: "",
      checkPassword: "",
      employment: "",
      category: "",
    };
  },
  methods: {
    // 카테고리 드롭다운 토글 함수
    toggleCategory() {
      this.showCategory = !this.showCategory;
    },
    // 카테고리 선택 함수
    selectCategory(item) {
      this.category = item;
      this.showCategory = false;
    },
    // submitForm() {
    //   const userData = {
    //     //eslint-disable-line no-unused-vars
    //     choice: this.choice,
    //     id: this.id,
    //     nickName: this.nickName,
    //     password: this.password,
    //     checkPassword: this.checkPassword,
    //     employment: this.employment,
    //     category: this.category,
    //   };
    // },
  },
};
</script>

<style>
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signUpCard {
  background-color: white;
  width: 400px;
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
  width: 100%;
  height: 40px;
  margin-top: 30px; /* 칸마다 간격 띄우기*/
  display: flex;
  justify-content: center;
}

.inputCard .input {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(191, 191, 191);
  border-radius: 2px;
  padding-left: 3%;
}

/*학생증 사진 업로드 버튼*/
#studentPicUpload {
  width: 200px;
}

/*중복확인 버튼 */
#duplicateCheck {
  width: 100px;
  height: 100%;
}

/*취업상태, 분야 선택 줄 */
.dropdown * {
  width: auto;
  margin: 5px;
  display: inline-flex;
}

/* 가입하기 버튼 */
.submit {
  text-align: center;
}
#submitBtn {
  margin: 20px;
  padding: 10px 40px;
  background-color: #000080;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
}
</style>
