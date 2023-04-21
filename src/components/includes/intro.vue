<template>
    <section>
        <div class="fx gap-16 h1 fw-500">{{ intro.h1 }} <span>{{ intro.i1 }}</span></div>
        <div class="h1 fw-600">{{ intro.h2 }}</div>
        <p class="p1">{{ intro.p1 }}</p>
        <p class="p2"><span class="intro">{{ intro.p2 }}</span></p>
    </section>
</template>
<script>
export default {
    name: 'Intro',
    props: ['intro']
}
</script>
<style lang="scss" scoped>
p{
    max-width: 650px;
    margin: 14px 0;
    font-size: 1.6rem;
}
.intro{
    font-size: 1.2rem;
}
section{
    margin: 60px 0 32px 0;
}
// section{
//     transform: scale(0.94);
//     animation: scale 1s forwards cubic-bezier(0.5, 1, 0.89, 1);
//     opacity: 0;
//     filter: blur(4px);
// }
// .h1{
//     animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);

// }
// @keyframes scale {
//   100% {
//     transform: scale(1);
//     opacity: 1;
//     filter: blur(0);
//   }
// }
// p {
//   opacity: 0;
//   filter: blur(4px);
// }
// .p1 {
//   animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
// }
// .p2 {
//   animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
// }
// @keyframes fade-in {
//   100% {
//     opacity: 1;
//     filter: blur(0);
//   }
// }

</style>