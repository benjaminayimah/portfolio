<template>
    <li>
        <a @click.prevent="$store.commit('goToClick', payload = {id: project.id, name: project.title})" href="#" class="fx-col gap-8 clic2">
            <div class="bg-img" :style="{ backgroundImage: 'url('+project.thumbnail+')'}"></div>
            <span class="text-ellipsis block">{{ project.title}}</span>
        </a>
    </li>
</template>
<script>
export default {
    name: 'DetailedProjectFooterList',
    props: ['project'],
}
</script>
<style lang="scss" scoped>
.bg-img{
    height: 150px;
    border-radius: 10px;
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
    width: 270px;
    list-style-type: none;
    &:hover {
        .bg-img{
            transform: scale(1.01);
            box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.12);
        }
    }
}
</style>