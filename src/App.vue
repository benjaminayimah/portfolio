<template>
  <a href="#projects" class="skip">Skip to project</a>
    <div id="home_wrapper" :class="[{ 'tab-view': getTablet }, {'desk-view': getDesktop }, {'mob-view': getMobile } ]">
      <float-animations v-if="$route.path == '/'" />
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
import FloatAnimations from './components/includes/FloatAnimations.vue';
export default {
  components: { Header, Footer, MobileMenu, DetailedProject, FloatAnimations },
  name: "App",
  computed: {
    ...mapGetters(['getTablet', 'getMobile', 'getDesktop', 'getWindowHeight'])
  },
  created() {
      // this.autoDark()
      this.$store.commit('computeWindow')
      this.$store.commit('getDarkMode')
      window.addEventListener('resize', this.windowSize)
      // console.log(new Date().getHours())
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
    autoDark() {
      if(new Date().getHours() > 19) {
        localStorage.setItem('darkMode', true)

      }
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
html{
  scroll-behavior: smooth;
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
</style>
