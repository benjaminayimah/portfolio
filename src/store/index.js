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
    project: { active: false, project: {}},
    menus: [
      { id: 1, url: "/", name: "Home" },
      { id: 2, url: "/about", name: "About" },
      { id: 3, url: "https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing", name: "Resume", external: true},
    ],
    projects: [
      { id: 1, type: 'case-study', title: ' Voluptate possimus voluptas', image: require('@/assets/images/behance_shots.jpg')},
      { id: 2, type: 'project', title: 'Doloribus officiis neque', image: require('@/assets/images/instagram-shots.jpg')},
      { id: 3, type: 'case-study', title: 'Lorem ipsum consectetur amet', image: require('@/assets/images/behance_shots.jpg')},
      { id: 4, type: 'project', title: 'Amet adipisicing Mollitia', image: require('@/assets/images/instagram-shots.jpg')}
    ]
  },
  mutations: {
    showProject(state, payload) {
      document.body.classList.add('fixed-body')
      const thisProject = state.projects.find(p => p.id === payload)
      state.project.project = thisProject
      // setTimeout(()=> {
        state.project.active = true
      // }, 5)
    },
    findIndex(state, payload) {
      const prod = state.projects[payload]
      console.log(prod)
      state.project.project = prod
    },
    showNext(state) {
      const length = state.projects.length -1
      const id = state.project.project.id
      const i = state.projects.findIndex(x => x.id === id)
      console.log(i)
      if(i < length) {
        this.commit('findIndex', i+1)
      }else {
        this.commit('findIndex', 0)
      }

    },
    showPrevious(state) {
      const length = state.projects.length
      const id = state.project.project.id
      const i = state.projects.findIndex(x => x.id === id)
      if(i > 0) {
        this.commit('findIndex', i-1)
      }else {
        this.commit('findIndex', length-1)
      }
    },
    closeProject(state) {
      document.body.classList.remove('fixed-body')
      state.project.active = false
      state.project.project = {}
    },
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
      if(state.showMenu){
        state.showMenu = false
        document.body.classList.remove('fixed-body')
      }else {
        state.showMenu = true
        document.body.classList.add('fixed-body')

      }
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
    getProject: (state) => state.project,
    getProjects: (state) => state.projects,


  },
  actions: {
  },
  modules: {
  }
})
