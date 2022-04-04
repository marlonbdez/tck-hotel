<template>
  <div class="radio" :class="classObject" @click="updateModelValue">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="state"
      class="radio__input"
    />
    <label class="radio__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>

export default {
  name: 'BaseRadio',
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
        'radio--checked': this.state
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
.radio {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: $color-extra-4;

  &__input[type="radio"] {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    height: 1rem;
    width: 1rem;
    margin: 0 .75rem;
    outline: none;
    padding: 0;
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;

    &::after {
      background-color: $color-white;
      border: .0625rem solid $color-extra-5;
      border-radius: 50%;
      content: "";
      height: 1rem;
      width: 1rem;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &__label {
    color: $color-gray;
    margin: .75rem .25rem;
    cursor: pointer;
  }

  &--checked {
    border: .0625rem solid $color-extra-6;

    .radio__input::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        display: block;
        border: 0;
        width: 0.625rem;
        height: 0.625rem;
        top: 0.25rem;
        left: 0.25rem;
        background-color: $color-extra-7;
        z-index: 1;
      }
    .radio__input::after {
      border: 0.0625rem solid $color-extra-7;
    }
  }
}

</style>
