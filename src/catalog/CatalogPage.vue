<template>
    <div class="products">
        <div v-for="(product, idx) in availibleProducts" :key="idx" class="products-item">
            <img :src="product.src"/>
            <section class="product-item__description">
                <article>
                    <h4><strong>{{product.name}}</strong></h4>
                    <p>
                        <span v-for="(parameter, key) in product.parameters" :key="key">{{key}} {{parameter}} </span> 
                    </p>
                    <hr>
                </article>
            </section>
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
        }
    }
}
</script>

<style scoped>

.products {
    display: flex;
    justify-content: space-around;
    margin-top: 100px; 
    margin-bottom: 50px;
}

.products-item {
    display: flex;
    flex-direction: column;
}

.product-item__description {
    padding: 20px;
    display: flex;
    flex-direction: column;
}

hr {
    font-weight: 2px;
    background-color: black;
}

</style>
