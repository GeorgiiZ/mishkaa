<template>
    <section class="home-header">
        <div class="home-header__title">{{message}}</div>
    </section>
</template>

<script>
export default {
    name: "HomeHeader",
    data() {
        return {
            message: "Милые штуки ручной работы для дома",        
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
    background-image: url("../assets/index-images/herodesktopjpg.png");
}

.home-header__image{
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.home-header__title {
    font-size: var(--text-size__large);
    font-weight: bold;
    max-width: 50%;
    line-height: 100%;
    text-align: center;
    margin-top: 150px; 
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
