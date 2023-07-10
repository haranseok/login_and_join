import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
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
        default: import("@/pages/Home.vue"),
      },
      meta: { auth: true },
    },
    {
      path: "/movies/:heropy",
      name: "movie",
      components: {
        TheHeader,
        default: import("@/pages/Detail.vue"),
      },
    },
    {
      path: "/my_page",
      components: {
        TheHeader,
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
        default: import("@/pages/Payment.vue"),
      },
    },
    {
      path: "/cart",
      components: {
        TheHeader,
        default: import("@/pages/Cart.vue"),
      },
    },
    {
      path: "/test",
      component: () => import("@/pages/test.vue"),
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

export default router;
