/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'               //core css
import 'primeicons/primeicons.css'


const app = createApp(App);

app.use(PrimeVue)
app.use(store)
app.use(router)


app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('RadioButton', RadioButton);
app.component('Calendar', Calendar);
app.component('Dropdown', Dropdown);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')