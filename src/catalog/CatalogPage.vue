<template>
    <div class="catalog-main">
        <div class="products">
            <div v-for="(product, idx) in availibleProducts" :key="idx" class="products-item">
                <img class="products-item__img" :src="product.src"/>
                <section class="products-item__desc">
                    <article>
                        <h4><strong>{{product.name}}</strong></h4>
                        <p class="products-item__desc-params">
                            <span v-for="(parameter, key) in product.parameters" :key="key">
                                 {{key}} {{parameter}},  
                            </span> 
                        </p>
                        <hr>
                    </article>
                    <div class="products-item__cost">
                        <strong>{{product.cost | currency('руб.')}}</strong>
                        <img class="products-item__cart" src="../assets/catalog-images/cartsvg.png"/>
                    </div>
                </section>
            </div>
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
    </div>
</template>

<script>
import availibleProducts from '../api/products';

export default {
    name: "CatalogPage",
    data(){
        return {
            availibleProducts,
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

    }
}
</script>

<style scoped>

.catalog-main {
    padding: 50px;
    margin: 50px 0;
}

.products{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.products-item__img {
    margin: 0 auto;
}


.products-item__desc {
    max-width: 315px;
    padding: 35px;
}

.products-item__desc-params::first-letter {
    text-transform: capitalize; 
}

.products-item__cost {
    display: flex;
}

.products-item__cart {
  max-height: 25px;
  position: relative;
  display: inline-block;
  margin-left: auto;
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

</style>
