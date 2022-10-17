<template>
    <button id="hamburger_menu" arial-control="mobile_navigation" @click.prevent="$store.commit('toggleMenu')" :class="{'collapse': getShowMobMenu }">
        <div class="txt"></div>
        <div class="txt"></div>
    </button>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HamburgerMenu',
    computed: mapGetters(['getShowMobMenu'])
}
</script>
<style lang="scss" scoped>
#hamburger_menu{
    background-color: transparent;
    width: 38px;
    height: 38px;
}
#hamburger_menu div{
    width: 25px;
    border-bottom: 2px solid;
    display: block;
    transition: $transition-time all cubic-bezier(0.7, 0.11, 0.2, 1) 0s;
    position: absolute;
}
#hamburger_menu div:first-child{
    transform: rotate(0deg) translate(0px,-5px);
}
#hamburger_menu div:nth-child(2){
    transform: rotate(0deg) translate(0px,5px);
}
.collapse div:first-child{
    transform: rotate(-45deg) translate(0px,0px) !important;
}
.collapse div:nth-child(2){
        transform: rotate(45deg) translate(0px,0px) !important;
}
</style>