<template>
    <div class="project-hold">
        <div class="project-main-wrapper" @click.prevent="$store.commit('showProject', project.id)">
            <img :src="project.image" loading="lazy" class="br-16" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectList',
    props: ['project']
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
    height: 100%;
}
</style>