<template>
    <transition name="fade">
        <primary-backdrop v-if="getProject.active" @click="$store.commit('closeProject')" />
    </transition>
    <transition :name="getMobile? 'slide' : 'fade'">
        <div v-if="getProject.active" id="project_hero_modal" class="bg-secondary" :class="computeWidth ? 'width-active': 'width-inactive'" :style="{height: (getWindowHeight-40)+'px'}">
            <div class="wrapper">
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
                    <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+getProject.project.image+')'}"></div>
                    <nav class="fx tabs sticky-top">
                        <li v-for="tab in tabs" :key="tab.id"><router-link :to="tab.url" class="fw-500">{{ tab.name}}</router-link></li>
                    </nav>
                    <div class="project-content">
                        <div class="section" id="overview">
                            <h1>OVERVIEW</h1>
                            <div>
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
                { id: 1, name: 'Overview', url: '/'},
                { id: 2, name: 'Empathy', url: 'Empathy'},
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
.tabs{
  z-index: 2;
  margin-top: 30px;
  overflow-x: auto;
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
  &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
}
</style>