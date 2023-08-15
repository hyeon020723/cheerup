import { createWebHistory, createRouter } from "vue-router";
import info from "@/components/infoPage.vue";
import review from "@/components/reviewPage.vue";
import login from "@/components/login.vue";
import signup from "@/components/signUp.vue";
import myPage from "@/components/myPage.vue";
import main from "@/components/main.vue";

// 개별 게시물
import reviewRead from "@/components/reviewRead.vue";
import reviewUpload from "@/components/reviewUpload.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: main,
  },
  {
    path: "/info",
    name: "info",
    component: info,
  },
  {
    path: "/review",
    name: "review",
    component: review,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/myPage",
    name: "myPage",
    component: myPage,
  },
  {
    path: "/reviewRead",
    name: "reviewRead",
    component: reviewRead,
  },
  {
    path: "/reviewUpload",
    name: "reviewUpload",
    component: reviewUpload,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "route-active",
  linkExactActiveClass: "route-active",
});

export default router;
