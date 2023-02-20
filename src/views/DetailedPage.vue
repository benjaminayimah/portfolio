<template>
    <div class="main-section">
        <div class="main-row">
            <div class="section-wrapper">
                <div class="fx gap-50 main-body-flx">
                    <div class="fx-shrink-0">
                        <nav class="sticky-top fx vertical-nav">
                            <ul class="fx">
                                <li v-for="tab in tabs" :key="tab.id">
                                    <a :id="'tab_'+tab.id" :href="tab.url" :class="{ 'tab-active': tab.active}" class="fx ai-c blur blur-2">{{ tab.name }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="detailed_body" class="fx-grow-1 ovf-hidden">
                        <div class="project-body">
                            <section id="overview">
                                <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+getProject.project.banner+')'}"></div>
                                <img v-if="getProject.project.banner_2" class="w-100" :src="getProject.project.banner_2" alt="Project image"/>
                                <h1>Overview</h1>
                                <div>
                                    <div class="inner-row">
                                        <h2>The problem</h2>
                                        <div>{{ getProject.project.overview.problem }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>The product</h2>
                                        <div>{{ getProject.project.overview.product }}</div>
                                        <div v-if="getProject.project.overview.li">
                                            <li v-for="list in getProject.project.overview.li" :key="list.id">{{ list.data }}</li>
                                        </div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Goal</h2>
                                        <div>{{ getProject.project.overview.goal }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>My role</h2>
                                        <div>{{ getProject.project.overview.role }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Responsibilities</h2>
                                        <div>{{ getProject.project.overview.role }}</div>
                                    </div>
                                    <div class="inner-row">
                                        <h2>Duration</h2>
                                        <div>{{ getProject.project.overview.duration }}</div>
                                    </div>
                                </div>
                            </section>
                            <section id="empathy-with-the-user">
                                <h1>Empathizing with the users</h1>
                                <div class="inner-row">
                                    <div>{{ getProject.project.empathize.overview }}</div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Insights</h2>
                                    <div class="row grid gap-8" :class="getProject.project.empathize.pain_points.length < 3 ? 'col-2' : 'col-3'">
                                        <div v-for="painpoints in getProject.project.empathize.pain_points" :key="painpoints.id">
                                            <span class="ellipse fx jc-c ai-c br-50 fw-600">{{ painpoints.id }}</span>
                                            <h3>Pain point: {{ painpoints.title }}</h3>
                                            <div>{{ painpoints.description }}</div>
                                            <h3>Opportunity: {{ painpoints.title2 }}</h3>
                                            <div>{{ painpoints.opportunity }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec" v-for="persona in getProject.project.empathize.persona" :key="persona.id">
                                    <h2>Persona & problem statement</h2>
                                    <h3>{{ persona.person_name }}</h3>
                                    <div class="mb-32">{{ persona.problem_statement }}</div>
                                    <img class="person-img mb-16" :src="persona.persona_img" :alt="persona.person_name">
                                    <div class="fx gap-8"><label class="fw-600">Age:</label><div>{{ persona.age }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Education:</label><div>{{ persona.education }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Hometown:</label><div>{{ persona.hometown }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Family:</label><div>{{ persona.family }}</div></div>
                                    <div class="fx gap-8"><label class="fw-600">Ocupation:</label><div>{{ persona.ocupation }}</div></div>
                                    <h3 class="headline">{{ persona.person_name }}'s headline</h3>
                                    <i>{{ persona.headline }}</i>
                                    <div class="row grid col-2 gap-8">
                                        <div>
                                            <h3 class="success">Goals</h3>
                                            <li v-for="goal in persona.goals" :key="goal.id">{{ goal.data }}</li>
                                        </div>
                                        <div>
                                            <h3 class="danger">Frustrations</h3>
                                            <li v-for="frustration in persona.frustrations" :key="frustration.id">{{ frustration.data }}</li>
                                        </div>
                                    </div>
                                    <h3 v-if="persona.scenario" class="headline">Scenario</h3>
                                    <div v-if="persona.scenario">{{ persona.scenario }}</div>
                                </div>
                                <div class="sub-sec" v-if="getProject.project.empathize.competitive_audit">
                                    <h2>Competitive audit</h2>
                                    <div>{{ getProject.project.empathize.competitive_audit }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.audit_img" alt="competitive audit">
                                    </div>
                                </div>
                                <div class="sub-sec" v-if="getProject.project.empathize.ideation">
                                    <div class="inner-row">
                                        <h2>
                                            Ideation
                                        </h2>
                                        <div>{{ getProject.project.empathize.ideation }}</div>
                                        <div>
                                            <img class="w-100" :src="getProject.project.empathize.ideation_img" alt="ideation">
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec" v-if="getProject.project.empathize.user_journey_map">
                                    <h2>User journey map</h2>
                                    <div>{{ getProject.project.empathize.user_journey_map }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.empathize.user_journey_map_img" alt="user journey map">
                                    </div>
                                </div>
                            </section>
                            <section id="starting-the-design">
                                <h1>Starting The Design</h1>
                                <div v-if="getProject.project.starting_the_design.site_map" class="sub-sec">
                                    <h2>Sitemap</h2>
                                    <div>{{ getProject.project.starting_the_design.site_map }}</div>
                                    <div>
                                        <img class="w-100" :src="getProject.project.starting_the_design.site_map_img" alt="Sitemap">
                                    </div>
                                </div>
                                <div v-if="getProject.project.starting_the_design.paper_wireframe" class="sub-sec">
                                    <h2>Paper wireframes</h2>
                                    <div class="inner-row">
                                        <div class="mb-32">{{ getProject.project.starting_the_design.paper_wireframe }}</div>
                                        <div>
                                            <img class="w-100" :src="getProject.project.starting_the_design.paper_wireframe_img" alt="paper wireframe">
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getProject.project.starting_the_design.digital_wireframe" class="sub-sec">
                                    <h2>Digital wireframes</h2>
                                    <div class="inner-row">
                                        <div>{{ getProject.project.starting_the_design.digital_wireframe }}</div>
                                        <div>
                                            <h3>Wireframes</h3>
                                            <div>
                                                <img class="w-100" :src="getProject.project.starting_the_design.digital_wireframe_img" alt="digital wireframe">
                                            </div>
                                        </div>
                                        <div v-if="getProject.project.starting_the_design.screen_variations">
                                            <h3>Screen size variations</h3>
                                            <div class="gap-8 grid" :class="getProject.project.starting_the_design.screen_variations_imgs.length < 3 ? 'col-2' : 'col-3'">
                                                <div v-for="img in getProject.project.starting_the_design.screen_variations_imgs" :key="img.id">
                                                    <img class="w-100" :src="img" alt="screen variations">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec" v-if="getProject.project.starting_the_design.lofi_prototype">
                                    <div class="inner-row">
                                        <h2>
                                            Low-fidelity prototype
                                        </h2>
                                        <div class="mb-32">{{ getProject.project.starting_the_design.lofi_prototype }}</div>
                                        <div>
                                            <img class="w-100" :src="getProject.project.starting_the_design.lofi_prototype_img" alt="Low-fidelity prototype">
                                        </div>
                                        <!-- <a href="#">View the App's low-fidelity protoype here.</a> -->
                                    </div>
                                </div>
                            </section>
                            <section id="usability-study" v-if="getProject.project.starting_the_design.usability_study">
                                <h1>Usability study</h1>
                                <div class="sub-sec">
                                    <h2> Findings</h2>
                                    <div>{{ getProject.project.starting_the_design.usability_study }}</div>
                                    <div class="row grid gap-8" :class="getProject.project.starting_the_design.usability_study_fidings.length < 3 ? 'col-2' : 'col-3'">
                                        <div v-for="usability in getProject.project.starting_the_design.usability_study_fidings" :key="usability.id">
                                            <h3>{{ usability.id }}. {{ usability.title }}</h3>
                                            <div>{{ usability.data }}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="refining-the-design">
                                <h1>Refining the design</h1>
                                <p v-if="getProject.project.refining_the_design.prelim">{{ getProject.project.refining_the_design.prelim }}</p>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>Mockups</h2>
                                        <div class="grid col-2 gap-8 row">
                                            <div v-for="before_after in getProject.project.refining_the_design.before_after" :key="before_after.id">
                                                <div class="mb-32">{{ before_after.description }}</div>
                                                <img class="w-100" :src="before_after.img" alt="before-after">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h2>Accessibility considerations</h2>
                                        <div class="row grid gap-8" :class="getProject.project.refining_the_design.accessibility_considerations.length < 3 ? 'col-2' : 'col-3'">
                                            <div v-for="accessibility in getProject.project.refining_the_design.accessibility_considerations" :key="accessibility.id">
                                                <h3>{{ accessibility.id }}. {{ accessibility.title }}</h3>
                                                <div>{{ accessibility.description }}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="hi-fi-design">
                                <div class="sub-sec">
                                    <div class="inner-row">
                                        <h1>Refined designs</h1>
                                        <div class="mb-32">{{ getProject.project.refining_the_design.hifi }}</div>
                                        <div class="gap-8 grid" :class="getProject.project.refining_the_design.dsk? 'col-1' : 'col-3' ">
                                            <div v-for="hifi in getProject.project.refining_the_design.refined_designs" :key="hifi.id">
                                                <img class="w-100" :src="hifi" alt="final mockup">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec" v-if="getProject.project.refining_the_design.screen_variations">
                                    <div class="inner-row">
                                        <h2>Screen size variations</h2>
                                        <div>{{ getProject.project.refining_the_design.screen_variations }}</div>
                                    </div>
                                    <div class="gap-8 grid col-3">
                                        <div v-for="sv in getProject.project.refining_the_design.screen_variations_imgs" :key="sv.id">
                                            <img class="w-100" :src="sv" alt="Screen variations">
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="hi-fi-prototype">
                                <h1>High fidelity prototype</h1>
                                <div>{{ getProject.project.refining_the_design.hifi_prototype }}</div>
                                <p>Click into the video below to watch the prototype.</p>
                                <iframe height="416" :src="getProject.project.refining_the_design.hifi_prototype_video" :title="getProject.project.refining_the_design.video_title" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </section>
                            <section id="going-forward">
                                <h1>Going forward</h1>
                                <div class="sub-sec" v-if="getProject.project.going_forward.takeaways.length > 0">
                                    <h2>Takeaways</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div v-for="takeaways in getProject.project.going_forward.takeaways" :key="takeaways.id">
                                            <h3>{{ takeaways.title }}:</h3>
                                            <p v-if="takeaways.p1">{{ takeaways.p1 }}</p>
                                            <p v-if="takeaways.p2">{{ takeaways.p2 }}</p>
                                            <i v-if="takeaways.p3">{{ takeaways.p3 }}</i>
                                        </div>
                                    </div>
                                </div>
                                <div class="sub-sec">
                                    <h2>Next step:</h2>
                                    <div class="row grid col-2 gap-8">
                                        <div v-for="next in getProject.project.going_forward.nextstep" :key="next.id">
                                            <h3>{{ next.id }}. {{  next.title }}</h3>
                                            <div>{{ next.description }}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <detail-project-footer v-bind:id="getProject.project.id" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DetailProjectFooter from '../components/includes/DetailProjectFooter.vue';

export default {
  components: { DetailProjectFooter },
    name: 'DetailPage',
    computed: {
        ...mapGetters(['getProject']),
        color() {
            return this.getProject.project.color
        },
        color2() {
            return this.getProject.project.color2
        }
    },
    data() {
        return {
            tabs: [
                { id: 1, name: 'Overview', url: '#overview', active: true},
                { id: 2, name: 'Empathizing with the user', url: '#empathy-with-the-user'},
                { id: 3, name: 'Starting the design', url: '#starting-the-design'},
                { id: 4, name: 'Usability study', url: '#usability-study'},
                { id: 5, name: 'Refining the design', url: '#refining-the-design'},
                { id: 6, name: 'Hi-Fi design', url: '#hi-fi-design'},
                { id: 7, name: 'Hi-Fi prototype', url: '#hi-fi-prototype'},
                { id: 8, name: 'Going forward', url: '#going-forward'}
            ]
        }
    },
    created() {
        this.$store.commit('showProject', this.$route.params.id)
        document.addEventListener('scroll', this.spyScroll )
    },
    unmounted() {
        document.removeEventListener('scroll', this.spyScroll )
    },
    methods: {
        spyScroll() {
        let section = document.querySelectorAll('section')
        let navLinks = document.querySelectorAll('nav a')

        section.forEach(sec => {
            let top = window.scrollY
            let offset = sec.offsetTop - 150
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')
            if( top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('tab-active')
                    document.querySelector('nav a[href*=' + id + ']').classList.add('tab-active')
                })
            }
        })
        }
    }
   
}
</script>

<style lang="scss" scoped>
ul{
    padding: 0;
    margin: 0 0 0 -16px;
    flex-direction: column;
    gap: 4px;
    li {
        height: 55px;
        display: flex;
        &:hover a{
            background-color: #EAEAEA;
        }
        a{
            height: inherit;
            padding: 0 16px;
            border-radius: 32px;
            transition: 0.2s linear;
        }
    }
}
.dark-mode li:hover a{
    background-color: #292A2D;
}
nav{
    top: 120px !important;
}

.gap-50{
    gap: 50px;
}
.project-banner{
    border-radius: 16px;
}
iframe{
    width: 100%
}
section{
    margin: 20px 0;
}
.main-section{
    padding: 40px 0
}
h1{
    padding: 50px 0 4px 0;
    font-size: 1.8rem;
    font-weight: 900;
    margin: 0 0 16px 0;
    position: relative;
    display: inline-block;
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 2px dotted v-bind(color2);
    }
}
.bg-img{
    background-color: v-bind(color);
}
h2{
    margin: 16px 0 12px 0;
    font-size: 24px;
}
h3{
    margin-bottom: 8px;
    color: v-bind(color2);
}
.inner-row{
    margin-bottom: 24px;
}
.col-3{
    grid-template-columns: 1fr 1fr 1fr;
}
.col-1{
    grid-auto-columns: 1fr;
}
.col-2 {
    grid-template-columns: 1fr 1fr;
}
.ellipse{
    height: 50px;
    width: 50px;
    color: #fff;
    background-color: v-bind(color2);
}
.v-scroll{
  overflow-x: auto;
  &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
}
.person-img{
    height: 200px;
    border-radius: 50%;
}

@media screen and (max-width: 990px){
    .main-section{
        padding: 16px 0
    }
    .main-body-flx{
        gap: 16px;
        flex-direction: column;
            .fx-shrink-0 {
                display: flex;
                overflow-x: auto;
                position: sticky;
                top: 80px;
                margin: 0 -20px;
                padding: 0 20px;
                &::-webkit-scrollbar {
                    display: none;
                    -ms-overflow-style: none; 
                    scrollbar-width: none; 
                }
            }
        ul{
            gap: 8px;
            margin: 0;
            flex-direction: row;
            li {
                height: 48px;
                a {
                    white-space: nowrap;
                    background-color: #EAEAEA;
                    &:hover {
                        background-color: #EAEAEA;
                    }
                }
            }
        }
    }
}

</style>