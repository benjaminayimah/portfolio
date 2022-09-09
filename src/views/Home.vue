<template>
  <div id="home" class="main-row">
    <div class="section-wrapper">
      <intro />
      <h3 class="mt-0">Here are some of my work</h3>
    </div>
  </div>
</template>

<script>
import intro from '../components/includes/intro.vue'

export default {
  components: { intro },
  name: 'Home',
}
</script>
<style lang="scss" scoped>
h3{
  position: relative;
  &::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid;
    border-color: #3FD68A;
    width: 46px;
    bottom: -5px;
  }
}
</style>
