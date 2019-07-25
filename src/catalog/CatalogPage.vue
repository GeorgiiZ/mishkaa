<template>
    <div class="catalog-main">
        <div class="products">
            <ProductCard v-for = "(product, key) in availibleProducts" :key="key" 
                         :product = "product"
                         @basketClicked = "onModalWindow(product)">
            </ProductCard>
        </div>
        <div class="production">
            <div class="production__video">
                <img class="production__video-play" src="../assets/catalog-images/playsvg.png"/>
                <img class="production__video-img" src="../assets/catalog-images/videodesktop.png"/>
            </div>
            <div class="production__desc">
                <img src="../assets/catalog-images/videosvg.png"/>
                <article>
                    <h3><strong>Процесс производства</strong></h3>
                    <p class="production__desc-paragraph">
                        По просьбам наших любимых фоловеров мы сняли для вас подробное видео о том, как появляются наши товары. 
                    </p>
                </article>
                <div class="production__make-order">сделать заказ</div>
            </div>
        </div>
        <div class="modal-window" v-if="isModalOpened">
            <article class="modal-window__content">
                <span class="modal-window__close" @click="isModalOpened = false;">&times;</span>
                <span class="modal-window__header">добавить в корзину</span>
                <p class="modal-window__paragraph">Выберите размер:</p>
                <div class="modal-window__selection" @change="saveToBasket()">
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="S" v-model="productSize" class="custom-radio"> S
                    </label>
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="M" v-model="productSize" class="custom-radio"> M
                    </label>
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="L" v-model="productSize" class="custom-radio"> L
                    </label>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import availibleProducts from '../api/products';
import ProductCard from './ProductCard.vue';

export default {
    name: "CatalogPage",
    components: {
        ProductCard,
    },
    data(){
        return {
            availibleProducts,
            modalOpened: false,
            selectedProduct: {},
            productSize: null,
        }
    },
    computed: {
        isModalOpened: {
            get: function() {
                return this.modalOpened;
            },
            set: function(value) {
                this.modalOpened = value;
            }
            
        }
    },
    methods:{
        onModalWindow(product){
            this.selectedProduct = product;
            this.isModalOpened = true;
        },
        saveToBasket() {
            const product = this.selectedProduct;
            const size = this.productSize;
            this.$store.commit('addProductToBasket', Object.assign( {}, product, {size} ));
            this.isModalOpened = false;
            this.productSize = null;
        }
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
}

.products{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.production {
    display: flex;
}

.production__desc {
    padding: 90px;
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

.production__desc-paragraph {
    margin: 30px 0;
    line-height: 190%;
}

.production__make-order {
    text-transform: uppercase;
    text-align:center;
    margin: 0 auto;
    font-weight: bold;
}

hr {
    border: 0.5px solid black;
}

.modal-window {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 2;
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-window__content {
    position: relative;
    padding: 30px;
    text-align: center;
    height: 300px;
    width: 500px;
    background-color: white;
}

.modal-window__header {
    display: inline-block;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-top: 25px;
    font-weight: bold;
}

.modal-window__paragraph {
    font-size: 1.5rem;
    margin-top: 25px;
}


.modal-window__selection {
    display: inline-block;
    margin-top: 20px;
}

.modal-window__selection-item {
    margin: 0 30px;
    font-size: var(--text-size__middle);
    font-weight: bold;
}

.modal-window__selection-item:hover {
    cursor: pointer;
}

.modal-window__close {
  position: absolute;
  right: 0;
  top: 0;
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  margin: 20px  25px;
}

.modal-window__close:hover {
  text-decoration: none;
  cursor: pointer;
}

.custom-radio {
    display: none
}

</style>
