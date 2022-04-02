<template>
  <div class="products">
    <h1 class="products__title">Bebidas</h1>
    <ProductList title="Cervezas" :items="items" />
    <span v-if="loading">Cargando</span>
    <span v-if="error">No ha sido posible obtener la información en este momento. </span>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  components: {
    ProductList
  },
  data () {
    return {
      items: [],
      error: false,
      loading: true
    }
  },
  methods: {
    async fetchItems () {
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
    this.fetchItems()
  }
}
</script>

<style lang="scss" scoped>
.products__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #4BA7EE;
  text-align: left;
  padding: 20px;
}
</style>
