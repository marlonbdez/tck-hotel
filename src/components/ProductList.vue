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
  background: $color-white;
  border: .0625rem solid $color-extra-4;
  padding: 1.25rem;

  &__title {
    @include font-roboto-slab-bold-x-large;
    text-align: center;
    margin-bottom: 1rem;

    @include tablet-portrait {
      text-align: left;
    }
  }

  &__container {
    display: grid;
    gap: 2rem;
  }
}
</style>
