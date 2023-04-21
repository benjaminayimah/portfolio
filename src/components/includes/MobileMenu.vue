<template>
    <div v-show="getMobile" id="mobile_menu" class="bg-plain" :class="getShowMobMenu? 'show' : 'no-show'" :style="{ height: getWindowHeight-75 + 'px' }">
        <div class="mob-menu-wrapper jc-c fx-col">
            <nav>
                <span class="mb-16">Menu</span>
                <mobile-nav-list v-for="menu in getMenus" :key="menu.id"  v-bind:menu="menu"/>
                <span class="mt-24 mb-8 text-ellipsis">Get in touch</span>
                <a @click="$store.commit('toggleMenu')" href="mailto:benjaminayimah@gmail.com" title="benjaminayimah@gmail.com" class="a-link clic">benjaminayimah@gmail.com</a>
            </nav>
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
    bottom: 0;
    z-index: 100;
    right: 0;
    transition: $transition-time all cubic-bezier(0.7, 0.11, 0.2, 1) 0s;
}
.no-show{
    width: 0;
    visibility: hidden;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
}
.show{
    visibility: visible;
    width: 100%;
}
.mob-menu-wrapper{
    height: 100%;
    padding: 20px 0;
    width: 80%;
    margin: 0 auto;
}
span{
    color: $gray2;
    display: block;
}
.dark-mode span{
    color: $darkGray;
}
</style>