<template>
    <div class="grid">
        <div class="">
            <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-18" alt="">
        </div>
        <div class="">
            <img src="../../assets/images/instagram-shots.jpg" loading="lazy" class="br-18" alt="">
        </div>
        <div class="">
            <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-18" alt="">
        </div>
        <div class="">
            <img src="../../assets/images/instagram-shots.jpg" loading="lazy" class="br-18" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'AllWork'
}
</script>
<style lang="scss" scoped>
.grid {
    gap: 30px;
    grid-template-columns: 1fr 1fr;
}
img{
    width: 100%;
    height: 100%;
}
</style>