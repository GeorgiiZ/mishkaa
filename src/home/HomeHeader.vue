<template>
    <section class="home-header">
        <div class="home-header__title">{{message}}</div>
        <div class="home-header__bottom
                    home-header__bottom-right">
            <span class="home-header__bottom-text">Предметы интерьера</span>
            <img class="home-header__bottom-img" src="../assets/home-images/interiorsvg.png"/>
        </div>
        <div class="home-header__bottom
                    home-header__bottom-left">
            <span class="home-header__bottom-text">Детские игрушки</span>
            <img class="home-header__bottom-img" src="../assets/home-images/toysvg.png"/>
        </div>
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
    flex-direction: column;
    align-items: center;
    padding: 0 100px;
    height: 750px;
    background-image: url("../assets/home-images/herodesktopjpg.png");
}


.home-header__title {
    font-size: var(--text-size__large);
    font-weight: bold;
    width: 60%;
    line-height: 120%;
    text-align: center;
    margin-top: 150px; 
}

.home-header::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 34px;
    background: url("../assets/home-images/zigzagfilldesktopsvg.png");
    bottom: 0;
    left: 0;
    z-index: 1;
}

.home-header__bottom {
    position: absolute;
    display: flex;
    background-color:	#353839;
    align-items: center;
    width: 39.2%;
    height: 100px;
    padding: 0 0 3% 25px;
}

.home-header__bottom:hover {
    height: 105px;
    padding-bottom: 35px; 
}

.home-header__bottom-right {
    bottom: 0;
    left: 100px;;
}

.home-header__bottom-img{
    margin-left: auto;
    margin-right: 25px;
}

.home-header__bottom-left {
    bottom: 0;
    right: 100px;
}

.home-header__bottom-text {
    width: 100px;
    color: white;
    font-size: var(--text-size__regular);
    font-weight: bold;
}

.home-header__bottom:active .home-header__bottom-text{
        opacity: 0.5;
}

.home-header__bottom:active .home-header__bottom-img{
    opacity: 0.5;
}


</style>
