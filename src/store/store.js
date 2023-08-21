import { createStore } from "vuex";
// import axios from "axios";
// import store from "@/store.js";

export default createStore({
  state: { loginSuccess: false, userId: "", userPw: "", token: null },

  mutations: {
    //회원가입
    signup(state, userData) {
      user = user;
    },

    //로그인
    login(state, resData) {
      state.userId = resData.userId;
      state.userPw = resData.userPw;

      state.token = resData.token;
      state.loginSuccess = true;
    },

    //로그아웃
    logout(state) {
      state.userId = "";
      state.userPw = "";

      state.token = null;
      state.loginSuccess = false;
    },
  },

  actions: {
    // 회원 가입 액션
    async signup({ commit }, userData) {
      try {
        // 여기서 API 호출을 처리하고 응답 데이터를 받아옴
        // 예시: const response = await axios.post("/signup", userData);
        // API 호출 성공 시, 뮤테이션을 호출하여 상태를 업데이트
        // commit('signup', response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});

//header로 로그인상태 보내기

// axios
//   .get("http://localhost:8080/", {
//     headers: {
//       Authorization: "Bearer " + store.state.token, // 수정
//     },
//   })
//   .then((res) => {
//     this.sampleData = res.data;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
