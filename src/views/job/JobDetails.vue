<template>
    <div>
        <h1>Job Details Page</h1>
        <p>The Job id is {{ id }}</p>
    </div>
</template>
<script>
export default {
    name: 'JobDetails',
    data() {
        return {
            id : this.$route.params.id
        }
    },
}
</script>
<style>
    
</style>