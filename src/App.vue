<template>
  <a href="#projects" class="skip">Skip to project</a>
    <div id="home_wrapper" :class="[{ 'tab-view': getTablet }, {'desk-view': getDesktop }, {'mob-view': getMobile } ]">
      <div class="absolute floats do-rotate" id="floats" @mouseenter="pauseRotate" @mouseleave="resumeRotate">
        <div class="relative">
          <div class="float-holder">
            <img :src="ui">
          </div>
          <div class="float-holder">
            <img :src="ux">
          </div>
        </div>
      </div>
      <Header />
      <router-view/>
      <Footer />
      <mobile-menu />
      <detailed-project />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from './components/includes/Header.vue';
import Footer from './components/includes/Footer.vue';
import MobileMenu from './components/includes/MobileMenu.vue';
import DetailedProject from './components/layouts/DetailedProject.vue';
export default {
  components: { Header, Footer, MobileMenu, DetailedProject },
  name: "App",
  computed: {
    ...mapGetters(['getTablet', 'getMobile', 'getDesktop', 'getWindowHeight'])
  },
  data() {
    return {
      ui: require('@/assets/images/ui.svg'),
      ux: require('@/assets/images/ux.svg')
    }
  },
  created() {
      this.$store.commit('computeWindow')
      this.$store.commit('getDarkMode')
      window.addEventListener('resize', this.windowSize)
  },
  unmounted() {
    window.removeEventListener('resize', this.windowSize)
  },
  methods: {
    windowSize() {
      setTimeout(()=> {
        this.$store.commit('computeWindow')
      }, 100)
    },
    $_(x) {
        return document.getElementById(x)
    },
    pauseRotate() {
      this.$_('floats').classList.remove('do-rotate')
      this.$_('floats').classList.add('do-pause')
    },
    resumeRotate() {
      this.$_('floats').classList.add('do-rotate')
    }
  }
}
</script>

<style lang="scss">
  * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  transition: $transition-time ease background-color, $transition-time linear color;
  // transition: $transition-time linear color;
  font-family: $myFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  margin: 0 ;
  overflow-x: hidden;
  line-height: 1.4;
}
.skip{
  position: fixed;
  top: 0;
  z-index: 300;
  padding:0 16px;
  background-color: #000;
  color: #fff;
  text-align: center;
  translate: 0 -100%;
  transition: 0.4s ease-in-out all;
  &:focus {
    translate: 0 0;
    padding: 16px;
  }
}
.floats{
  width: 250px;
  top: 250px;
  right: 12%;
  .float-holder {
    display: flex;
    &:last-child{
      width: 100%;
      justify-content: flex-end;
    }
  }
  img {
    transform: rotate(165deg)
  }
}
@keyframes rotate-floats {
  0%   {transform: rotate(0)}
  100% {transform: rotate(360deg)}
}
.do-rotate .float-holder{
  animation-name: rotate-floats;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.do-pause .float-holder{
  transform: rotate(270deg);
}
</style>
