<template>
    <div class = "week-product">
        <span class="week-product__header">{{product.name}}</span>
        <div class="week-product__card">
            <p class="week-product__card-desc">
                {{product.description}}
            </p>
            <ul class="week-product__params">
                <li v-for="(paramValue, key) in product.parameters" :key="key" class="week-product__param">
                    {{ key | mapParamName}} : {{paramValue | mapUnit(key)}}
                </li>
            </ul>
            <span class="week-product__cost">Цена: {{product.cost | mapUnit('cost')}}</span>
            <button class="week-product__order-btn">sdcfsd</button>
        </div>
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

.week-product {
    display: flex;
    flex-direction: column;   
    max-width: 700px;
}

.week-product__header {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 90%;
    font-weight: bold;
    font-size: var(--text-size__large);
}

.week-product__card {
    width: 35%;
    margin-top: 150px; 
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
    margin-top: 15px; 
    width: 100%;
    border: none;
    background-color: 	#353839;
    height: 40px;
}

</style>
