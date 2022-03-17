<template>
  <label
    class="zy-checkbox-button"
      :class="[
        size ? 'zy-checkbox-button--' + size : '',
        { 'is-disabled': isDisabled },
        { 'is-checked': isChecked },
      ]"
    role="checkbox"
    >
    <input
      class="zy-checkbox-button__original"
      type="checkbox"
      :disabled="isDisabled"
      :value="label"
      v-model="model"
      @change="handleChange">

    <span class="zy-checkbox-button__inner"
      v-if="$slots.default || label">
      <slot>{{label}}</slot>
    </span>

  </label>
</template>
<script>
  export default {
    name: 'ElCheckboxButton',
    data() {
      return {
        isLimitExceeded: false
      };
    },
    props: {
      value: {},
      label: {},
      disabled: Boolean,
    },
    computed: {
      model: {
        get() {
          return this._checkboxGroup
            ? this.store : this.value;
        },
        set(val) {
          if (this._checkboxGroup) {
            this.isLimitExceeded = false;
            (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true));
            (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true));
            this.isLimitExceeded === false &&
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },
      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        }
        return true
      },
      _checkboxGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },
      /* used to make the isDisabled judgment under max/min props */
      isLimitDisabled() {
        const { max, min } = this._checkboxGroup;
        return !!(max || min) &&
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked);
      },
      isDisabled() {
        return this._checkboxGroup
          ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled
          : this.disabled || (this.elForm || {}).disabled;
      },
      size() {
        return this._checkboxGroup.checkboxGroupSize || (this.$ELEMENT || {}).size;
      },
    },
    methods: {
      handleChange(ev) {
        if (this.isLimitExceeded) return;
        let value;
        this.$emit('change', value, ev);
        this.$nextTick(() => {
          if (this._checkboxGroup) {
            this.dispatch('ElCheckboxGroup', 'change', [this._checkboxGroup.value]);
          }
        });
      }
    },
  };
</script>