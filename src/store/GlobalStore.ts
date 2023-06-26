import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GlobalStore", {
  state: () => ({
    navDrawer: null,
    userID: "",
  }),
  getters: {
    getUserID: (state) => state.userID,
  },
  actions: {
    setNavDrawer(lang: any) {
      this.navDrawer = lang;
    },
    setUserID(name: string) {
      this.userID = name;
    },
  },
});
