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
          <!-- <h3>Contact me:</h3> -->
          <!-- <div class="mb-32">
            <a href="mailto:benjaminayimah@gmail.com" title="benjaminayimah@gmail.com" class="a-link">
              benjaminayimah@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
                  <path class="icon-fill" d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
              </svg>
            </a>
          </div> -->
          <!-- <div class="mb-32">
            <a :href="url" target="_blank" class="button-primary clic">Download resume</a>
          </div> -->
          <div class="fx gap-16 social-hold">
            <!-- <a href="https://www.linkedin.com/in/benjamin-ayimah-88b8b1b2" target="_blank" aria-label="LinkedIn" title="LinkedIn" class="br-50 fx ai-c jc-c clic">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 21.391 21.37">
                <path d="M4.783,21.366H.353V7.1h4.43ZM2.565,5.156A2.578,2.578,0,1,1,5.13,2.566a2.578,2.578,0,0,1-2.565,2.59Zm18.8,16.211h-4.42V14.422c0-1.655-.033-3.777-2.3-3.777-2.3,0-2.656,1.8-2.656,3.658v7.063H7.557V7.1h4.248V9.047h.062a4.655,4.655,0,0,1,4.191-2.3c4.483,0,5.307,2.952,5.307,6.787V21.37Z" transform="translate(0.026 0)"/>
              </svg>
            </a>
            <a href="https://www.behance.net/benjaminayimah" target="_blank" aria-label="Behance" title="Behance" class="br-50 fx ai-c jc-c clic">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 34.091 21.37">
                <path d="M13.731,14.878A4.491,4.491,0,0,0,16.6,10.5c0-4.178-3.113-5.2-6.7-5.2H0V26.277H10.168c3.811,0,7.392-1.829,7.392-6.09a5.054,5.054,0,0,0-3.829-5.309Zm-9.121-6H8.937c1.663,0,3.161.467,3.161,2.4,0,1.782-1.166,2.5-2.811,2.5H4.61Zm4.93,13.832H4.61V16.937H9.636c2.03,0,3.314.846,3.314,2.995C12.95,22.051,11.417,22.714,9.541,22.714ZM30.759,8.468h-8.5V6.4h8.5ZM34.091,18.9c0-4.492-2.628-8.238-7.392-8.238-4.628,0-7.771,3.48-7.771,8.037,0,4.729,2.977,7.972,7.771,7.972,3.628,0,5.978-1.633,7.108-5.107H30.126c-.4,1.3-2.03,1.983-3.3,1.983-2.445,0-3.729-1.432-3.729-3.865H34.055C34.073,19.435,34.091,19.169,34.091,18.9ZM23.107,17.055a3.26,3.26,0,0,1,3.462-3.243c2.1,0,3.149,1.231,3.326,3.243Z" transform="translate(0 -5.305)"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ben.tekk/" target="_blank" aria-label="Instagram" title="Instagram" class="br-50 fx ai-c jc-c clic">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 21.004 21">
                <path d="M10.5,7.354a5.375,5.375,0,1,0,3.81,1.574A5.384,5.384,0,0,0,10.5,7.354Zm0,8.885a3.5,3.5,0,1,1,3.5-3.5,3.5,3.5,0,0,1-3.5,3.5Zm6.86-9.1a1.254,1.254,0,1,1-.367-.889,1.256,1.256,0,0,1,.367.889Zm3.566,1.275a6.215,6.215,0,0,0-1.7-4.4,6.256,6.256,0,0,0-4.4-1.7c-1.734-.1-6.93-.1-8.665,0A6.246,6.246,0,0,0,1.765,4a6.235,6.235,0,0,0-1.7,4.4c-.1,1.734-.1,6.93,0,8.665a6.215,6.215,0,0,0,1.7,4.4,6.264,6.264,0,0,0,4.4,1.7c1.734.1,6.93.1,8.665,0a6.215,6.215,0,0,0,4.4-1.7,6.256,6.256,0,0,0,1.7-4.4c.1-1.734.1-6.93,0-8.659Zm-2.243,10.52a3.544,3.544,0,0,1-2,2c-1.382.548-4.662.422-6.19.422s-4.812.122-6.19-.422a3.544,3.544,0,0,1-2-2c-.548-1.382-.422-4.662-.422-6.19s-.122-4.812.422-6.19a3.544,3.544,0,0,1,2-2C5.692,4,8.972,4.129,10.5,4.129s4.812-.122,6.19.422a3.544,3.544,0,0,1,1.993,2c.548,1.382.422,4.662.422,6.19S19.234,17.55,18.683,18.928Z" transform="translate(0.005 -2.238)"/>
              </svg>
            </a> -->
            <div><a href="https://www.linkedin.com/in/benjamin-ayimah-88b8b1b2" target="_blank" aria-label="LinkedIn" class="a-link">Linkedin</a></div>
            <div><a href="https://www.behance.net/benjaminayimah" target="_blank" aria-label="Behance" title="Behance" class="a-link">Behance</a></div>
            <div><a href="https://www.instagram.com/ben.tekk/" target="_blank" aria-label="Instagram" title="Instagram" class="a-link">Instagram</a></div>
            <div><a href="https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing" class="a-link" target="_blank">
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
                <path d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
            </svg>
            </a>
            </div>
          </div>
          <div class="mt-24">Email: <a href="mailto:benjaminayimah@gmail.com" title="benjaminayimah@gmail.com" class="a-link">benjaminayimah@gmail.com</a></div>
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
  margin-top: 40px;
  a{
    text-transform: uppercase;
    font-size: 0.95rem
  }
  // a {
  //   transition: 0.3s ease background-color;
  //   height: 50px;
  //   width: 50px;
  //   border: 1px solid $primary-color;
  //   &:hover {
  //     background-color: $primary-color;
  //   }
  //   path{
  //     transition: 0.3s fill ease;
  //   }
  // }
}
section{
    margin: 60px 0;
}
.mob-view {
  section{
    margin-top: 30px;
  }
}
</style>
