import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/:notFound(.*)*",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
});

export default router;
