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
                <button class="production__make-order">сделать заказ</button>
            </div>
        </div>
        <ModalDialog v-show="isModalOpened"
                     @onClosed ="() => isModalOpened = false" 
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
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    padding: 50px;
}

.production__desc-header {
    font-size: var(--text-size__regular);
    font-weight:  bold;
}

.production__desc-paragraph {
    margin-top: 30px;
    line-height: var(--line-height__paragraph);
}

.production__camera-img {
    margin-bottom: 20px; 
}

.production__video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
	width: 682px;
	height: 455px;
    margin-top: auto; 
}

.production__video-img {
    position: absolute;
    bottom: 0;
    left: 0;
}

.production__video-play {
    z-index: 1;
    max-height: 78px;
}

.production__video-play:hover{
    width: 120px;
}

.production__video-play:active{
    width: 100px;
    opacity: 0.7;
}

.production__make-order {
    text-transform: uppercase;
    text-align:center;
    margin: auto  auto 0 auto;
    font-weight: bold;
    padding: 15px;
    border: none;
    outline: inherit;
    background-color: transparent;
    cursor: pointer;
    font-size: var(--text-size__regular);
}

hr {
    border: 0.5px solid black;
}

</style>
