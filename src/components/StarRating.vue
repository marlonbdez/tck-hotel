<template>
  <span class="star-rating" role="img" :aria-label="ariaLabel">
    <span v-for="(item, i) in rating" :key="i" class="star-rating__star"></span>
  </span>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    ariaLabel () {
      return `${this.rating} estrellas`
    }
  }
}
</script>

<style scoped lang="scss">
.star-rating {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3125rem;
  height: 1.5rem;

  &__star {
    background: url(@/assets/images/icon-star@x2.png) repeat-x transparent;
    background-size: .75rem auto;
    display: block;
    width: .75rem;
    height: .75rem;
  }
}
</style>
