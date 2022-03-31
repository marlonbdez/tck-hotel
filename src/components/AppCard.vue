
<template>
  <article class="card">
    <h3 class="card__title">{{ title }}</h3>
    <ul class="card__services">
      <li v-for="(service, i) in services" :key="i">{{ service }}</li>
    </ul>
    <AppRadioButton name="card-options" label="Elegir régimen" :value="option" v-model="selectedRadio"/>
  </article>
</template>

<script>
import AppRadioButton from '@/components/AppRadioButton.vue'

export default {
  name: 'AppCard',
  components: {
    AppRadioButton
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
.card {
  background: #FFFFFF;
  border: 1px solid #C9E3F9;
  border-radius: 2px;
  padding: 1rem;
}
</style>
