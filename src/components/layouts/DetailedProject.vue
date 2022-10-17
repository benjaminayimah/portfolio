<template>
    <transition name="fade">
        <primary-backdrop v-if="getProject.active" @click="$store.commit('closeProject')" />
    </transition>
    <transition :name="getMobile? 'slide' : 'fade'">
        <div v-if="getProject.active" id="project_hero_modal" class="bg-secondary" :class="computeWidth ? 'width-active': 'width-inactive'" :style="{height: (getWindowHeight-40)+'px'}">
            <div class="wrapper" id="overview">
                <div class="buttons-holdr fx fx-js w-100">
                    <div class="fx gap-16">
                        <control-button-left />
                        <control-button-right />
                    </div>
                    <button class="br-50 fx ai-c jc-c close-proj-btn" @click="$store.commit('closeProject')" title="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16.106 16.147">
                            <path d="M-7584.7-2858.224l-6.36-6.389-6.33,6.317a1,1,0,0,1-.708.292,1,1,0,0,1-.708-.294,1,1,0,0,1,0-1.415l6.333-6.317-6.31-6.339a1,1,0,0,1,0-1.415,1,1,0,0,1,1.415,0l6.308,6.338,6.354-6.338a1,1,0,0,1,1.413,0,1,1,0,0,1,0,1.413l-6.354,6.34,6.362,6.392a1,1,0,0,1,0,1.413,1,1,0,0,1-.706.292A1,1,0,0,1-7584.7-2858.224Z" transform="translate(7599.096 2874.075)"/>
                        </svg>
                    </button>
                </div>
                <div class="project-body">
                    <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+getProject.project.banner+')'}"></div>

                    <!-- <nav class="fx tabs sticky-top v-scroll">
                        <li v-for="tab in tabs" :key="tab.id"><router-link :to="'#'+tab.url" class="fw-500">{{ tab.name}}</router-link></li>
                    </nav> -->
                    <div class="project-content">
                        <div id="overview" class="section">
                            <h1>OVERVIEW</h1>
                            <div>
                                <img class="w-100" src="../../assets/images/flexsale_featured.png" alt="">
                                <div class="inner-row">
                                    <h2>The problem</h2>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                    </div>
                                </div>
                                <div class="inner-row">
                                    <h2>The product</h2>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                    </div>
                                </div>
                                <div class="inner-row">
                                    <h2>Goal</h2>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                    </div>
                                </div>
                                <div class="inner-row">
                                    <h2>My role</h2>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                    </div>
                                </div>
                                <div class="inner-row">
                                    <h2>Project duration</h2>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="empathy" class="section">
                            <h1>EMPATHIZE WITH USERS</h1>
                            <div class="inner-row">
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                                </div>
                            </div>
                            <h2>User pain points</h2>
                            <div class="row grid col-3 gap-8">
                                <div>
                                    <span class="ellipse jc-c ai-c br-50">1</span>
                                    <h3>Accessibility</h3>
                                    <div>
                                        Most tutorial website do a poor job in considering users with special needs such as hearing impediment.
                                    </div>
                                </div>
                                <div>
                                    <span class="ellipse jc-c ai-c br-50">2</span>
                                    <h3>Credibility</h3>
                                    <div>
                                        Users need to know they are learning the right skills from a credible source.                                        </div>
                                </div>
                                <div>
                                    <span class="ellipse jc-c ai-c br-50">3</span>
                                    <h3>Time</h3>
                                    <div>
                                        Most professionals don’t have time to sign up to classroom or vigorous online courses.                                        </div>
                                </div>
                            </div>
                            <div id="persona" class="section">
                                <h2>Persona & problem statement</h2>
                                <h3>Alice</h3>
                                <div>
                                    Alice is a busy professional designer who needs to have access to quick design tutorials because he wants to keep up-to-date with the latest industry trends.
                                </div>
                                <img src="../../assets/images/favemeicom.png" alt="Alice">
                                <div class="fx gap-8"><label class="fw-600">Age:</label><div>36</div></div>
                                <div class="fx gap-8"><label class="fw-600">Education:</label><div>BSc Computer Science</div></div>
                                <div class="fx gap-8"><label class="fw-600">Hometown:</label><div>Manchester, England</div></div>
                                <div class="fx gap-8"><label class="fw-600">Family:</label><div>Married with 2 kids & a dog</div></div>
                                <div class="fx gap-8"><label class="fw-600">Ocupation:</label><div>Designer</div></div>
                                <h3 class="headline">Alice's headline</h3>
                                <i>"Design is everything"</i>
                                <div class="row grid col-2 gap-8">
                                    <div>
                                        <h3>Goals</h3>
                                        <li>Goal 1</li>
                                        <li>Goal 2</li>
                                        <li>Goal 3</li>
                                    </div>
                                    <div>
                                        <h3>Frustrations</h3>
                                        <li>Frustration 1</li>
                                        <li>Frustration 2</li>
                                        <li>Frustration 3</li>
                                    </div>
                                </div>
                                <h3 class="headline">Scenario</h3>
                                <div>
                                    Alice is a busy professional designer who needs to have access to quick design tutorials because he wants to keep up-to-date with the latest industry trends.
                                </div>
                            </div>
                            <div id="competitive_audit" class="section">
                                <h2>Competitive audit</h2>
                                <div>
                                    An audit conducted on a few competitors revealed gabs that needs to be exploited in our design.
                                </div>
                                <div>
                                    <img class="w-100" src="../../assets/images/competitive_audit.png" alt="">
                                </div>
                            </div>
                            <div id="ideation">
                                <div class="inner-row">
                                    <h2>
                                        Ideation
                                    </h2>
                                    <div>
                                        I conducted a quick ideation exercise to come up with ideas on how to address gaps identified in the competitive audit.
                                    </div>
                                    <div>
                                        <img class="w-100" src="../../assets/images/ideation.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div id="user_journey_map" class="section">
                                <h2>User journey map</h2>
                                <div>
                                    Mapping Alice’s user journey revealed how convenient it would be for users to easily find and view design tutorials.
                                </div>
                                <div>
                                    <img class="w-100" src="../../assets/images/user_journey_map.png" alt="">
                                </div>
                            </div>
                            <h1>STARTING THE DESIGN</h1>
                            <div id="site_map" class="section">
                                <h2>Sitemap</h2>
                                <div>
                                    I constructed a sitemap to ensure the information architecture of the website is clearly laid out. The structure I chose was designed to make things simple and easy.
                                </div>
                                <div>
                                    <img class="w-100" src="../../assets/images/sitemap.png" alt="Sitemap">
                                </div>
                            </div>
                            <div id="paper_wirefram" class="section">
                                <h2>Paper wireframes</h2>
                                <div class="inner-row">
                                    <div>
                                        Paper wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                    </div>
                                    <div>
                                        <img class="w-100" src="../../assets/images/paper_wireframes.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div id="digital_wirefram" class="section">
                                <h2>Digital wireframes</h2>
                                <div class="inner-row">
                                    <div>
                                            Digital wireframes were made to ensure the element that made it to digital wireframes would better suit users pain points.
                                        </div>
                                    <div>
                                        <h3>Wireframes</h3>
                                        <div>
                                            <img class="w-100" src="../../assets/images/paper_wireframes.png" alt="">
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Screen size variations</h3>
                                        <div>
                                            <img class="w-100" src="../../assets/images/paper_wireframes.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="lo_fi_prototype" class="section">
                                <div class="inner-row">
                                    <h2>
                                        Low-fidelity prototype
                                    </h2>
                                    <div>
                                        The low-fidelity prototype connected the primary user flow of choosing a career and obtaining guidance from mentors. This would enable usability study to be conducted on the prototype.
                                    </div>
                                    <div>
                                        <img class="w-100" src="../../assets/images/lo-fi.png" alt="Low-fidelity prototype">
                                    </div>
                                    <a href="#">View the App's low-fidelity protoype here.</a>
                                </div>
                            </div>
                            <div id="useability_fidings" class="section">
                                <div>
                                    These are the main findings uncovered by the usability study:
                                </div>
                                <div class="row grid col-3 gap-8">
                                   <div>
                                        <h3>1. Learn new skills</h3>
                                        <div>
                                            Users want to quickly browse through careers and learn new skills.
                                        </div>
                                   </div>
                                   <div>
                                        <h3>2. Trust</h3>
                                        <div>
                                            Users want to quickly browse through careers and learn new skills.
                                        </div>
                                   </div>
                                   <div>
                                        <h3>3. Find job</h3>
                                        <div>
                                            Users want to quickly browse through careers and learn new skills.
                                        </div>
                                   </div>
                                </div>
                            </div>
                            <h1>REFINING THE DESIGN</h1>
                            <div id="mockups" class="section">
                                <div class="inner-row">
                                    <h2>Mockups</h2>
                                    <div>
                                        Based on insights from the usability study, the search filter was enhanced with advanced filter system where users are given the option to filter based on their experience level and specific search parameters.
                                    </div>
                                    <div>
                                        images here
                                    </div>
                                </div>
                            </div>
                            <div id="accessibility" class="section">
                                <div class="inner-row">
                                    <h2>Accessibility considerations</h2>
                                    <div class="row grid col-3 gap-8">
                                        <div>
                                            <h3>1. Close-captioning</h3>
                                            <div>
                                                I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>2. Landmarks</h3>
                                            <div>
                                                I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                            </div>
                                        </div>
                                        <div>
                                            <h3>3. Screen reader</h3>
                                            <div>
                                                I provided close-caption controls for all tutorials for users with hearing impaired. This would enable them to follow through all videos.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="refined_designs" class="section">
                                <div class="inner-row">
                                    <h2>Refined designs</h2>
                                    <div class="v-scroll fx gap-8 refined-holder">
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-1.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-2.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-3.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-4.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-5.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-6.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-7.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-8.png" alt="">
                                        </div>
                                        <div>
                                            <img class="w-100" src="../../assets/images/flexsale-refined-9.png" alt="">
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div id="screens_size_variations" class="section">
                                <div class="inner-row">
                                    <h2>Screen size variations</h2>
                                    <div>
                                        I included considerations for additional screen sizes in my mockups based on my earlier wireframes. Because users browse from a variety of devices, I felt it was important to optimize the browsing experience for a range of device sizes, such as mobile and tablet so users have the smoothest experience possible.                                    </div>
                                    </div>
                                    <div>
                                        <img class="w-100" src="../../assets/images/screen_variations.png" alt="Screen variations">
                                    </div>
                            </div>
                            <div id="hi_fi_prototype">
                                <div>
                                    The final high-fidelity prototype ensures a smooth user flow for finding and viewing of tutorials.
                                </div>
                                <a href="#">
                                    View the high-fidelity protoype here.
                                </a>
                                <video controls>
                                    <source src="../../assets/videos/fsv.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h1>GOING FORWARD</h1>
                            <div id="takeaways" class="section">
                                <h2>Takeaways</h2>
                                <div class="row grid col-2 gap-8">
                                    <div>
                                        <h3>Impact:</h3>
                                        <div>
                                            Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                        </div>
                                    </div>
                                    <div>
                                        <h3>What I learned:</h3>
                                        <div>
                                            Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="next_step" class="section">
                                <h2>Next step:</h2>
                                <div class="row grid col-2 gap-8">
                                    <div>
                                        <h3>1. Testing</h3>
                                        <div>
                                            Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                        </div>
                                    </div>
                                    <div>
                                        <h3>2. User research</h3>
                                        <div>
                                            Our target users reported that the design was intuitive to navigate through. They are relatively satisfied with the images and the engaging videos found on the site.
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                    <detail-project-footer v-bind:id="getProject.project.id" />
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex';
import PrimaryBackdrop from '../includes/PrimaryBackdrop.vue'
import ControlButtonLeft from '../includes/ControlButtonLeft.vue'
import ControlButtonRight from '../includes/ControlButtonRight.vue'
import DetailProjectFooter from '../includes/DetailProjectFooter.vue';
export default {
    name: 'DetailedProject',
    components: { PrimaryBackdrop, ControlButtonLeft, ControlButtonRight, DetailProjectFooter },
    computed: {
        ...mapGetters(['getProject', 'getWindowWidth', 'getWindowHeight', 'getMobile']),
        computeWidth() {
            if(this.getWindowWidth <= 800) {
                return true
            }else {
                return false
            }
        }
    },
    data() {
        return {
            tabs: [
                { id: 1, name: 'Overview', url: 'overview'},
                { id: 2, name: 'Empathize with users', url: 'Empathy'},
                { id: 3, name: 'Starting the design', url: 'starting-the-design'},
                { id: 4, name: 'Refining the design', url: 'refining-the-design'},
                { id: 5, name: 'Final design', url: 'final-design'},
                { id: 6, name: 'Going forward', url: 'going-forward'}
            ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
#project_hero_modal{
    position: fixed;
    z-index: 202;
}
.buttons-holdr{
    position: absolute;
    padding: 20px 30px;
}
.wrapper{
    height: 100%;
    button{
        // position: absolute;
        height: 45px;
        width: 45px;
        // right: 20px;
        // top: 20px;
    }
}
video{
    width: 100%
}
.project-body{
    overflow-y: auto;
    height: 100%;
}
.width-active{
    width: 100%;
    top: 0;
    height: 100% !important;
}
.width-inactive{
    border-radius: 16px;
    width: 800px;
    top: 20px;
    .project-body{
        border-radius: 16px;
    }
    .project-banner {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }

}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(900px);
}
.section{
    margin: 20px 0;
}
h1{
    margin: 0 0 8px 0;
    color: $primary-color;
    font-size: 1.8rem;
}
h2{
    margin: 16px 0 12px 0;
}
.inner-row{
    margin-bottom: 24px;
}
.v-scroll{
  overflow-x: auto;
  &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
}
.tabs{
  z-index: 2;
  margin-top: 30px;
  top: 85px;
  li {
    display: flex;
    list-style-type: none;
    a {
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 30px;
      border: 1px solid;
      white-space: nowrap;
      font-size: 16px;
    }
    &:last-child {
        margin-right: 30px;
    }&:first-child{
        margin-left: 30px;
    }
  }
}
.col-3{
    grid-template-columns: 1fr 1fr 1fr;
}
.col-2 {
    grid-template-columns: 1fr 1fr;
}
.ellipse{
    display: flex;
    height: 50px;
    width: 50px;
    background-color: $primary-color;
}
.refined-holder div{
    width: 300px;
    flex-shrink: 0;
}
label{
    //
}
</style>