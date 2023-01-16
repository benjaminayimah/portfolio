<template>
    <div class="grid project-grid" id="projects">
        <project-list v-for="project in getProjects" :key="project.id" v-bind:project="project" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProjectList from '../includes/ProjectList.vue';
export default {
  components: { ProjectList },
    name: 'AllProjects',
    computed: mapGetters(['getProjects'])
}
</script>
<style lang="scss" scoped>
.grid {
    gap: 40px;
    grid-template-columns: 1fr 1fr;
}

</style>