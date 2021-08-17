// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import MainApp from './App';
import routes from './routes';

Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

new Vue({
    el: '#nmr-app',
    components: {
        MainApp,
    },
    router
});
