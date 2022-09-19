<template>
    <div class="grid project-grid">
        <project-list v-for="project in computedProduct" :key="project.id" v-bind:project="project" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProjectList from '../includes/ProjectList.vue';
export default {
  components: { ProjectList },
    name: 'CaseStudy',
    computed: {
        ...mapGetters(['getProjects']),
        computedProduct() {
            return this.getProjects.filter(product =>product.type == 'case-study')
        }
    },
}
</script>
<style lang="scss" scoped>

</style>