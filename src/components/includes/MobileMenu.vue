<template>
    <div v-show="getMobile" id="mobile_menu" class="bg-plain" :class="{ 'show': getShowMobMenu }" :style="{ height: getWindowHeight-75 + 'px' }">
        <div class="mob-menu-wrapper fx-js fx-col">
            <nav>
                <mobile-nav-list v-for="menu in getMenus" :key="menu.id"  v-bind:menu="menu"/>
            </nav>
            <div class="fx gap-8">
                <!-- <a href="appHostname">Login</a>
                <a href="appHostname">Get Started</a> -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MobileNavList from './MobileNavList.vue';
export default {
    name: "MobileMenu",
    computed: mapGetters(["getWindowHeight", "getShowMobMenu", "getMenus", "getMobile"]),
    components: { MobileNavList }
}
</script>
<style lang="scss" scoped>
#mobile_menu{
    top: 75px;
    position: fixed;
    width: 0;
    bottom: 0;
    z-index: 100;
    right: 0px;
    visibility: hidden;
    transition: $transition-time all cubic-bezier(0.7, 0.11, 0.2, 1) 0s;
}
.mob-menu-wrapper{
    height: 100%;
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
}
.show{
    visibility: visible !important;
    width: 100% !important
}
</style>