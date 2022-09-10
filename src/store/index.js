import { createStore } from 'vuex'

export default createStore({
  state: {
    mobile: false,
    tablet: false,
    desktop: false,
    windowHeight: '',
    windowWidth: '',
    darkMode: localStorage.getItem('darkMode') || false,
    showMenu: false,
    dynamicFloatingDiv: { left: 0, top: 0, bottom: 0},
    menus: [
      { id: 1, url: "/", name: "Home" },
      { id: 2, url: "/about", name: "About" },
      { id: 3, url: "https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing", name: "Resume", external: true},
    ]
  },
  mutations: {
    computeWindow(state) {
      let appWidth = 990
      let winWidth = window.innerWidth
      state.windowHeight = window.innerHeight
      state.windowWidth = winWidth
      if(winWidth <= 700){
        this.commit('setMobile')
      }else if(winWidth > appWidth){
        this.commit('setDesktop')
      }else{
        this.commit('setTablet')
      }
    },
    setMobile(state) {
      this.commit('resetAll')
      state.mobile = true
    },
    setTablet(state) {
      this.commit('resetAll')
      state.tablet = true
    },
    setDesktop(state) {
      this.commit('resetAll')
      state.desktop = true
    },
    resetAll(state) {
      state.tablet = false
      state.mobile = false
      state.desktop = false
    },
    setDarkMode(state) {
      const mode = localStorage.getItem('darkMode')
      if(mode) {
        this.commit('lightMode')
        state.darkMode = false
        localStorage.removeItem('darkMode')
      }else {
        this.commit('darkMode')
        state.darkMode = true
        localStorage.setItem('darkMode', true)
      }
    },
    getDarkMode(state) {
      state.darkMode ? this.commit('darkMode') : this.commit('lightMode')
    },
    darkMode() {
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    },
    lightMode() {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    },
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu
    },
    setDynamicFloatingDiv(state, payload) {
      const rect = payload.getBoundingClientRect()
      let top = rect.top
      let left = rect.left
      let bottom = rect.bottom
      state.dynamicFloatingDiv.left = left
      state.dynamicFloatingDiv.top = top
      state.dynamicFloatingDiv.bottom = bottom
      document.body.classList.add('fixed-body')
    },
    reSetDynamicFloatingDiv(state) {
      state.dynamicFloatingDiv.left = 0
      state.dynamicFloatingDiv.top = 0
      state.dynamicFloatingDiv.bottom = 0
      document.body.classList.remove('fixed-body')
    },
  },
  getters: {
    getWindowHeight: (state) => state.windowHeight,
    getWindowWidth: (state) => state.windowWidth,
    getMobile: (state) => state.mobile,
    getTablet: (state) => state.tablet,
    getDesktop: (state) => state.desktop,
    getDarkMode: (state) => state.darkMode,
    getShowMobMenu: (state) => state.showMenu,
    getMenus: (state) => state.menus,
    getFloatingDiv: (state) => state.dynamicFloatingDiv,
  },
  actions: {
  },
  modules: {
  }
})
