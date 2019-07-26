<template>
    <div class="catalog-main">
        <div class="products">
            <ProductCard v-for ="(product, key) in availibleProducts" :key="key" 
                         :product ="product"
                         @basketClicked ="onModalWindow(product)">
            </ProductCard>
        </div>
        <div class="production">
            <div class="production__video">
                <img class="production__video-play" src="../assets/catalog-images/playsvg.png"/>
                <img class="production__video-img" src="../assets/catalog-images/videodesktop.png"/>
            </div>
            <div class="production__desc">
                <img class="production__camera-img" src="../assets/catalog-images/videosvg.png"/>
                <article>
                    <span class="production__desc-header">Процесс производства</span>
                    <p class="production__desc-paragraph">
                        По просьбам наших любимых фоловеров мы сняли для вас подробное видео о том, как появляются наши товары. 
                    </p>
                </article>
                <div class="production__make-order">сделать заказ</div>
            </div>
        </div>
        <ModalDialog v-show="isModalOpened"
                     @windowClosed ="() => isModalOpened = false" 
                     :selectedProduct ="selectedProduct"/>
    </div>
</template>

<script>
import availibleProducts from '../api/products';
import ProductCard from './ProductCard.vue';
import ModalDialog from '../shared/ModalDialog.vue';

export default {
    name: "CatalogPage",
    components: {
        ProductCard,
        ModalDialog,
    },
    data(){
        return {
            availibleProducts,
            selectedProduct: {},
            isModalOpened: false,
        }
    },
    methods:{
        onModalWindow(product){
            this.selectedProduct = product;
            this.isModalOpened = true;
        },
    },
    filters: {
        capitalize(value){
            var capitalFirst = value.charAt(0).toUpperCase() 
            var noCaseTail = value.slice(1, value.length) 
            return capitalFirst + noCaseTail;
        },
        currency(amount, symbol) {
            return `${amount} ${symbol}`;
        }
    },
}
</script>

<style scoped>

.catalog-main {
    padding: 50px;
    margin: 50px 0;
    font-size: var(--text-size__light);
}

.products{
    display: flex;
    justify-content: space-between;
}

.production {
    display: flex;
    margin-top: 50px; 
}

.production__desc {
    padding: 80px;
}

.production__desc-header {
    font-size: var(--text-size__regular);
    font-weight:  bold;
}

.production__desc-paragraph {
    margin: 30px 0;
    line-height: var(--line-height__paragraph);
}

.production__camera-img {
    margin-bottom: 20px; 
}

.production__video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
	width: 682px;
	height: 455px;
}

.production__video-img {
    position: absolute;
}

.production__video-play {
    z-index: 1;
    max-height: 78px;
}



.production__make-order {
    text-transform: uppercase;
    text-align:center;
    margin: 50px auto;
    font-weight: bold;
    font-size: var(--text-size__regular);
}

hr {
    border: 0.5px solid black;
}

</style>
