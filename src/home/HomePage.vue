<template>
    <div class="home-container">
        <div class="week-product">
                <div class = "week-product__caption">
                  товар недели
                </div>
                <WeekProduct class="WeekProduct" :product="weekProduct"></WeekProduct>
        </div>
    </div>
</template>

<script>
import WeekProduct from './WeekProduct.vue';
import weekProduct from '../api/week-product';

export default {
    name: 'HomePage',
    components: {
        WeekProduct
    },
    data() {
        return{
            weekProduct: weekProduct,
        }
    }
}
</script>

<style scoped>

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.week-product {
    position: relative;
    display: flex;
    width: 90%;
    height: 500px;
}

.week-product__caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
    font-size: var(--text-size__regular);
    text-align: center;
    width: 10%;
}

.WeekProduct {
    margin-left: auto; 
}

</style>

