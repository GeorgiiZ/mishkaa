<template>
    <div class="product">
        <img class="product__img" :src="product.src"/>
        <article class="product__desc">
            <h4><strong>{{product.name}}</strong></h4>
            <div class="product__desc-params">
                <span v-if="product.height">длинна {{product.height | suffix(' см.')}}, </span>
                <span v-if="product.weight">вес {{product.height | suffix(' г.')}}, </span>
                <span v-if="product.diameter">диаметр {{product.diameter | suffix(' см.')}}, </span>
            </div>
        </article>
        <div class="product__buy">
            <hr>
            <div class="product__buy-cost">
                <strong>{{product.cost | suffix('руб.')}}</strong>
                <img class="product__buy-basket" 
                     src="../assets/catalog-images/cartsvg.png"
                     @click="basketClick()"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productCard',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    filters: {
        suffix(amount, symbol) {
            return `${amount} ${symbol}`;
        }

    },
    methods: {
        basketClick() {
            this.$emit('basketClicked', this.product);
        }
    }
}
</script>

<style>

.product {
    display: flex;
    flex-direction: column;
}

.product__img {
    margin: 0 auto;
}


.product__desc {
    max-width: 315px;
    padding: 30px 30px 0px 30px;
}

.product__desc-params {
    display: inline;
}

.product__desc-params::first-letter {
    text-transform: capitalize; 
}

.product__buy {
    padding: 0 30px 30px 30px;
    margin-top: auto
}

.product__buy-cost {
    display: flex;
}

.product__buy-basket {
  max-height: 25px;
  position: relative;
  display: inline-block;
  margin-left: auto;
}

hr {
    border: 0.5px solid black;
}

</style>
