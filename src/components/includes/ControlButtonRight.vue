<template>
    <div class="control-btn-wrapper fx fx-col gap-8 ai-c" id="control_right">
        <button class="br-50 fx ai-c jc-c control-btn" @click="$store.commit('showNext')" title="Next">
            <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" height="19" viewBox="0 0 10.777 19.015">
                <path d="M7909.678,3353.6a1,1,0,0,1-.717-1.7l7.687-7.9-7.679-7.711a1,1,0,0,1,1.417-1.411l9.068,9.106-9.06,9.313A1,1,0,0,1,7909.678,3353.6Z" transform="translate(-7908.678 -3334.586)"/>
            </svg>
        </button>
        <!-- <label>Next</label> -->
    </div>
</template>
<script>
export default {
    name: 'ControlBtnRight'
}
</script>
<style lang="scss" scoped>
.arrow-right {
    margin-left: 4px;
}
</style>