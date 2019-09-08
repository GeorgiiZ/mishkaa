import Vue from 'vue';
import Router from 'vue-router';

import CatalogHeader from '../catalog/CatalogHeader';
import CatalogPage from '../catalog/CatalogPage';

import HomePage from '../home/HomePage';
import HomeHeader from '../home/HomeHeader';

import FormHeader from '../mishka-form/FormHeader';
import FormPage from '../mishka-form/FormPage';

import Layout from '../layout/Layout';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name: 'layout',
            redirect: 'home',
            components: {
                default: Layout,
            },
            children: [
                {
                    path:'home',
                    name: 'home',
                    components: {
                        header: HomeHeader,
                        default: HomePage,
                    },
                }, 
                {
                    path:'catalog',
                    name: 'catalog',
                    components: {
                        header: CatalogHeader,
                        default: CatalogPage,
                    },
                },
                {
                    path:'form',
                    name: 'form',
                    components: {
                        header: FormHeader,
                        default: FormPage,
                    },
                }
            ]
        }]
})