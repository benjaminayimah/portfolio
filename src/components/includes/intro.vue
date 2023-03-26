<template>
    <section>
        <div class="fx gap-16 h1 fw-500">{{ intro.h1 }} <span>{{ intro.i1 }}</span></div>
        <div class="h1 fw-600">{{ intro.h2 }}</div>
        <p>{{ intro.p1 }}</p>
        <p><span class="intro">{{ intro.p2 }}</span></p>
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
</style>