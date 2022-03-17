<template>
  <transition name="zy-message-fade">
    <div :class="[
        'zy-message',
        type ? `zy-message--${type}` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
    ]"
         :style="positionStyle"
         v-show="visible"
    >
      <i :class="typeClass"></i>
      <slot></slot>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="zy-message__content">{{ message }}</p>
        <p v-else v-html="message" class="zy-message__content"></p>
      </slot>
      <i v-if="showClose" class="zy-message__closeBtn zy-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
export default {
  name: 'zyMessage',
  data(){
    return {
      visible: false,
      message: '这是一条消息提示',
      duration: 3000,
      showClose: false,
      closed: false,
      type: 'info',
      verticalOffset: 20,
      center: false,
      dangerouslyUseHTMLString: false,
      onClose: null,
    }
  },
  computed: {
    typeClass() {
      return this.type
          //
          ? 'zy-message__icon ri-error-warning-line'
          : '';
    },
    positionStyle() {
      return {
        'top': `${ this.verticalOffset }px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
}
</script>

<style lang="scss">
.zy-message-fade-enter,.zy-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%,-100%)
}
.zy-message {
  min-width: 380px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #edf2fc;
  transition: opacity .3s,transform .4s,top .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;

}

.zy-message.is-center {
  justify-content: center
}

.zy-message.is-closable .zy-message__content {
  padding-right: 16px
}

.zy-message p {
  margin: 0
}

.zy-message--info .zy-message__content {
  color: #909399;
}

.zy-message--success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}

.zy-message--success .zy-message__content {
  color: #67c23a
}

.zy-message--warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}

.zy-message--warning .zy-message__content {
  color: #e6a23c
}

.zy-message--error {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}

.zy-message--error .zy-message__content {
  color: #f56c6c
}

.zy-message__icon {
  margin-right: 10px
}

.zy-message__content {
  padding: 0;
  font-size: 14px;
  line-height: 1
}

.zy-message__content:focus {
  outline-width: 0
}

.zy-message__closeBtn {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #c0c4cc;
  font-size: 16px
}

.zy-message__closeBtn:focus {
  outline-width: 0
}

.zy-message__closeBtn:hover {
  color: #909399
}

.zy-message .zy-icon-success {
  color: #67c23a
}

.zy-message .zy-icon-error {
  color: #f56c6c
}

.zy-message .zy-icon-info {
  color: #909399
}

.zy-message .zy-icon-warning {
  color: #e6a23c
}

</style>
