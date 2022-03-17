import zyLink from './src/index'

zyLink.install = function (Vue){
    Vue.component(zyLink.name, zyLink)
}

export default zyLink
