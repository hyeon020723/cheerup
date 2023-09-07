import { createWebHistory, createRouter } from "vue-router";
import info from "@/components/infoPage.vue";
import reviewlist from "@/components/reviewPage.vue";
import login from "@/components/login.vue";
import signup from "@/components/signUp.vue";
import mypage from "@/components/mypage.vue";
import main from "@/components/main.vue";
// 개별 게시물
import reviewRead from "@/components/reviewRead.vue";
import reviewupload from "@/components/reviewUpload.vue";

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
    path: "/reviewlist",
    name: "reviewlist",
    component: reviewlist,
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
    path: "/mypage/:userId",
    name: "mypage",
    component: mypage,
    props: true,
  },
  {
    path: "/reviewRead/:pageNumber", // 동적 세그먼트 :pageNumber를 정의
    name: "reviewRead",
    component: reviewRead,
    props: true, // props로 라우트 파라미터를 전달하도록 설정
  },
  {
    path: "/reviewupload",
    name: "reviewupload",
    component: reviewupload,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "route-active",
  linkExactActiveClass: "route-active",
});

export default router;
