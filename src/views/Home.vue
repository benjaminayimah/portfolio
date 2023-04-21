<template>
  <div id="home" class="main-row">
    <teleport to="#main_home">
      <router-link to="/" id="logo" class="clic">Benjamin Ayimah<span></span></router-link>
    </teleport>
    <div class="section-wrapper">
      <intro v-bind:intro="getIntro" />
      <home-tab-all />
      <div class="mt-50">
        <router-link to="/about" class="upper-case a-link fw-600 clic">Get in touch</router-link>
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
