<template>
  <div class="contents">
    <div class="signUpCard">
      <div @submit.prevent="submitForm">
        <div class="signUp">
          <p style="font-size: 18px"><b>회원가입</b></p>
          <p style="font-size: 12px; color: gray">* 필수입력 정보입니다.</p>
        </div>
        <!-- <div class="inputCard">
          <input class="choice" type="file" accept="image/" />
          <button id="studentPicUpload">학생증 사진 업로드</button>
        </div> -->
        <div class="inputCard">
          <p>학번</p>
          <input
            class="input"
            id="inputStudentID"
            placeholder="숫자 7~9자만 입력 가능"
            type="number"
            style="-moz-appearance: textfield"
            v-model="user.inputStudentID"
          />
        </div>

        <div class="inputCard">
          <p>아이디</p>
          <input
            class="input"
            id="inputId"
            placeholder="영문, 숫자, 특수문자 6~12자 가능"
            style="ime-mode: active"
            v-model="user.inputId"
          />
        </div>
        <div class="inputCard">
          <p>닉네임</p>
          <input
            class="input"
            id="inputNickName"
            placeholder="가입 후 변경 불가"
            v-model="user.inputNickName"
          />
        </div>

        <div class="inputCard">
          <p>비밀번호</p>
          <input
            class="input"
            id="inputPW"
            type="password"
            placeholder="영문, 숫자, 특수문자 8~20자 가능"
            style="ime-mode: active"
            v-model="user.inputPW"
          />
        </div>

        <div class="inputCard">
          <p>비밀번호<br />재입력</p>
          <input
            class="input"
            id="inputCPW"
            type="password"
            placeholder="비밀번호를 다시한번 입력"
            style="ime-mode: active"
            v-model="user.inputCPW"
          />
        </div>
        <!-- 
        <div class="inputCard">
          <div class="dropdown">
            <p>취업 상태 :</p>

            <select class="employment" v-model="user.selectEmployment">
              <option value="취업">취업</option>
              <option value="취업준비">취업준비</option>
            </select>
          </div>

          <div class="dropdown">
            <p>분야 :</p>
            <select class="category" v-model="user.selectCategory">
              <option value="none">취업준비</option>
              <option value="개발">개발</option>
              <option value="경영마케팅">경영마케팅</option>
              <option value="제조업">제조업</option>
              <option value="정보통신">정보통신</option>
              <option value="공기업">공기업</option>
              <option value="유통물류">유통물류</option>
              <option value="금융">금융</option>
              <option value="컨설팅">컨설팅</option>
              <option value="교육">교육</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>
        <div class="dropdownGuide">
          <p>취업상태가 준비인 분들은 분야를 취업준비로 선택해주세요.</p>
        </div> -->

        <div class="submit">
          <button id="submitBtn" @click="memberAdd()">가입하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cheerupSignup",

  data() {
    return {
      user: {
        inputStudentID: "",
        inputId: "",
        inputNickName: "",
        inputPW: "",
        inputCPW: "",
      },
    };
  },

  methods: {
    memberAdd() {
      if (!this.validateForm()) {
        return;
      }

      const userData = {
        StudentID: this.user.inputStudentID,
        Id: this.user.inputId,
        NickName: this.user.inputNickName,
        Pw: this.user.inputPW,
      };

      axios
        .post("/api/signup", { user: userData })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/login");
          alert("환영합니다.");
        })
        .catch((error) => {
          alert("회원가입을 다시 진행해주세요.");
          console.error(error);
        });
    },

    validateForm() {
      if (
        !this.user.inputStudentID ||
        !this.user.inputId ||
        !this.user.inputNickName ||
        !this.user.inputPW ||
        !this.user.inputCPW
      ) {
        alert("모든 정보를 입력해주세요.");
        return false;
      }
      if (!/^\d{7,9}$/.test(this.user.inputStudentID)) {
        alert("학번은 숫자 7~9자만 입력 가능합니다.");

        return false;
      }
      if (!/^.{6,12}$/.test(this.user.inputId)) {
        alert("아이디는 영문, 숫자, 특수문자 6~12자만 입력 가능합니다.");
        return false;
      }
      if (!/^.{8,20}$/.test(this.user.inputPW)) {
        alert("비밀번호는 영문, 숫자, 특수문자 8~20자만 입력 가능합니다.");
        return false;
      }

      if (this.user.inputPW !== this.user.inputCPW) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }

      return true;
    },
  },
};
</script>

<style>
/* 학번 입력 input창 화살표 제거 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

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

.inputCard > p {
  width: 15%;
  padding: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
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
  width: 300px;
  height: 100%;
  border: 0px;
  border-bottom: 1px solid rgb(191, 191, 191);
  border-radius: 2px;
  padding-left: 3%;
}

.inputCard .input :active {
  border-bottom: 1px red;
}
/*학생증 사진 업로드 버튼*/
#studentPicUpload {
  white-space: nowrap; /*줄바꿈 금지 */
  width: 200px;
}

/*취업상태, 분야 선택 줄 */
.dropdown * {
  width: auto;
  margin: 5px;
  display: inline-flex;
}
.dropdownGuide > p {
  white-space: nowrap;
  font-size: small;
  text-align: center;
  color: #808080;
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
