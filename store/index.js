import { createStore } from "vuex";
import axios from "axios";
import store from "@/store";

export default createStore({
  state: { loginSuccess: false, userId: "", token: null, count: 0 },

  mutations: {
    addOne(state) {
      state.count += 1;
    },
    login(state, resData) {
      state.userId = resData.userId;
      state.token = resData.token;
      state.loginSuccess = true;
    },
    logout(state) {
      state.userId = "";
      state.token = null;
      state.loginSuccess = false;
    },
  },
  actions: {},
  modules: {},
});

//header로 로그인상태 보내기

axios;
// Example of how to send Authorization header in Axios requests
axios
  .get("http://localhost:8081/", {
    headers: {
      Authorization: "Bearer " + this.state.token,
    },
  })
  .then((res) => {
    this.sampleData = res.data;
  })
  .then((err) => {
    console.log(err);
  });
