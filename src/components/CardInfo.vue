
<template>
  <article class="card-info" :class="classObject">
    <h3 class="card-info__title">{{ title }}</h3>
    <ul class="card-info__services">
      <li v-for="(service, i) in services" :key="i">{{ service }}</li>
    </ul>
    <BaseRadio name="cards" label="Elegir régimen" :value="option" v-model="selectedRadio"/>
  </article>
</template>

<script>
export default {
  name: 'CardService',
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
  background: #FFFFFF;
  border: 1px solid #C9E3F9;
  border-radius: 2px;
  padding: 1rem;

  &--checked {
    border: 1px solid #326C96;
  }
}
</style>
