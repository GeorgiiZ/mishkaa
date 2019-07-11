<template>
    <div class="catalogHeader">
        <div class="header-title">
            <h1>{{message}}</h1>
        </div>
        <img class='catalog-header__image' src="../assets/index-images/herodesktopjpg.png"/>
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

.catalog-header__image{
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.catalogHeader {
    position: relative;
    height: 400px;
}

.header-title {
    position: relative;
    padding: 50px;
    text-align: center;
}

.catalogHeader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 34px;
    background: url("../assets/catalog-images/zigzagfilldesktopsvg.png") repeat-x ;
    bottom: 0;
    left: 0;
}

h1 {
    font-weight: bold;
}

.bottom-img {
    display: block;
    margin: 0 auto;
}

</style>
