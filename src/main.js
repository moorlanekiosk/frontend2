import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import { store } from './store';

// import AboutPage from './components/pages/about/AboutPage.vue';
import MainPage from './components/pages/MainPage.vue';
import UserPage from './components/pages/user/UserPage.vue';
import BookList from './components/library/BookList.vue';


const routes = [
    { path: '/library', component: BookList  },
    { path: '/', component: MainPage },
    { path: '/user', component: UserPage }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
// Provide the global state to the entire application
app.provide('store', store);
app.use(router);
app.mount('#app')