<template>
    <div class="catalog-header">
        <span class="catalog-header__title">{{message}}</span>
    </div>
</template>

<script>
export default {
    name: "CatalogHeader",
    data() {
        return {
            message: "Каталог товаров",        
        }
    },
}
</script>

<style scoped>

.catalog-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 255px;
    margin: auto 0;
}

.catalog-header__title {
    z-index: 1;
    font-weight: bold;
    font-size: 50px;
}


.catalog-header::after {
    content: '';
    position: absolute;
    width: 1150px;
	height: 34px;
    background: url("../assets/catalog-images/zigzagfilldesktopsvg.png");
    bottom: 0;
    left: 0;
}

</style>
