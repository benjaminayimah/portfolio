<template>
    <li>
        <a href="#" class="fx-col gap-8" @click.prevent="$store.commit('showProject', project.id)">
            <div class="bg-img" :style="{ backgroundImage: 'url('+project.thumbnail+')'}"></div>
            <span class="text-ellipsis">{{ project.title}}</span>
        </a>
    </li>
</template>
<script>
export default {
    name: 'DetailedProjectFooterList',
    props: ['project']
}
</script>
<style lang="scss" scoped>
.bg-img{
    height: 150px;
    border-radius: 14px;
    transition: 0.3s ease;
    border-bottom: unset !important;
}
a{
    color: unset;
    span{
        font-weight: 500;
        display: flex;
    }
}
li{
    min-width: 270px;
    &:hover {
        .bg-img{
            transform: scale(1.04);
            box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.12);
        }
    }
    // &:last-child {
    //     margin-right: 30px;
    // }&:first-child{
    //     margin-left: 30px;
    // }
}
</style>