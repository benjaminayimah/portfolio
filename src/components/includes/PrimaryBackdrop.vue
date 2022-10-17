<template>
    <div class="backdrop"></div>
</template>
<script>
export default {
    name: 'Backdrop'
}
</script>
<style lang="scss" scoped>
.backdrop{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    // -webkit-backdrop-filter: saturate(180%) blur(80px);
    // backdrop-filter: saturate(180%) blur(80px);
    // background-color: rgba(0, 0, 0, 0.8);
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 200;
}
</style>