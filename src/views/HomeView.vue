<template>
  <div class="home">
    <div class="home__header">
      <h1 class="home__title">HOTEL <strong>Mieres del Camín Apartamentos</strong></h1>
      <StarRating :rating="4" />
    </div>
    <div class="home__cards">
      <CardInfo v-for="card in cards" :key="card.id" :option="card.id" :title="card.title" :services="card.services" v-model="selectedCard" />
    </div>
  </div>
</template>

<script>
import json from '@/assets/json/data.json'
import { mapGetters, mapActions } from 'vuex'
import CardInfo from '@/components/CardInfo.vue'
import StarRating from '@/components/StarRating.vue'

export default {
  name: 'HomeView',
  components: {
    CardInfo,
    StarRating
  },
  data: () => ({
    cards: json,
    selectedCard: null
  }),
  computed: {
    ...mapGetters(['getSelectedCard'])
  },
  watch: {
    selectedCard (value) {
      this.setSelectedCard(value)
    }
  },
  methods: {
    ...mapActions(['setSelectedCard']),
    setInitialData () {
      this.selectedCard = this.getSelectedCard
    }
  },
  mounted () {
    this.setInitialData()
  }
}
</script>

<style lang="scss" scoped>
.home {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include desktop {
      flex-direction: row;
    }
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

  &__cards {
    display: grid;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    margin-top: 2.5rem;

    @include tablet-portrait {
      grid-auto-rows: 1fr;
      grid-template-columns: repeat(auto-fit, minmax(12.5em, 1fr));
    }
  }

}
</style>
