<template>
  <section>
    <div id="about" class="main-row">
    <div class="section-wrapper">
      <div class="h1 fw-500">About</div>
      <div class="grid">
        <div>
          <img :src="require('@/assets/images/'+img+'')" loading="lazy" alt="ben">
        </div>
        <div class="text-holder">
          <h1 id="into">{{ intro }}</h1>
          <p class="p1">{{ p1 }}</p>
          <p class="p2">{{ p2 }}</p>
          <p class="p3">{{ p3 }}</p>
        </div>
      </div>      
    </div>
  </div>
  </section>
</template>
<script>
import scrollTopMixin from '../mixins/scrollTopMixin';
export default {
  name: 'About',
  mixins: [scrollTopMixin],
  data() {
    return {
        img: 'ben.png',
        intro: 'Hi,  I’m Ben.',
        p1: 'I am a UX designer and a web developer. I am fueled by my passion to provide simple and yet efficient solutions to complex problems using visual design, rapid prototyping, and seamless interactions that are user-centered.',
        p2: 'I’ve helped organizations in crafting a compelling user experience for their products and solidify their brand identity by designing an appealing style guide.',
        p3: 'I love to design aesthetically pleasing products that are accessible by humans.',
        url: 'https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing',
        transform: false
      }
    },
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  border-radius: 20px;
}
h1{
  font-weight: 600;
  font-size: 40px;

}
.h1{
  margin-bottom: 25px;
}
.grid {
    gap: 30px;
    grid-template-columns: 1fr 1fr;
}
.p1{
    font-size: 21px;
    font-weight: 500;
    padding-bottom: 0 !important;
}
p{
    margin: 22px 0;
}
</style>
