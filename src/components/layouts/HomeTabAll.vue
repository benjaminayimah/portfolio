<template>
    <div class="grid project-grid">
        <div>
            <a href="#" @click.prevent="$store.commit('showProject')">
                <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-16" alt="">
            </a>
        </div>
        <div>
            <a href="#" @click.prevent="$store.commit('showProject')">
                <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-16" alt="">
            </a>
        </div>
        <div>
            <a href="#" @click.prevent="$store.commit('showProject')">
                <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-16" alt="">
            </a>
        </div>
        <div>
            <a href="#" @click.prevent="$store.commit('showProject')">
                <img src="../../assets/images/behance_shots.jpg" loading="lazy" class="br-16" alt="">
            </a>
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