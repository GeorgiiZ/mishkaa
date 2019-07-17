<template>
    <div class="catalog-header">
        <div class="catalog-header__title">
            <h1>{{message}}</h1>
        </div>
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
    height: 200px;
    margin: auto 0;
}

.catalog-header__title {
    z-index: 1;
}

.catalog-header__title h1 {
    position: relative;
    bottom: 20px;
    font-weight: bold;
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
