<template>
    <div class ="week-product">
        <div class = "week-product__header">
            <span class = "week-product__header-caption">товар недели</span>
            <span class="week-product__header-title"> {{ product.name }} </span>
        </div>
        <div class="week-product__card">
            <p>
                {{product.description}}
            </p>
            <ul class="week-product__params">
                <li v-for="(param, key) in product.parameters" :key="key" class="week-product__param">
                    {{ key | mapParamName | capitalize }} : 
                    <span> {{ param | mapUnit(key) }} </span>
                </li>
            </ul>
            <div class="week-product__cost">Цена: {{product.cost | mapUnit('cost')}}</div>
            <button class="week-product__order-btn" @click="onOrderClicked">
                <span class="week-product__order-text">заказать</span>
            </button>
        </div>
        <img class="week-product__img" src="../../assets/triplesetdesktop.png" alt="tripleset-pic"/>
    </div>
</template>

<script>
export default {
    name: 'WeekProduct',
    props: {
        product: {
            type: Object,
            rquired: true,
        }
    },
    methods : {
        onOrderClicked() {
            this.$emit("onOrderClicked");
        },
    },
}
</script>

<style scoped>

.week-product {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 600px;
    width: 100%;
}

.week-product__header{
    display: flex;
    align-items: center;
    margin-top: 25px; 
    z-index: 1;
}

.week-product__header-caption {
    color:turquoise;
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--text-size__regular);
    text-align: center;
    width: 70px;
}

.week-product__header-title {
    font-weight: bold;
    font-size: var(--text-size__large);
    margin-left: 50px; 
}

.week-product__card {
    position: relative;
    margin-top: auto; 
    margin-left: 125px;
    max-width: 240px;
    z-index: 1;
}

ul {
    list-style: none;
    padding: 0;
}

.week-product__params {
    margin-top: 50px;
}

.week-product__param{
    list-style: none;
    border-bottom: 1px solid var(--light-grey);    
    padding-bottom: 10px; 
}

.week-product__cost {
    width: 100%;
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
}

.week-product__order-btn {
    margin-top: 25px; 
    width: 100%;
    border: none;
    outline: inherit;
    background-color: 	#353839;
    height: 40px;
}

.week-product__order-text {
    color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    font-size:  var(--text-size__light);
}

.week-product__order-btn:hover .week-product__order-text{
    color: white;
}

.week-product__order-btn:active .week-product__order-text{
    color: white;
    opacity: 0.5;
}

.week-product__img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
}

</style>
