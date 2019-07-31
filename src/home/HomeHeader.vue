<template>
    <section class="home-header">
        <div class="home-header__title">{{message}}</div>
        <div class="home-header__bottom">
            <div class="home-header__bottom-right">
                <span class="home-header__bottom-text">Предметы интерьера</span>
            </div>
            <div class="home-header__bottom-left">
                <span class="home-header__bottom-text">Детские игрушки</span>
            </div>
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
    z-index: 1;
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
    display: flex;
    background-color:	#353839;
    margin-top: auto; 
    height: 17%;
    width: 85%;
}

.home-header__bottom-right {
    position: relative;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 0 3% 25px;
}

.home-header__bottom-right::after {
    position: absolute;
    right: 25px;
    content: url('../assets/home-images/interiorsvg.png');
}

.home-header__bottom-left {
    position: relative;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 0 0 3% 25px;
}

.home-header__bottom-left::after {
    position: absolute;
    right: 25px;
    content: url('../assets/home-images/toysvg.png'); 
}

.home-header__bottom-text {
    width: 100px;
    color: white;
    font-size: var(--text-size__regular);
    font-weight: bold;
}


</style>
