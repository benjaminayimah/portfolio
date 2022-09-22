export default {
    state: {
        project: { active: false, project: {}},
        projects: [
            { id: 1, type: 'project', title: 'Flexsale', image: require('@/assets/images/flexsale.png'), description: 'A multi-platform point of sale and inventory management system.',
                overview: { problem: 'd', solution: 'Flexsale is a multi-platform inventory and point of sale application that provide retail store owners a flexible way to manage their store inventory, record sales, perform sales analysis, get notified of expiring products.'}
            },
            { id: 2, type: 'case study', title: 'Infinity Movies', image: require('@/assets/images/instagram-shots.jpg'), description: 'Movie trailer app for booking upcoming shows and streaming on-demand. '
            },
            { id: 3, type: 'case study', title: 'Phoenix Career Mentorship App', image: require('@/assets/images/behance_shots.jpg'), description: 'Designing for social good: An app to help formarly incarcerated individuals to find jobs.'
            },
            { id: 4, type: 'case study', title: 'Pixels Tutorials App', image: require('@/assets/images/instagram-shots.jpg'), description: 'An app to help users find design tutorials and learn new skills.'
            }
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
            state.project.project = prod
        },
        showNext(state) {
            const length = state.projects.length -1
            const id = state.project.project.id
            const i = state.projects.findIndex(x => x.id === id)
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