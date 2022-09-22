<template>
    <div class="footer">
        <div class="fx-col gap-8">
            <h3>Thank you for watching.</h3>
            <div>
                <a href="/about" class="upper-case a-link fw-600">Get in touch</a>
            </div>
        </div>
        <div class="mt-50">
            <i >You may also like to view…</i>
        </div>
        <div class="grid detailed-footer-grid">
            <detailed-project-footer-list v-for="project in computedProjects" :key="project.id" v-bind:project="project"/>
        </div>
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DetailedProjectFooterList from './DetailedProjectFooterList.vue';
export default {
  components: { DetailedProjectFooterList },
    name: 'DetailedProjectFooter',
    props: ['id'],
    computed: {
        ...mapGetters(['getProjects']),
        computedProjects() {
            return this.getProjects.filter(project => project.id != this.id)
        }
    }
}
</script>
<style lang="scss" scoped>
h3{
    margin: 0;
    color: $primary-color;
}
.footer{
    padding: 50px 0 100px 0;
}
.grid {
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 24px;
}
</style>