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
    font-size: var(--text-size__large);
}


.catalog-header::after {
    content: '';
    position: absolute;
    width: 100%;
	height: 34px;
    background: url("../assets/zigzagfilldesktopsvg.png");
    bottom: 0;
    left: 0;
}

</style>
