<template>
    <router-link :to="{ name: 'DetailedPage',params: { id: project.id , name: project.title} }" :id="'proj_'+project.id" class="project-hold relative">
        <div class="project-main-wrapper bg-secondary br-16" >
            <img :src="project.thumbnail" loading="lazy" alt="">
            <div class="caption fx-col gap-8">
                <div class="title text-ellipsis">{{ project.title }}</div>
                <div class="description">{{ project.description }}</div>
            </div>
        </div>
    </router-link>
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
    min-height: 130px;
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
a{
    text-decoration: unset;
    color: unset;
}
</style>