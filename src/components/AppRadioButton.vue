<template>
  <div class="radio-wrapper" :class="classObject" @click="updateModelValue">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="state"
      class="radio-wrapper__input"
    />
    <label class="radio-wrapper__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>

export default {
  name: 'AppRadioButton',
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    value: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default () {
        return 'radio-options-' + this._uid
      }
    },
    name: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    state () {
      return this.modelValue === this.value
    },
    classObject () {
      return {
        'radio-wrapper--checked': this.state
      }
    }
  },
  methods: {
    updateModelValue () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-wrapper {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: #dee1e8;

  &__input[type="radio"] {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    height: 24px;
    margin: 0 12px;
    outline: none;
    padding: 0;
    position: relative;
    width: 24px;
    -webkit-appearance: none;

    &::after {
      background-color: #fff;
      border: 1px solid #8b9199;
      border-radius: 50%;
      content: "";
      height: 24px;
      display: block;
      left: 0;
      position: absolute;
      top: 0;
      width: 24px;
    }
  }

  &__label {
    color: #616469;
    cursor: pointer;
    line-height: 1.68;
    margin: 0;
  }

  &--checked {
    border: 1px solid #326C96;

    .radio-wrapper__input::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        display: block;
        border: 0;
        width: 18px;
        height: 18px;
        top: 3px;
        left: 3px;
        background-color: gray;
        z-index: 1;
      }
  }
}

</style>
