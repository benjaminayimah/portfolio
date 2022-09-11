export default {
    state: {
        project: { active: false, project: {}},
        projects: [
        { id: 1, type: 'case-study', title: ' Voluptate possimus voluptas', image: require('@/assets/images/behance_shots.jpg')},
        { id: 2, type: 'project', title: 'Doloribus officiis neque', image: require('@/assets/images/instagram-shots.jpg')},
        { id: 3, type: 'case-study', title: 'Lorem ipsum consectetur amet', image: require('@/assets/images/behance_shots.jpg')},
        { id: 4, type: 'project', title: 'Amet adipisicing Mollitia', image: require('@/assets/images/instagram-shots.jpg')}
        ]
    },
    mutations: {
        closeProject(state) {
            document.body.classList.remove('fixed-body')
            state.project.active = false
            state.project.project = {}
        },
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
    },
    getters: {
        getProject: (state) => state.project,
        getProjects: (state) => state.projects,
    },
}