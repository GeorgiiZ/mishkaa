<template>
    <div class ="week-product">
        <div class = "week-product__header">
            <span class = "week-product__header-caption">товар недели</span>
            <span class="week-product__header-title"> {{ product.name }} </span>
        </div>
        <div class="week-product__card">
            <p class="week-product__card-desc">
                {{product.description}}
            </p>
            <ul class="week-product__params">
                <li v-for="(paramValue, key) in product.parameters" :key="key" class="week-product__param">
                    {{ key | mapParamName}} : {{ paramValue | mapUnit(key) }}
                </li>
            </ul>
            <span class="week-product__cost">Цена: {{product.cost | mapUnit('cost')}}</span>
            <button class="week-product__order-btn" @click="onOrderClicked">заказать</button>
        </div>
        <img class="week-product__img" src="../assets/home-images/triplesetdesktop.png"/>
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
    filters: {
        mapParamName(paramKey){
            var namesMap = {
                color : 'Цвет',
                diameter: 'Диаметр',
                height: 'Высота'
            };
            return namesMap[paramKey];
        },
        mapUnit(value, key){
            var unitsMap = {
                color : '',
                diameter: 'см',
                height: 'см',
                width: 'см',
                cost: 'руб.'
            }
            return `${value} ${unitsMap[key]}`;
        }
    },
}
</script>

<style scoped>

.week-product{
    display: flex;
    flex-direction: column;
    min-height: 600px;
}

.week-product__header{
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 100px;
    z-index: 1;
}

.week-product__header-caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
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
    margin-left: 120px;
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
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
}

.week-product__order-btn {
    margin-top: 25px; 
    width: 100%;
    border: none;
    background-color: 	#353839;
    color: white;
    height: 40px;
    text-transform: uppercase;
}

.week-product__img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    margin-bottom: 100px;
}


</style>
