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
  background: #FFFFFF;
  border: 1px solid #C9E3F9;
  border-radius: 2px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

  &__image {
    flex-basis: 250px;
    img {
      max-height: 153px;
    }
  }

  &__content {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #033970;
    text-align: left;
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }

  &__footer {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #3B95ED;
    text-align: left;
  }

  &__info {
    position: absolute;
    right: 0;

    &--normal {
      background-color: #FFEF63;
    }

    &--warning {
      background-color: #FFAB48;
    }

    &--alert {
      background-color: #DB171D;
    }
  }
}
</style>
