<template>
    <transition name="fade">
        <primary-backdrop v-if="getProject.active" @click="$store.commit('closeProject')" />
    </transition>
    <transition :name="getMobile? 'slide' : 'fade'">
        <div v-if="getProject.active" id="project_hero_modal" class="bg-secondary" :class="computeWidth ? 'width-active': 'width-inactive'" :style="{height: (getWindowHeight-40)+'px'}">
            <div class="wrapper">
                <button class="br-50 fx ai-c jc-c close-proj-btn" @click="$store.commit('closeProject')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16.106 16.147">
                        <path d="M-7584.7-2858.224l-6.36-6.389-6.33,6.317a1,1,0,0,1-.708.292,1,1,0,0,1-.708-.294,1,1,0,0,1,0-1.415l6.333-6.317-6.31-6.339a1,1,0,0,1,0-1.415,1,1,0,0,1,1.415,0l6.308,6.338,6.354-6.338a1,1,0,0,1,1.413,0,1,1,0,0,1,0,1.413l-6.354,6.34,6.362,6.392a1,1,0,0,1,0,1.413,1,1,0,0,1-.706.292A1,1,0,0,1-7584.7-2858.224Z" transform="translate(7599.096 2874.075)"/>
                    </svg>
                </button>
                <div class="project-body">
                    <div class="project-banner bg-img" :style="{ backgroundImage: 'url('+img+')'}">

                    </div>
                    <div class="project-content">
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate possimus voluptas ea. Mollitia possimus vel deleniti neque eos voluptatum est perspiciatis. Doloribus libero dolor minima eligendi optio officiis debitis sit!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    

</template>
<script>
import { mapGetters } from 'vuex';
import PrimaryBackdrop from '../includes/PrimaryBackdrop.vue'
export default {
    name: 'DetailedProject',
    components: { PrimaryBackdrop },
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
            img: require('@/assets/images/behance_shots.jpg')
        }
    }
}
</script>
<style lang="scss" scoped>
#project_hero_modal{
    position: fixed;
    z-index: 202;
}
.wrapper{
    height: 100%;
    button{
        position: absolute;
        height: 50px;
        width: 50px;
        right: 20px;
        top: 20px;
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
</style>