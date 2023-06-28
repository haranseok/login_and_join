import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheSideBar from "@/components/TheSideBar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/pages/login/Login.vue"),
    },
    {
      path: "/join",
      component: () => import("@/pages/login/Join.vue"),
    },
    {
      path: "/home",
      components: {
        TheHeader,
        TheSideBar,
        default: import("@/pages/Home.vue"),
      },
      meta: { auth: true },
    },
    {
      path: "/movies/:heropy",
      name: "movie",
      components: {
        TheHeader,
        TheSideBar,
        default: import("@/pages/Detail.vue"),
      },
    },
    {
      path: "/my_page",
      components: {
        TheHeader,
        TheSideBar,
        default: import("@/pages/myPageContent/myPage.vue"),
      },
      children: [
        {
          path: "address",
          component: () => import("@/pages/myPageContent/Address.vue"),
        },
      ],
    },
    {
      path: "/payment",
      components: {
        TheHeader,
        TheSideBar,
        default: import("@/pages/Payment.vue"),
      },
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

export default router;
