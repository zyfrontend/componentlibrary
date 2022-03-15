import Vue from 'vue'
import './assets/css/root.scss'
import Button from './components/button/index.vue'
import Icon from './components/icon/index.vue'
import ButtonGroup from './components/buttonGroup/index.vue'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data:{
        loading1: false
    }
})