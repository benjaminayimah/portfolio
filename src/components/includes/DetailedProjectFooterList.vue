<template>
    <li>
        <a href="#" class="fx-col gap-8" @click.prevent="$store.commit('showProject', project.id)">
            <div class="bg-img" :style="{ backgroundImage: 'url('+project.image+')'}"></div>
            <span>{{ project.title}}</span>
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

}
a{
    color: unset;
    span{
        font-weight: 500;
    }
}
li{
    &:hover {
        .bg-img{
            transform: scale(1.04);
            box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.12);
        }
    }
}
@media screen and (max-width: 499px){
    .bg-img{
        height: 90px;
        border-radius: 8px;
    }
}
</style>