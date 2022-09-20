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
    name: 'AllWork',
    computed: mapGetters(['getProjects'])
}
</script>
<style lang="scss" scoped>

</style>