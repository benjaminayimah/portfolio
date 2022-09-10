<template>
    <div id="home_wrapper" :class="[{ 'tab-view': getTablet }, {'desk-view': getDesktop }, {'mob-view': getMobile } ]">
      <Header />
      <router-view/>
      <Footer />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from './components/includes/Header.vue';
import Footer from './components/includes/Footer.vue';
export default {
  components: { Header, Footer },
  name: "App",
  computed: {
    ...mapGetters(['getTablet', 'getMobile', 'getDesktop', 'getWindowHeight'])
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
  transition: $transition-time linear background-color, $transition-time linear color;
  // transition: $transition-time linear color;
  font-family: $myFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  margin: 0 ;
  overflow-x: hidden;
  line-height: 1.4;
}
</style>
