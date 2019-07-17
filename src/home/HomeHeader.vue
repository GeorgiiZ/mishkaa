<template>
    <section class="home-header">
        <div class="home-header__title">
            <h1>{{message}}</h1>
        </div>
        <img class='home-header__image' src="../assets/index-images/herodesktopjpg.png"/>
    </section>
</template>

<script>
export default {
    name: "HomeHeader",
    data() {
        return {
            message: "Милые штуки ручной работы",        
        }
    },
}
</script>



<style scoped>

.home-header {
    position: relative;
    display: flex;
    justify-content: center;
    height: 700px;
}

.home-header__image{
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.home-header__title {
    margin-top: 100px;
    z-index: 1;
}
 
h1 {
    font-weight: bold;
}


.home-header::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 34px;
    background: url("../assets/catalog-images/zigzagfilldesktopsvg.png");
    bottom: 0;
    left: 0;
}

</style>
