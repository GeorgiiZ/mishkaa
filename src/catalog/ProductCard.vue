<template>
    <div class="product">
        <img class="product__img" :src="product.src"/>
        <article class="product__desc">
            <h4><strong>{{product.name}}</strong></h4>
            <span>{{ product | getParams }}</span>
        </article>
        <div class="product__buy">
            <hr>
            <div class="product__buy-cost">
                <strong>{{product.cost}} руб.</strong>
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
    methods: {
        basketClick() {
            this.$emit('basketClicked', this.product);
        }
    },
    filters: {
        getParams(product) {
            var height =  product.height ? `высота ${product.height} см, ` : '';
            var weight = product.weight ? `вес ${product.weight} г, ` : '';
            var diameter = product.diameter ? `диаметр ${product.diameter} см, ` : '';

            var resStr = diameter + height + weight;
            var firstLetter = resStr[0].toUpperCase();
            return firstLetter + resStr.slice(1, resStr.length - 2);
        }
    },
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

.product__buy-basket:hover {
    cursor: pointer;
}

hr {
    border: 0.5px solid black;
}

</style>
