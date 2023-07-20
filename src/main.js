import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

// import AboutPage from './components/pages/about/AboutPage.vue';
import MainPage from './components/pages/MainPage.vue';
import UserPage from './components/pages/user/UserPage.vue';
import BookList from './components/library/BookList.vue';


const routes = [
    { path: '/', component: BookList  },
    { path: '/about', component: MainPage },
    { path: '/user', component: UserPage }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app')