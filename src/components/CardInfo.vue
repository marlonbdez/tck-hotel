
<template>
  <article class="card-info" :class="classObject">
    <div class="card-info__desc">
      <h3 class="card-info__title">{{ title }}</h3>
      <ul class="card-info__services">
        <li v-for="(service, i) in services" :key="i">{{ service }}</li>
      </ul>
    </div>
    <BaseRadio class="card-info__radio" name="cards" label="Elegir régimen" :value="option" v-model="selectedRadio"/>
  </article>
</template>

<script>
import BaseRadio from '@/components/base/BaseRadio.vue'
export default {
  name: 'CardInfo',
  components: {
    BaseRadio
  },
  props: {
    option: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      selectedRadio: this.value
    }
  },
  computed: {
    classObject () {
      return {
        'card-info--checked': this.selectedRadio === this.option
      }
    }
  },
  watch: {
    selectedRadio (value) {
      this.$emit('input', value)
    },
    value (value) {
      this.selectedRadio = value
    }
  }
}
</script>

<style lang="scss" scoped>
.card-info {
  background: $color-white;
  border: .0625rem solid $color-primary-light;
  border-radius: .125em;
  padding: 1.625rem 1rem;
  max-width: 14.0625em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include tablet-portrait {
    height: 100%;
  }

  &--checked {
    border: .125em solid $color-extra-1;
  }

  &__title {
    @include font-roboto-bold-medium;
    text-align: center;
    padding-bottom: 1.625em;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      border-bottom: .125em solid $color-extra-2;
      height: .125em;
      width: 4.5em;
      left: calc(50%);
      transform: translateX(-40%);
    }
  }

  &__services {
    margin: .5em .5em 2.625em;
    list-style: none;

    li {
      @include font-roboto-regular-small;
      position: relative;

      &::before {
        content: "\2022";
        font-weight: bold;
        color: $color-extra-3;
        position: absolute;
        margin-left: -1em;
      }
    }
  }

  &__radio {
    margin-top: 1rem;
  }
}
</style>
