<template>
    <div class="product">
        <img class="product__img" :src="product.src"/>
        <div class="product__desc">
            <div class="product__desc-name" ><strong>{{product.name}}</strong></div>
            <span v-for="(param, key) in product.parameters" :key="key">
                {{ key | mapParamName }} {{ param | mapUnit(key)}},
            </span>
        </div>
        <div class="product__buy">
            <hr>
            <div class="product__buy-cost">
                <strong>{{product.cost}} руб.</strong>
                <img class="product__buy-basket" 
                     src="../assets/cartsvg.png"
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
    }
}
</script>

<style>

.product {
    font-size: var(--text-size__light);
    display: flex;
    flex-direction: column;
}

.product__img {
    margin: 0 auto;
}


.product__desc {
    max-width: 315px;
    padding: 30px 30px 0px 30px;
    line-height: var(--line-height__paragraph);
}

.product__desc-name {
    font-size: var(--text-size__regular);
    font-weight: bold;
}

.product__buy {
    padding: 0 30px 30px 30px;
    margin-top: auto
}

.product__buy-cost {
    display: flex;
    align-items: center;
}

.product__buy-basket {
  max-height: 25px;
  position: relative;
  margin-left: auto;
}

.product__buy-basket:hover {
    cursor: pointer;
}

hr {
    border: 0.5px solid black;
}

</style>
