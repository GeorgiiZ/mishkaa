<template>
    <div class="product">
        <img class="product__img" :src="product.src"/>
        <div class="product__info"
            @click="basketClick()">
            <div class="product__desc">
                <div class="product__desc-name" >{{product.name}}</div>
                <span v-for="(param, key) in product.parameters" :key="key">
                    {{ key | mapParamName }} {{ param | mapUnit(key)}},
                </span>
            </div>
            <div class="product__buy">
                <span class="product__buy-cost">{{product.cost}} руб.</span>
                <img class="product__buy-basket" 
                     src="../assets/cartsvgcopy.png"/>
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
    max-width: 316px;
}


.product__info {
    display: flex;
    flex-direction: column;
    padding: 30px 30px 0px 30px;
    cursor: pointer;
    flex: 1;
}

.product__desc {
    max-width: 315px;
    line-height: var(--line-height__paragraph);
    margin-bottom: 10px; 
}

.product__desc-name {
    font-size: var(--text-size__regular);
    font-weight: bold;
    margin-bottom: 5px; 
}

.product__buy {
    margin-top: auto; 
    padding-top: 15px; 
    border-top: 0.5px solid black;
    display: flex;
    align-items: center;
}

.product__buy-cost {
    font-weight: bold;
}

.product__buy-basket {
  max-height: 25px;
  position: relative;
  margin-left: auto;
  opacity: 0.2;
}

.product__info:hover .product__buy-basket {
    opacity: 1;
}

.product__info:hover .product__desc-name {
    opacity: 0.6;
}

.product__info:active .product__buy-basket {
    opacity: 0.3;
}

.product__info:active .product__desc-name {
    opacity: 0.4;
}

</style>
