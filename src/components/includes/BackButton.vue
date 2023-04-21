<template>
    <router-link to="/" class="clic fx ai-c">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M4692.029,5835v12.035h11.676" transform="translate(818.126 -7442.319) rotate(45)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        <span>Back home</span>
    </router-link>
</template>
<script>
export default {
    name: 'BackButton',
}
</script>
<style scoped lang="scss">
.dark-mode a{
    color: #a2a3a4;
    path{
        stroke: #a2a3a4;
    }
    &:hover {
        color: $white;
        path{
            stroke: $white;
        }
    }
}

</style>