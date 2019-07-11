<template>
    <div class="grey contain">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    name: "HomeHeader",
    data() {
        return {
            message: "Вязание на заказ",        
        }
    },
}
</script>



<style scoped>

h1 {
    margin: 100px;
    font-weight: bold;
}

.contain {
    display: flex;
    justify-content: center;
}

.grey {
    background-color: lightgray;
}

</style>
