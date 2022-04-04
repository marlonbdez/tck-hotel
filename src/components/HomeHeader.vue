<template>
  <div class="home-header">
    <h1 class="home-header__title">HOTEL <strong>Mieres del Camín Apartamentos</strong></h1>
    <StarRating :rating="4" />
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'HomeView',
  components: {
    StarRating
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.375rem 0;

  @include desktop {
    flex-direction: row;
  }

  &__title {
    @include font-roboto-slab-regular-x-large;
    text-align: center;

    & strong {
      display: block;

      @include desktop {
       display: inline-block;
       margin-right: 1.5rem;
      }
    }
  }
}
</style>
