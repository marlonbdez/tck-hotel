<template>
  <div class="product-list">
    <h2 class="product-list__title">{{ title }}</h2>
    <div class="product-list__container">
      <ProductListCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import ProductListCard from '@/components/ProductListCard.vue'
export default {
  components: {
    ProductListCard
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  background: #FFFFFF;
  border: 1px solid #DEE1E8;
  padding: 20px;

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: #4BA7EE;
    text-align: left;
  }
  &__container {
    display: grid;
    gap: 32px;
  }
}
</style>
