<template>
    <div class="catalog-main">
        <div class="products">
            <div v-for="(product, idx) in availibleProducts" :key="idx" class="products-item">
                <img :src="product.src"/>
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
            <figure class="production__video">
                <img src="../assets/catalog-images/videodesktop.png"/>
            </figure>
            <div class="production__desc">
                <img src="../assets/catalog-images/videosvg.png"/>
                <article>
                    <h4><strong>Процесс производства</strong></h4>
                    <p>
                        По просьбам наших любимых фоловеров мы сняли подробное видео о том, как появляются наши товары. 
                    </p>
                </article>
                <h5 class="make-order">СДЕЛАТЬ ЗАКАЗ</h5>
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
    justify-content: space-between;
    margin-bottom: 30px;
}

.products-item__desc {
    padding: 20px;
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
    flex-direction: column;
    padding: 90px;
}

.production__video {
	width: 682px;
	height: 455px;
}

.make-order {
    text-align: center;
    margin: 75px 0;
    font-weight: bold;
}

hr {
    border: 0.5px solid black;
}

</style>
