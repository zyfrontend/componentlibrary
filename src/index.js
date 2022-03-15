import Vue from 'vue'
import './assets/css/root.scss'
import Button from './components/button/index.vue'
Vue.component('g-button', Button)
new Vue({
    el: '#app'
})