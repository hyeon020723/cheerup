import { createStore } from "vuex";
// import axios from "axios";
// import store from "@/store.js";

export default createStore({
  state: { loginSuccess: false, userId: "", userPw: "", token: null },

  mutations: {
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

  modules: {},
});
