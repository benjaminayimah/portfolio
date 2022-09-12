<template>
    <header class="fx jc-c sticky-top" id="header" :class="{ 'opaque': getShowMobMenu }" >
        <div class="fx ai-c fx-js top-hold">
            <router-link to="/" id="logo">Benjamin Ayimah</router-link>
            <div class="fx gap-16 ai-c">
                <nav v-if="!getMobile" class="fx">
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
    font-weight: 500;
    font-size: 21px;
    white-space: nowrap;
    text-decoration: none;
    color: unset;
}
header {
    height: 90px;
    transition: $transition-time linear background-color;
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