import Message from './message'

Message.install = function (Vue){
    Vue.component(Message.name, Message)
}

export default Message
