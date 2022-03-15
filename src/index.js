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


// 单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    gbutton.$mount()
    gbutton.$on('click', function(){
        expect(1).to.eq(1)
    })
    let button = gbutton.$el
    button.click()
}