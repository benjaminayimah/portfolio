<template>
  <section>
    <div id="about" class="main-row">
    <div class="section-wrapper">
      <div class="grid about-grid">
        <div>
          <img :src="require('@/assets/images/'+img+'')" loading="lazy" alt="ben">
        </div>
        <div>
          <div class="">
            <h1 id="into">{{ intro }}</h1>
            <p class="p1">{{ p1 }}</p>
            <p class="p2">{{ p2 }}</p>
            <p class="p3">{{ p3 }}</p>
          </div>
          <div class="contact-wrapper br-8">
            <div class="fx gap-16 social-hold">
              <div class="clic"><a href="https://www.linkedin.com/in/benjamin-ayimah-88b8b1b2" target="_blank" aria-label="LinkedIn" title="LinkedIn" class="a-link">Linkedin</a></div>
              <div class="clic"><a href="https://www.behance.net/benjaminayimah" target="_blank" aria-label="Behance" title="Behance" class="a-link">Behance</a></div>
              <div class="clic"><a href="https://www.instagram.com/ben.tekk/" target="_blank" aria-label="Instagram" title="Instagram" class="a-link">Instagram</a></div>
              <div class="clic"><a href="https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing" class="a-link ai-c gap-8" target="_blank" title="Resume">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
                  <path d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
                </svg>
                </a>
              </div>
            </div>
            <div class="mt-18">Email: <a href="mailto:benjaminayimah@gmail.com" title="benjaminayimah@gmail.com" class="a-link clic">benjaminayimah@gmail.com</a></div>
          </div>
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
        intro: 'Hi,  I\'m Ben.',
        p1: 'I am a UI/UX designer and an Engineer. I am fueled by my passion to provide simple yet efficient solutions to complex problems using visual design, rapid prototyping, and seamless interactions that are user-centered.',
        p2: 'I\'ve helped organizations in crafting a compelling user experience for their products and solidify their brand identity by designing appealing style guides.',
        p3: 'I love to design aesthetically pleasing products that are accessible to all users.',
        url: 'https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing',
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
.a-link{
  color: unset;
}
.social-hold{
  a{
    text-transform: uppercase;
    font-size: 0.95rem
  }
}
section{
    margin: 60px 0;
}
.mob-view {
  section{
    margin-top: 30px;
  }
}
.contact-wrapper{
  border: 1px dashed #C5C7CB;
  padding: 16px;
  background-color: #EFEFEF;
  margin-top: 40px;
  a{
    color: #2f2f30;
    &:hover {
      color: $black;
    }
  }
}
</style>
