<template>
    <router-link :to="{ name: 'DetailedPage',params: { id: project.id , name: project.title} }" :id="'proj_'+project.id" class="project-hold relativ br-16">
        <div class="project-main-wrapper bg-secondary br-16" >
            <img :src="project.thumbnail" loading="lazy" :alt="project.title">
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
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
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
    overflow: hidden;
}
</style>