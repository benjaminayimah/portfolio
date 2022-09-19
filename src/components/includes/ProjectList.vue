<template>
    <div class="project-hold relative" @click.prevent="$store.commit('showProject', project.id)">
        <div class="project-main-wrapper bg-secondary br-16" >
            <img :src="project.image" loading="lazy" alt="">
            <div class="caption fx-col gap-8">
                <div class="title">Project name</div>
                <div class="description">I’m a UI/UX Designer who focuses on crafting a delightful digital experience for users. </div>
            </div>
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
    display: block;
}
.project-main-wrapper{
    transition: 0.3s ease;
    img {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }
    &:hover {
        transform: scale(1.04);
        box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.12);
    }
}
.caption{
    padding: 24px;
}
.caption-header{
   font-size: 20px; 
}
.title{
    font-size: 20px;
    font-weight: 600;
}
.description{
    font-size: 1rem;
}
</style>