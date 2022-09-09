<template>
    <header class="fx jc-c sticky-top">
        <div class="fx ai-c fx-js top-hold">
            <router-link to="/" id="logo">Benjamin Ayimah</router-link>
            <div class="fx gap-16 ai-c">
                <nav v-if="!getMobile" class="fx">
                    <router-link v-for="menu in menus" :key="menu.id" :to="menu.url">{{ menu.name }}</router-link>
                    <a class="fx gap-8 ai-c jc-c" href="https://docs.google.com/document/d/1qKlos72NGqJiJzPnZopj777ASBBkSrBcbG_M-El_m3Y/edit?usp=sharing" target="_blank">
                        Resume
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 12.447 12.447">
                            <path class="icon-fill" d="M2182.482-198.786V-208l-9.732,9.732a.727.727,0,0,1-.517.215.732.732,0,0,1-.518-.215.732.732,0,0,1,0-1.036l9.733-9.732h-9.216a.732.732,0,0,1-.732-.732.732.732,0,0,1,.732-.732h10.982a.732.732,0,0,1,.732.732v10.982a.732.732,0,0,1-.732.732A.732.732,0,0,1,2182.482-198.786Z" transform="translate(-2171.5 210.501)"/>
                        </svg>
                    </a>
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
export default {
    name: "Header",
    computed: mapGetters(['getMobile']),
    data() {
        return {
            menus: [
                { id: 1, url: "/", name: "Home" },
                { id: 2, url: "/about", name: "About" },
            ]
        };
    },
    components: { ToggleSwitch, HamburgerMenu }
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
nav {
    a {
        text-decoration: unset;
        padding: 16px;
        transition: 0.3s color;
        &.router-link-exact-active {
            color: $primary-color !important;
            font-weight: 500;
        }
        &:hover {
            color: $hover-color;
        }
    }
}
header {
    height: 100px;
    transition: $transition-time linear background-color;
}
.sticky-top{
  top: 0;
}
</style>