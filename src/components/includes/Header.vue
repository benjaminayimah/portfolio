<template>
    <header class="fx jc-c sticky-top" id="header" :class="{ 'opaque': getShowMobMenu }" >
        <div class="fx ai-c fx-js top-hold">
            <router-link to="/" id="logo">Benjamin Ayimah<span></span></router-link>
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
#logo{
    font-weight: 600;
    font-size: 22px;
    white-space: nowrap;
    text-decoration: none;
    color: unset;
    position: relative;
    span {
        height: 12px;
        background-color: #8DFA9A;
        width: 100%;
        position: absolute;
        bottom: 2px;
        z-index: -1;
        left: 0;

    }
}
header {
    height: 90px;
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