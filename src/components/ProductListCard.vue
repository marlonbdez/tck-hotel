<template>
  <div class="product-list-card">
    <div class="product-list-card__image">
      <img :src="item.image_url" :alt="item.name">
    </div>
    <div class="product-list-card__content">
      <div class="product-list-card__body">
        <h3 class="product-list-card__title">{{ item.name }}</h3>
        <p class="product-list-card__description">{{ item.description }}</p>
      </div>
      <p class="product-list-card__footer">Ideal para combinar con: {{ foodPairing }}</p>
    </div>
    <div class="product-list-card__info" :class="classObject">{{ item.abv }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductListCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    foodPairing () {
      const items = this.item.food_pairing.slice()
      const lastItem = items.shift()
      return `${items.join(', ')} y ${lastItem}`
    },
    classObject () {
      return {
        'product-list-card__info--normal': this.item.abv <= 5,
        'product-list-card__info--warning': this.item.abv > 5 && this.item.abv <= 10,
        'product-list-card__info--alert': this.item.abv > 10
      }
    }
  }
}
</script>

<style scoped lang="scss">
.product-list-card {
  position: relative;
  background: $color-white;
  border: .0625rem solid $color-extra-2;
  border-radius: .125rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  &__image {
    width: 100%;
    text-align: center;

    @include tablet-portrait {
      flex-basis: 13rem;
    }

    img {
      max-height: 9.5625rem;
    }
  }

  &__content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
    text-align: left;

    @include tablet-landscape {
      margin-top: 0;
      max-width: 65%;
    }
  }

  &__title {
    @include font-roboto-slab-bold-large;
  }

  &__description {
    @include font-roboto-regular-x-small;
  }

  &__footer {
    @include font-roboto-bold-x-small;
    margin-top: 0.5rem;
  }

  &__info {
    @include font-roboto-slab-bold-large;
    position: absolute;
    right: 0;
    text-align: center;
    min-width: 5.375rem;
    padding: .25rem 0;

    &--normal {
      background-color: $color-info;
    }

    &--warning {
      background-color: $color-warning;
    }

    &--alert {
      background-color: $color-alert;
    }
  }
}
</style>
