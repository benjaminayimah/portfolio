<template>
    <div class="control-btn-wrapper fx fx-col gap-8 ai-c" id="control_left">
        <button class="br-50 fx ai-c jc-c control-btn" @click="$store.commit('showPrevious')">
            <svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" height="19" viewBox="0 0 10.777 19.016">
                <path d="M7918.051,3353.6a1,1,0,0,1-.717-.3l-9.06-9.313.695-.7,8.374-8.408a1,1,0,1,1,1.417,1.411l-7.679,7.711,7.687,7.9a1,1,0,0,1-.717,1.7Z" transform="translate(-7908.274 -3334.586)"/>
            </svg>
        </button>
        <label>Previous</label>
    </div>
</template>
<script>
export default {
    name: 'ControlBtnLeft'
}
</script>
<style lang="scss" scoped>
#control_left{
    left: 50px;
}
.arrow-left {
    margin-right: 4px;
}
</style>