import { defineStore } from "pinia";

export const useGlobalStore = defineStore("GlobalStore", {
  state: () => ({
    drawer: null,
    userID: "",
  }),
  getters: {
    getUserID: (state) => state.userID,
  },
  actions: {
    setNavDrawer(lang: any) {
      this.drawer = lang;
    },
    setUserID(name: string) {
      this.userID = name;
    },
  },
});
