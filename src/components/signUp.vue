<template>
  <div class="contents">
    <div class="signUpCard">
      <form @submit.prevent="submitForm">
        <div class="signUp">
          <p style="font-size: 18px"><b>회원가입</b></p>
          <p style="font-size: 12px; color: gray">* 필수입력 정보입니다.</p>
        </div>

        <!-- <div class="inputCard">
          <input class="choice" type="file" accept="image/" />
          <button id="studentPicUpload">학생증 사진 업로드</button>
        </div> -->

        <div class="inputCard">
          <input
            class="input"
            id="inputStudentID"
            placeholder="학번을 입력하세요 *"
            v-model="user.inputStudentID"
          />
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="inputId"
            placeholder="아이디를 입력하세요 * "
            v-model="user.inputId"
          />
          <button id="duplicateCheckBtn" @click="duplicateCheck">
            중복확인
          </button>
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="inputNickName"
            placeholder="사용하실 닉네임을 입력하세요 *"
            v-model="user.inputNickName"
          />
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="inputPW"
            placeholder="비밀번호를 입력하세요 *"
            v-model="user.inputPW"
          />
        </div>

        <div class="inputCard">
          <input
            class="input"
            id="inputCPW"
            placeholder="비밀번호를 다시한번 입력하세요 *"
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
      </form>
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
    duplicateCheck() {
      alert("사용가능한 아이디입니다.");
      //
      //
      //
      //
      //
    },

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
  border: 0px;
  border-bottom: 1px solid rgb(191, 191, 191);
  border-radius: 2px;
  padding-left: 3%;
}

/*학생증 사진 업로드 버튼*/
#studentPicUpload {
  white-space: nowrap; /*줄바꿈 금지 */
  width: 200px;
}

/*중복확인 버튼 */
#duplicateCheckBtn {
  width: 100px;
  white-space: nowrap;
  height: 100%;
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
