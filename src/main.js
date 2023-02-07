import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "../plugins/vuetify";
import { loadFonts } from "../plugins/webfontloader";
import { inject } from '@vercel/analytics';

import Vue3EasyDataTable from 'vue3-easy-data-table';

import './assets/main.css'
import 'vue3-easy-data-table/dist/style.css';

loadFonts();

const app = createApp(App)

app.use(router)
    .use(vuetify)
    .use(inject);

app.component('EasyDataTable', Vue3EasyDataTable);

app.mount('#app')
