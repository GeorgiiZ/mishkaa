import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        basket:[],
    },
    mutations: {
        addProductToBasket(state, product){
            state.basket.push(product);
        }
    },
});
