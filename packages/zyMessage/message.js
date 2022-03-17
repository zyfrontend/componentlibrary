import Vue from 'vue';
import Main from './src/index';
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
    // 调用this.$message时传递进来的参数
    options = options || {};
    // 如果参数是个string，直接赋值给message
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    let userOnClose = options.onClose;
    let id = 'message_' + seed++;
    options.onClose = function() {
        Message.close(id, userOnClose);
    };

    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;

    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instances.push(instance);

    return instance;
}

const status = ['success', 'warning', 'info', 'error']
status.forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});

Message.close = function(id, userOnClose) {
    let len = instances.length;
    let index = -1;
    let removedHeight;
    for (let i = 0; i < len; i++) {
        if (id === instances[i].id) {
            removedHeight = instances[i].$el.offsetHeight;
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
        let dom = instances[i].$el;
        dom.style['top'] =
            parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
};

Message.closeAll = function() {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};

export default Message;
