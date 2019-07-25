import Vue from 'vue';
import Router from 'vue-router';

import CatalogHeader from '../catalog/CatalogHeader';
import CatalogPage from '../catalog/CatalogPage';

import HomePage from '../home/HomePage';
import HomeHeader from '../home/HomeHeader';

import FormHeader from '../mishka-form/FormHeader';
import FormPage from '../mishka-form/FormPage';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name: 'home',
            components: {
                header: HomeHeader,
                default: HomePage,
                },
        }, 
        {
            path:'/catalog',
            name: 'Catalog',
            components: {
                header: CatalogHeader,
                default: CatalogPage,
            },
        },
        {
            path:'/form',
            name: 'Form',
            components: {
                header: FormHeader,
                default: FormPage,
            },
        }]
})