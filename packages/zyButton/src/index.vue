<template>
  <button
    class="zy-button"
    :class="[
      type ? 'zy-button--' + type : '',
      icon || loading ? 'flex' : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },

    ]"
    :autofocus="autofocus"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <i v-if="loading" class="rotate ri-loader-line"></i>
    <i :class="icon" v-if="icon && !loading" ></i>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "zyButton",
  props: {
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String,
    },
    icon: {
      type: String,
      default: ''
    }
  },
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate {
  position: relative;
  animation: 1.5s spin infinite linear;
}
.zy-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 聚焦时
  &:focus,
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  // 点击时
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.flex {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    & i{
      margin-right: 5px;
    }
  }
  &.is-disabled {
    &:focus,
    &:hover{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5
    }
  }
  &.is-plain {
    &:focus,
    &:hover {
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
    &:active {
      border-color: #3a8ee6;
      color: #3a8ee6;
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle{
    border-radius: 50%;
    padding: 12px;
  }
  &.is-loading {
    position: relative;
    pointer-events: none;
    &::before {
      pointer-events: none;
      content: "";
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: hsla(0,0%,100%,.35)
    }
  }
  &--text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    &:focus,
    &:hover {
      color: #66b1ff;
      border-color: transparent;
      background-color: transparent;
    }
    &:active {
      color: #3a8ee6;
      background-color: transparent;
    }
    &.is-disabled {
      color: #c0c4cc;
      &:focus,
      &:hover,
      &:active {
        border-color: transparent;
      }
    }
  }
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    // 聚焦时
    &:focus,
    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    // 点击时
    &:active {
      outline: none;
    }
    &.is-disabled {
      &:focus,
      &:hover,
      &:active{
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
      &:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
        outline: none;
      }
    }
    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }

  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    // 聚焦时
    &:focus,
    &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    // 点击时
    &:active {
      outline: none;
    }
    &.is-disabled {
      &:focus,
      &:hover,
      &:active{
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
      &:active {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
        outline: none;
      }
    }
    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }

  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    // 聚焦时
    &:focus,
    &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    // 点击时
    &:active {
      outline: none;
    }
    &.is-disabled {
      &:focus,
      &:hover,
      &:active{
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
      &:active {
        background: #dd6161;
        border-color: #dd6161;
        color: #fff;
        outline: none;
      }
    }
    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }

  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    // 聚焦时
    &:focus,
    &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    // 点击时
    &:active {
      outline: none;
    }
    &.is-disabled {
      &:focus,
      &:hover{
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
      &:active {
        background: #82848a;
        border-color: #82848a;
        color: #fff;
        outline: none;
      }
    }
    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }

  &--warning {
    	color: #fff;
	    background-color: #e6a23c;
	    border-color: #e6a23c;
    // 聚焦时
    &:focus,
    &:hover {
    	background: #ebb563;
	    border-color: #ebb563;
	    color: #fff;
    }
    // 点击时
    &:active {
      outline: none;
    }
    &.is-disabled {
      &:focus,
      &:hover,
      &:active{
        color: #fdf6ec;
        background-color: #f0c78a;
        border-color: #faecd8;
      }
    }
    &.is-plain {
  	  color: #e6a23c;
	    background: #fdf6ec;
	    border-color: #f5dab1;
      &:hover,
      &:focus {
      	background: #e6a23c;
	      border-color: #e6a23c;
	      color: #fff;
      }
      &:active {
        background: #cf9236;
	      border-color: #cf9236;
	      color: #fff;
	      outline: none;
      }
    }
    &.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }
  }
}
</style>
