import { createStore } from 'vuex'
import data from './modules/data'
export default createStore({
  state: {
    mobile: false,
    tablet: false,
    desktop: false,
    windowHeight: '',
    windowWidth: '',
    darkMode: localStorage.getItem('darkMode') || false,
    showMenu: false,
    menus: [
      { id: 1, url: "/", name: "Home" },
      { id: 2, url: "/about", name: "About" },
      { id: 3, url: "https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing", name: "Resume", external: true},
    ],
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
      // if(new Date().getHours() > 19) {
      //   localStorage.setItem('darkMode', true)
      //   this.commit('darkMode') 
      //   state.darkMode = true
      // }else {
        state.darkMode ? this.commit('darkMode') : this.commit('lightMode')
      // }

    },
    darkMode() {
      document.getElementsByTagName( 'html' )[0].setAttribute('class', 'dark-mode')
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    },
    lightMode() {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
      document.getElementsByTagName( 'html' )[0].setAttribute('class', 'light-mode')
    },
    toggleMenu: (state) => {
      if(state.showMenu){
        state.showMenu = false
        document.body.classList.remove('fixed-body')
      }else {
        state.showMenu = true
        document.body.classList.add('fixed-body')
      }
    },
    getHtml() {
      return document.getElementsByTagName( 'html' )[0]
    }
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

  },
  actions: {
  },
  modules: {
    data
  }
})
