/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {
    routes
} from './routes';

import storeData from './store';

import MainApp from './components/MainApp';

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(
    storeData
)


const router = new VueRouter({
    routes,
    mode: "history"
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

router.beforeEach((to, from, next) => {
    const requiredAuth = to.matched.some(record => record.meta.requiredAuth)
    const currentUser = store.state.currentUser
    if (requiredAuth && !currentUser) {
        next('/login')
    } else if (to.path == '/login' && currentUser) {
        next('/')
    } else {
        next()
    }
})


const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    },

});