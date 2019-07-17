<template>
    <div class="catalog-main">
        <div class="products-list">
            <div v-for="(product, idx) in availibleProducts" :key="idx" class="product">
                <img :src="product.src"/>
                <section class="product__desc">
                    <article>
                        <h4><strong>{{product.name}}</strong></h4>
                        <p>
                            <span v-for="(parameter, key, idx) in product.parameters" :key="key">
                                <span v-if="idx === 0">{{key | capitalize}} </span> 
                                <span v-else>, {{key}}</span>  
                                {{parameter}} 
                            </span> 
                        </p>
                        <hr>
                    </article>
                    <div class="product__cost-block">
                        <strong>{{product.cost | currency('руб.')}}</strong>
                        <img class="product__cart-img" src="../assets/catalog-images/cartsvg.png"></img>
                    </div>
                </section>
            </div>
        </div>
        <div class="production">
            <figure class="production-video">
                <img src="../assets/catalog-images/videodesktop.png"/>
            </figure>
            <div class="production-desc">
                <img src="../assets/catalog-images/videosvg.png"/>
                <article>
                    <h4><strong>Процесс производства</strong></h4>
                    <p>
                        По просьбам наших любимых фоловеров мы сняли подробное видео о том, как появляются наши товары. 
                    </p>
                </article>
                <h5 class="make-order">
                    <strong>СДЕЛАТЬ ЗАКАЗ</strong>
                </h5>
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
    padding: 30px;
    margin: 50px 0;
}

.products-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.product {
    display: flex;
    flex-direction: column;
}

.product__desc {
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.product__cost-block {
    display: flex;
}

.product__cart-img {
  max-height: 25px;
  position: relative;
  display: inline-block;
  margin-left: auto;
}

.production {
    display: flex;
}

.production-desc {
    flex-direction: column;
    padding: 90px;
}

.camera-img {
    height: 25px;
}

.production-video {
	width: 682px;
	height: 455px;
}

.make-order {
    text-align: center;
    margin: 75px 0;
}

hr {
    border: 0.5px solid black;
}

</style>
