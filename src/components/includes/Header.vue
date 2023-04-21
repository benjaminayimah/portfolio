<template>
    <header class="fx jc-c sticky-top blur blur-1" id="header" :class="{ 'opaque': getShowMobMenu }" >
        <div class="fx ai-c fx-js top-hold">
            <div id="main_home"></div>
            <div class="fx gap-16 ai-c">
                <nav v-if="!getMobile" class="fx" id="mobile_navigation">
                    <nav-list v-for="menu in getMenus" :key="menu.id" v-bind:menu="menu" />
                </nav>
                <toggle-switch />
                <hamburger-menu v-if="getMobile" />
            </div>
        </div>
    </header>
</template>
<script>
import ToggleSwitch from './ToggleSwitch.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import { mapGetters } from 'vuex';
import NavList from './NavList.vue';
export default {
    name: "Header",
    computed: mapGetters(['getMobile', 'getMenus', 'getShowMobMenu']),
    components: { ToggleSwitch, HamburgerMenu, NavList },
}
</script>
<style lang="scss" scoped>
header {
    height: 80px;
    transition: $transition-time ease background-color;
    z-index: 10;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}
.show {
    opacity: 1 !important;
}
.sticky-top{
  top: 0;
}
</style>