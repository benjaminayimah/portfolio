<template>
    <section class="fixed w-100 blur">
        <div class="fx w-100 jc-c ai-c h-100">
            <div class="fx-col jc-c ai-c o-wrap gap-70">
                <h1 class="m-0">
                    <span>I'm</span>
                    <span>a</span>
                    <span>designer</span>
                    <span>and</span>
                    <span>an</span>
                    <span>engineer,</span>
                    <span>obsessed</span>
                    <span>with</span>
                    <span>creating</span>
                    <span>delightful</span>
                    <span>digital</span>
                    <span>experiences.</span>
                </h1>
                <button id="overlay_btn" @click="$store.commit('dismissOverlay')" class="fx clic">See my work</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'MainOverlay'
}
</script>
<style lang="scss" scoped>
section{
    bottom: 0;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.78);
    overflow-y: scroll;
    height: 100%;
}
.hide{
    section{
        transition: 1s all;
        background-color: rgba(255, 255, 255, 0.5);
    }
    .o-wrap{
        opacity: 0;
        transition: 1s all;
        animation: hide 1s backwards cubic-bezier(0.5, 1, 0.89, 1);
    }
}
@keyframes hide {
  100% {
    transform: scale(0.9);
    filter: blur(16px);
  }
}
.blur{
    -webkit-backdrop-filter: saturate(200%) blur(35px);
    backdrop-filter: saturate(200%) blur(35px);
}
.o-wrap{
    padding: 80px 0;
    transform: scale(0.9);
    max-width: 1230px;
    width: 73%;
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}
span, button {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  padding-right: 18px;
}
span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
button {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

button {
    background-color: #fff;
    line-height: 3.4;
    padding: 0 24px;
    border-radius: 50px;
    font-size: 1.06rem;
    text-transform: capitalize;
    color: #000;
    &:hover{
        text-decoration: underline;
    }
}
h1{
    font-size: 5.3rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.25;
    color: #000;
}
@media screen and (max-width: 1230px){
    h1{
        font-size: 4.3rem;
    }
}
@media screen and (max-width: 700px){
    .o-wrap{
        width: 85%;
    }
    h1{
        font-size: 3.5rem;
    }
}
@media screen and (max-width: 499px){
    .o-wrap{
        gap: 32px !important;
    }
    h1{
        font-size: 2.5rem;
    }
    span{
        padding-right: 12px;
    }
}
</style>
