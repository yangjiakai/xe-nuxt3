import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    mainSidebar: true,
    darkMode: false
  }),
  persist: [
    {
      paths: [],
      storage: localStorage,
    },
  ],

  getters: {

  },
  actions: {
    toggleSidebar() {
      this.mainSidebar = !this.mainSidebar
      this.darkMode = !this.darkMode
    }
  },
})