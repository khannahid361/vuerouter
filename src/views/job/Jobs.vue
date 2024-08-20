<template>
    <div>
        <h1>Jobs Page</h1>
        <div v-for="job in jobs" :key="job.id">
            <h3>{{ job.title }}</h3>
            <hr style="color: black;">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Jobs',
        data() {
            return {
                jobs: [
                    { title: 'Software Engineer', company: 'XYZ Corp', location: 'New York', salary: '$80,000', id: 1 },
                    { title: 'Senior Software Engineer', company: 'ABC Corp', location: 'San Francisco', salary: '$100,000', id: 2 },
                    { title: 'Product Manager', company: 'DEF Corp', location: 'Los Angeles', salary: '$90,000', id: 3 },
                    { title: 'Senior Product Manager', company: 'GHI Corp', location: 'Chicago', salary: '$110,000', id: 4 },
                    { title: 'Senior Software Engineer', company: 'JKL Corp', location: 'Seattle', salary: '$105,000', id: 5 },
                    { title: 'Senior Product Manager', company: 'MNO Corp', location: 'Boston', salary: '$115,000', id: 6 }
                ]
            }
        },
    }
</script>
<style>

</style>