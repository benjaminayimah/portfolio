<template>
  <div id="home" class="main-row">
    <div class="section-wrapper">
      <intro v-bind:intro="getIntro" />
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
import { mapGetters } from 'vuex'
export default {
  components: { intro, HomeTabAll },
  name: 'Home',
  mixins: [scrollTopMixin],
  computed: mapGetters(['getIntro'])
}
</script>
<style lang="scss" scoped>

</style>
