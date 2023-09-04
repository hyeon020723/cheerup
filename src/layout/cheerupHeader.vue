<template>
  <div class="cheerupHeader">
    <router-link to="/" class="home">
      <div id="logo">
        <img src="../assets/logo.png" />
        <h2 style="color: #000080">취</h2>
        <h2 style="color: #ffd700">얼업</h2>
      </div>
    </router-link>

    <div class="mainMenuBox">
      <router-link to="/info" class="mainMenu">채용 정보</router-link> |
      <router-link to="/reviewlist" class="mainMenu">취업 후기</router-link>
    </div>

    <div class="loginWithSignupBox">
      <span v-if="loginSuccess">
        <!--로그인 시-->
        <a @click="logout" class="loginWithSignupMenu">로그아웃</a> |
        <router-link to="/myPage" class="loginWithSignupMenu"
          >마이페이지</router-link
        >
      </span>

      <span v-else>
        <router-link to="/login" class="loginWithSignupMenu"
          >로그인</router-link
        >
        |
        <router-link to="/signup" class="loginWithSignupMenu"
          >회원가입</router-link
        >
      </span>
    </div>
    <!--loginWithSignup end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginSuccess: false,
    };
  },
  created() {
    const token = localStorage.getItem("cheerup");
    if (token) {
      this.loginSuccess = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("cheerup");
      this.$store.commit("logout");
      this.$router.push("/");
      this.loginSuccess = false;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: lighter;
  font-style: normal;
}
* {
  font-family: "GmarketSansMedium";
}
.cheerupHeader {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

#logo {
  width: 100%;
  display: inline-flex;
  align-items: end;
  padding: 0px;
}

#logo img {
  height: 45px;
  object-fit: contain;
}
.loginWithSignup {
  background-color: #e2e2e2;
  border-radius: 8px;
  color: white;
  width: 200px;
  white-space: nowrap;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  text-decoration: none;
  padding: 10px;
  color: #000080;
}
.menuLogin,
.menuSignup {
  text-decoration: none;
  padding: 10px;
  color: gray;
}
.menuLogin:hover,
.menuSignup:hover,
.route-active .menuLogin,
.route-active .menuSignup {
  color: white;
}
.menu:hover,
.route-active .menu {
  background-color: #000080;
  border-radius: 8px;
  color: white;
  border: #000080;
  text-align: center;
}
</style>
