import router from "@/router/index";

router.beforeEach((to) => {
  if (to.meta.auth === true) {
  }
  return true;
});
