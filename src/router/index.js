import Vue from 'vue';
import Router from 'vue-router';

import CatalogHeader from '../catalog/CatalogHeader';
import CatalogPage from '../catalog/CatalogPage';
import HomePage from '../home/HomePage';
import HomeHeader from '../home/HomeHeader';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path:'/',
            name: 'Catalog',
            components: {
                header: CatalogHeader,
                default: CatalogPage,
            },
        },
        {
            path:'/mishka-form',
            name: 'Form',
            components: {
                header: HomeHeader,
                default: HomePage,
        } 
    }]
})