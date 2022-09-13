<template>
    <div class="project-hold relative">
        <div class="project-main-wrapper" @click.prevent="$store.commit('showProject', project.id)">
            <img :src="project.image" loading="lazy" class="br-16" alt="">
            <div class="absolute thumbnail-overlay">
                <div class="caption">
                    <div class="caption-header">{{ project.typename.toString().toUpperCase()}}:</div>
                    <div class="title">{{ project.title }}</div>
                </div>
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
    &:hover {
        .thumbnail-overlay{
            visibility: visible;
            opacity: 1;
        }
    }
}
.thumbnail-overlay{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    bottom: 0;
    border-radius: 16px;
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
    align-items: center;
}
.caption{
    padding: 40px;
}
.caption div{
    color: #ffffff;
}
.caption-header{
   font-size: 20px; 
}
.title{
    font-size: 40px;
    font-weight: 600;
    padding: 15px 0;
    line-height: 40px;
}
</style>