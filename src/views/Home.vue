<template>
  <div id="home" class="main-row">
    <div class="section-wrapper">
      <intro />
      <h3 class="mt-0">Here are some of my work</h3>
      <nav class="fx gap-16 tabs">
        <li v-for="tab in tabs" :key="tab.id"><router-link class="fw-500" :to="tab.url">{{ tab.name}}</router-link></li>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import intro from '../components/includes/intro.vue'

export default {
  components: { intro },
  name: 'Home',
  data() {
    return {
      tabs: [
        { id: 1, name: 'All', url: '/'},
        { id: 2, name: 'Case studies', url: 'case-studies'},
        { id: 3, name: 'Projects', url: 'projects'},
        // { id: 4, name: 'Social media', url: 'social'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
h3{
  position: relative;
  margin-bottom: 30px;
  &::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid;
    border-color: $primary-color;
    width: 46px;
    bottom: -5px;
  }
}
nav{
  li {
    display: flex;
    list-style-type: none;
    a {
      text-decoration: none;
      padding: 8px 12px;
      border-radius: 30px;
      border: 1px solid transparent;
    }
  }
}
</style>
