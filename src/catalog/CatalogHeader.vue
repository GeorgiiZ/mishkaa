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
    height: 400px;
}

.catalog-header__title {
    margin-top: 100px;
    z-index: 1;
}

.catalog-header::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 34px;
    background: url("../assets/catalog-images/zigzagfilldesktopsvg.png") repeat-x ;
    bottom: 0;
    left: 0;
}

</style>
