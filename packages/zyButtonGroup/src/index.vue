<template>
  <div class="zy-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zyButtonGroup',
}
</script>

<style lang="scss">

.zy-button-group {
  display: inline-block;
  vertical-align: middle
}

.zy-button-group:after,.zy-button-group:before {
  display: table;
  content: ""
}

.zy-button-group:after {
  clear: both
}

.zy-button-group>.zy-button {
  float: left;
  position: relative
}

.zy-button-group>.zy-button+.zy-button {
  margin-left: 0
}

.zy-button-group>.zy-button.is-disabled {
  z-index: 1
}

.zy-button-group>.zy-button:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0
}

.zy-button-group>.zy-button:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.zy-button-group>.zy-button:first-child:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px
}

.zy-button-group>.zy-button:first-child:last-child.is-round {
  border-radius: 20px
}

.zy-button-group>.zy-button:first-child:last-child.is-circle {
  border-radius: 50%
}

.zy-button-group>.zy-button:not(:first-child):not(:last-child) {
  border-radius: 0
}

.zy-button-group>.zy-button:not(:last-child) {
  margin-right: -1px
}

.zy-button-group>.zy-button.is-active,.zy-button-group>.zy-button:active,.zy-button-group>.zy-button:focus,.zy-button-group>.zy-button:hover {
  z-index: 1
}

.zy-button-group>.el-dropdown>.zy-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--primary:first-child {
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--primary:last-child {
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--primary:not(:first-child):not(:last-child) {
  border-left-color: hsla(0,0%,100%,.5);
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--success:first-child {
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--success:last-child {
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--success:not(:first-child):not(:last-child) {
  border-left-color: hsla(0,0%,100%,.5);
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--warning:first-child {
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--warning:last-child {
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--warning:not(:first-child):not(:last-child) {
  border-left-color: hsla(0,0%,100%,.5);
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--danger:first-child {
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--danger:last-child {
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--danger:not(:first-child):not(:last-child) {
  border-left-color: hsla(0,0%,100%,.5);
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--info:first-child {
  border-right-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--info:last-child {
  border-left-color: hsla(0,0%,100%,.5)
}

.zy-button-group .zy-button--info:not(:first-child):not(:last-child) {
  border-left-color: hsla(0,0%,100%,.5);
  border-right-color: hsla(0,0%,100%,.5)
}

</style>
