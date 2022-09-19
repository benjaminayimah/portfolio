<template>
    <a v-if="menu.external" class="fx gap-8 ai-c jc-c" :href="menu.url" target="_blank">
        {{ menu.name }}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
            <path d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
        </svg>
    </a>
    <router-link v-else :to="menu.url">{{ menu.name }}</router-link>
</template>
<script>
export default {
    name: 'NavList',
    props: ['menu']

}
</script>
<style lang="scss" scoped>
a {
    padding: 16px;
}
</style>