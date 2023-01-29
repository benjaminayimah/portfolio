<template>
  <div id="home" class="main-row">
    <div class="section-wrapper">
      <intro />
      <home-tab-all />
      <div class="mt-50">
        <router-link to="/about" class="upper-case a-link fw-600">Get in touch</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import intro from '../components/includes/intro.vue'
import HomeTabAll from '../components/layouts/HomeTabAll.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  components: { intro, HomeTabAll },
  name: 'Home',
  mixins: [scrollTopMixin],
  data() {
    return {
      tabs: [
        { id: 1, name: 'All', url: '/'},
        { id: 2, name: 'Case studies', url: 'case-studies'},
        { id: 3, name: 'Projects', url: 'projects'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
