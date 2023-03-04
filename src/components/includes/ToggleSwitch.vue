<template>
    <button @click.prevent="$store.commit('setDarkMode')" :class=" mode ? 'dark-active' : 'dark-inactive'" class="clic">
        <div class="fx ai-c jc-c">
            <svg v-if="!getDarkMode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path class="icon-fill" d="M10.571,5.928a4,4,0,1,0,4,4A4,4,0,0,0,10.571,5.928Zm0,6.5a2.483,2.483,0,0,1-2.563-2.5,2.544,2.544,0,0,1,2.563-2.5,2.5,2.5,0,0,1,0,5Zm0,2.5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1a1,1,0,0,1,1-1Zm0-10a1,1,0,0,1-1-1v-1a1,1,0,0,1,2,0v1A1,1,0,0,1,10.571,4.928Zm7,4a1,1,0,0,1,0,2h-1a1,1,0,0,1,0-2Zm-12,1a1,1,0,0,1-1,1h-1a1,1,0,0,1,0-2h1A1,1,0,0,1,5.571,9.928Zm9.95,3.536.707.707a1,1,0,0,1-1.414,1.414l-.707-.707a1,1,0,0,1,1.414-1.414Zm-9.9-7.071-.707-.707A1,1,0,0,1,6.328,4.271l.707.707A1,1,0,0,1,5.621,6.393Zm9.9,0a1,1,0,1,1-1.414-1.414l.707-.707a1,1,0,1,1,1.414,1.414Zm-9.9,7.071a1,1,0,1,1,1.414,1.414l-.707.707a1,1,0,0,1-1.414-1.414Z" transform="translate(-2.571 -1.928)"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 14.997 18">
                <path class="icon-stroke" d="M9,2A7.979,7.979,0,0,0,5,3.08,7.986,7.986,0,0,1,5,16.92,8,8,0,1,0,9,2Z" transform="translate(-3.003 -1)" fill="none" stroke-width="2"/>
            </svg>
        </div>
    </button>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Switch',
    computed: {
        ...mapGetters(['getDarkMode']),
        mode() {
            if(this.getDarkMode)
            return true
            else
            return false
        }
    }
}
</script>
<style lang="scss" scoped>
button {
    padding: 3px;
    height: 38px;
    border-radius: 25px;
    width: 65px;
    transition: $transition-time ease background-color, $transition-time ease border-color;
    div{
        border-radius: 50%;
        height: 30px;
        width: 30px;
        box-shadow: 0 1px 6px 0 rgb(14 20 44 / 18%);
        transition: $transition-time all ease;
        svg {
            transform: rotate(130deg);
        }
    }
}
.dark-active{
    background-color: #1C1B1B;
    border: 1px solid #3C3C3C;
    div {
        transform: translateX(26px);
        background-color: #37383a;
    }
    &:hover {
        background-color: #232324;
        // border-color: #acacac;
    }
}
.dark-inactive{
    border: 1px solid #E3E3E3;
    background-color: #ececec;
    div {
        background-color: #fff;
    }
    &:hover {
        background-color: #E3E3E3;
    }
}
</style>