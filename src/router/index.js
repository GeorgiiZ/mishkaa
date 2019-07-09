import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage';
import CatalogPage from '../catalog/CatalogPage';

Vue.use(Router);

export default new Router({
    routes: [{
        path:'/',
        name: 'home',
        components : HomePage
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogPage
    }]
})