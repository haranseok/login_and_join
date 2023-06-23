import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GlobalStore", {
  state: () => ({
    navDrawer: null,
  }),
  actions: {
    setNavDrawer(lang: any) {
      this.navDrawer = lang;
      console.log(lang);
    },
  },
});
