<template>
  <a
      :class="[
      'zy-link',
      type ? `zy-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
      :href="disabled ? null : href"
      v-bind="$attrs"
      @click="handleClick"
  >

    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default" class="zy-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'zyLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
}
</script>

<style lang="scss">
.zy-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  &.is-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid #409eff;
  }
  &.is-disabled {
    cursor: not-allowed;
  }
  &[class*=el-icon-]+span {
    margin-left: 5px;
  }
  &--default {
    color: #606266;
    &:hover {
      color: #409eff;
    }
    &::after {
      border-color: #409eff;
    }
    &.is-disabled {
      color: #c0c4cc;
    }
  }
  &--primary {
    color: #409eff;
    &:hover {
      color: #66b1ff;
    }
    &:after {
      border-color: #409eff;
    }
    &.is-disabled {
      color: #a0cfff;
    }
    &.is-underline:hover:after {
      border-color: #409eff;
    }
  }
  &--danger {
    color: #f56c6c;
    &:hover {
      color: #f78989;
    }
    &:after {
      border-color: #f56c6c;
    }
    &.is-disabled {
      color: #fab6b6;
    }
    &.is-underline:hover:after {
      border-color: #f56c6c;
    }
  }
  &--success {
    color: #67c23a;
    &:hover {
      color: #85ce61;
    }
    &:after {
      border-color: #67c23a;
    }
    &.is-disabled {
      color: #b3e19d;
    }
    &.is-underline:hover:after {
      border-color: #67c23a;
    }
  }
  &--warning {
    color: #e6a23c;
    &:hover {
      color: #ebb563;
    }
    &:after {
      border-color: #e6a23c;
    }
    &.is-disabled {
      color: #f3d19e;
    }
    &.is-underline:hover:after {
      border-color: #e6a23c;
    }
  }
  &--info {
    color: #909399;
    &:hover {
      color: #a6a9ad;
    }
    &:after {
      border-color: #909399;
    }
    &.is-disabled {
      color: #c8c9cc;
    }
    &.is-underline:hover:after {
      border-color: #909399;
    }
  }


}
</style>
