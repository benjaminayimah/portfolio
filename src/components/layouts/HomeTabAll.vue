<template>
    <div class="grid">
        <div class="grid-item bg-secondary"></div>
        <div class="grid-item bg-secondary"></div>
        <div class="grid-item bg-secondary"></div>
        <div class="grid-item bg-secondary"></div>
    </div>
</template>
<script>
export default {
    name: 'AllWork'
}
</script>
<style lang="scss" scoped>
.grid {
    gap: 30px;
    grid-template-columns: 1fr 1fr;
}
.grid-item{
    height: 600px;
    border-radius: 18px;
}
</style>