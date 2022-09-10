<template>
    <li v-if="menu.external" @click="$store.commit('toggleMenu')">
        <a class="fx gap-8 ai-c" :href="menu.url" target="_blank">
            {{ menu.name }}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
                <path class="icon-fill" d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
            </svg>
        </a>
    </li>
    <li v-else @click="$store.commit('toggleMenu')">
        <router-link :to="menu.url">{{ menu.name }}</router-link>
    </li>
</template>
<script>
export default {
    name: 'MobileNavList',
    props: ['menu']

}
</script>
<style lang="scss" scoped>
li{
    display: flex;
    height: 75px;
    a {
        font-size: 1.8rem;
        flex-grow: 1;
        height: inherit;
        align-items: center;
        text-decoration: none;
        &.router-link-active  {
            color: $primary-color;
        }
    }
}

</style>