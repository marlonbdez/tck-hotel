<template>
  <div id="app">
    <div class="container">
      <TheHeader />
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
#app {
  @include font-roboto-regular;
}
</style>
