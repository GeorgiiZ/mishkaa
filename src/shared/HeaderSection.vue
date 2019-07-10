<template>
    <div class="jumbotron">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name: "HeaderSection",
    props: {
        message:{
            type: String
        }
    },
}
</script>

<style scoped>


</style>
