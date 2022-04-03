<template>
  <div class="home">
    <h1 class="home__title">HOTEL<StarRating :rating="4" /> <strong>Mieres del Camín Apartamentos</strong> </h1>
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
  &__title {
    @include font-roboto-slab-regular-x-large;
    text-align: center;

    & strong {
      display: block;
    }
  }

  &__cards {
    display: grid;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    margin-top: 2.5rem;

    @include tablet-portrait {
      grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    }

    @include desktop {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

}
</style>
