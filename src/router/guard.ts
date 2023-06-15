import router from "@/router/index";

router.beforeEach((to) => {
  console.log(to.meta.auth);
  if (to.meta.auth === true) {
    console.log("s");
  }
  return true;
});
