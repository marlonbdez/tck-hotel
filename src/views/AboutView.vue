<template>
  <div class="about">
    <h1>Bebidas</h1>
    <span v-if="error">No ha sido posible obtener la información en este momento. </span>
    <span v-if="loading">Cargando</span>
    <ul>
      <li v-for="item in items" :key="item.id"> {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: null,
      error: false,
      loading: true
    }
  },
  methods: {
    async fetchInfo () {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers?per_page=10')
        this.items = await response.json()
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
      }
    }
  },
  mounted () {
    this.fetchInfo()
  }
}
</script>
