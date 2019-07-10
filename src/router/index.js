import Vue from 'vue';
import Router from 'vue-router';

import HeaderSection from '../shared/HeaderSection';
import CatalogPage from '../catalog/CatalogPage';

Vue.use(Router);

export default new Router({
    routes: [{
        path:'/',
        name: 'Catalog',
        component: CatalogPage
    }]
})