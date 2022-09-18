<template>
  <div id="home" class="main-row">
    <div class="section-wrapper">
      <intro />
      <nav class="fx tabs sticky-top" id="projects">
        <li v-for="tab in tabs" :key="tab.id"><router-link :to="tab.url">{{ tab.name}}</router-link></li>
      </nav>
      <router-view />
      <div class="mt-50">
        <router-link to="/about" class="upper-case a-link fw-600">Get in touch</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import intro from '../components/includes/intro.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  components: { intro },
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
nav{
  z-index: 2;
  margin-bottom: 30px;
  li {
    display: flex;
    list-style-type: none;
    a {
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 30px;
      border: 1px solid;
    }
  }
}
.a-link{
  color: unset;
}
</style>
