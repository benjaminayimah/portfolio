export default {
    state: {
        intro: {h1: 'Hi', i1: '👋🏽', i2: '👩🏾‍💻👨🏽‍💻👨‍💻', h2: 'I\'m Ben', p1: 'A UI/UX Designer who focuses on crafting delightful digital experience for all users.', p2: 'Here are few of my works...'},
        project: { active: false, project: {}},
        projects: [
            { id: 1, type: 'project', title: 'Flexsale', thumbnail: require('@/assets/images/flexsale.png'), banner: require('@/assets/images/flexsale-banner.png'), banner_2: '', description: 'A multi-platform point of sale and inventory management system.',
                overview: { problem: 'This is problem number one', product: 'Flexsale is a multi-platform inventory and point of sale application that provide retail store owners a flexible way to manage their store inventory, record sales, perform sales analysis, get notified of expiring products.', goal: '', role: '', duration: ''},
                empathize: { overview: '', pain_points: [ { id: 1, title: 'Lorem', description: 'Lorem ipsum'} ], person_name: '', problem_statement: '', persona_img: '', age: '', education: '', hometown: '', family: '', ocupation: '', headline: '', goals: ['me', 'me', 'your'], frustrations: [], scenario: '', competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: '', paper_wireframe_img: '', digital_wireframe: '', digital_wireframe_img: '', screen_variations: '', screen_variations_imgs: [], lofi_prototyp: '', lofi_prototype_img: '', usability_study: '', usability_study_fidings: [] },
                refining_the_design: { mockups: '', accessibility_considerations: [], refined_designs: [], screen_variations: '', screen_variations_imgs: [], hifi_prototype: '', hifi_prototype_video: ''},
                going_forward: { takeways: [], nextstep: []}
            },
            { id: 2, type: 'case study', title: 'Infinity Movies', thumbnail: require('@/assets/images/instagram-shots.jpg'), banner: require('@/assets/images/instagram-shots.jpg'), banner_2: '', description: 'Movie trailer app for booking upcoming shows and streaming on-demand. ',
                overview: { problem: 'd', product: 'Flexsale is a multi-platform inventory and point of sale application that provide retail store owners a flexible way to manage their store inventory, record sales, perform sales analysis, get notified of expiring products.', goal: '', role: '', duration: ''},
                empathize: { overview: '', pain_points: [{ id: 1, title: 'Lorem', description: 'Lorem ipsum'} ], person_name: '', problem_statement: '', persona_img: '', age: '', education: '', hometown: '', family: '', ocupation: '', headline: '', goals: [], frustrations: [], scenario: '', competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: '', paper_wireframe_img: '', digital_wireframe: '', digital_wireframe_img: '', screen_variations: '', screen_variations_imgs: [], lofi_prototyp: '', lofi_prototype_img: '', usability_study: '', usability_study_fidings: [] },
                refining_the_design: { mockups: '', accessibility_considerations: [], refined_designs: [], screen_variations: '', screen_variations_imgs: [], hifi_prototype: '', hifi_prototype_video: ''},
                going_forward: { takeways: [], nextstep: []}
            },
            { id: 3, type: 'case study', title: 'Phoenix Career Mentorship App', thumbnail: require('@/assets/images/behance_shots.jpg'), banner: require('@/assets/images/behance_shots.jpg'), banner_2: '', description: 'Designing for social good: An app to help formarly incarcerated individuals to find jobs.',
                overview: { problem: 'd', product: 'Flexsale is a multi-platform inventory and point of sale application that provide retail store owners a flexible way to manage their store inventory, record sales, perform sales analysis, get notified of expiring products.', goal: '', role: '', duration: ''},
                empathize: { overview: '', pain_points: [ { id: 1, title: 'Lorem', description: 'Lorem ipsum'} ], person_name: '', problem_statement: '', persona_img: '', age: '', education: '', hometown: '', family: '', ocupation: '', headline: '', goals: [], frustrations: [], scenario: '', competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: '', paper_wireframe_img: '', digital_wireframe: '', digital_wireframe_img: '', screen_variations: '', screen_variations_imgs: [], lofi_prototyp: '', lofi_prototype_img: '', usability_study: '', usability_study_fidings: [] },
                refining_the_design: { mockups: '', accessibility_considerations: [], refined_designs: [], screen_variations: '', screen_variations_imgs: [], hifi_prototype: '', hifi_prototype_video: ''},
                going_forward: { takeways: [], nextstep: []}
            },
            { id: 4, type: 'case study', title: 'Pixels Tutorials App', thumbnail: require('@/assets/images/instagram-shots.jpg'), banner: require('@/assets/images/instagram-shots.jpg'), banner_2: '', description: 'An app to help users find design tutorials and learn new skills.',
                overview: { problem: 'd', product: 'Flexsale is a multi-platform inventory and point of sale application that provide retail store owners a flexible way to manage their store inventory, record sales, perform sales analysis, get notified of expiring products.', goal: '', role: '', duration: ''},
                empathize: { overview: '', pain_points: [ { id: 1, title: 'Lorem', description: 'Lorem ipsum'} ], person_name: '', problem_statement: '', persona_img: '', age: '', education: '', hometown: '', family: '', ocupation: '', headline: '', goals: [], frustrations: [], scenario: '', competitive_audit: '', audit_img: '', ideation: '', ideation_img: '', user_journey_map: '', user_journey_map_img: ''},
                starting_the_design: { site_map: '', site_map_img: '', paper_wireframe: '', paper_wireframe_img: '', digital_wireframe: '', digital_wireframe_img: '', screen_variations: '', screen_variations_imgs: [], lofi_prototyp: '', lofi_prototype_img: '', usability_study: '', usability_study_fidings: [] },
                refining_the_design: { mockups: '', accessibility_considerations: [], refined_designs: [], screen_variations: '', screen_variations_imgs: [], hifi_prototype: '', hifi_prototype_video: ''},
                going_forward: { takeways: [], nextstep: []}
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
            // document.body.classList.add('fixed-body')
            const thisProject = state.projects.find(p => p.id == payload)
            state.project.project = thisProject
            window.scrollTo(0,0)
            // setTimeout(()=> {
            //   state.project.active = true
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
        getIntro: (state) => state.intro
    },
}