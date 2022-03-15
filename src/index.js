import Vue from 'vue'
import './assets/css/root.scss'
import Button from './components/button/index.vue'
import Icon from './components/icon/index.vue'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
new Vue({
    el: '#app'
})