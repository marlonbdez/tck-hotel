<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__link"  exact-active-class="nav__link--active" to="/">Tab 1</router-link>
      <router-link class="nav__link"  exact-active-class="nav__link--active" to="products">Tab 3</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  background-color: $color-white;
  filter: drop-shadow(0 .0625rem .125rem $color-extra-8);

  @include tablet-portrait {
    justify-content: flex-end;
  }
}

.nav {
  position: relative;

  &__link {
    @include font-roboto-slab-regular;
    display: inline-block;
    text-decoration: none;
    color: $color-primary-light;
    padding: .8125rem 2.5rem;

    &:hover,
    &:focus {
      color: $color-primary-main;
    }

    &:active,
    &--active {
      color: $color-primary-main;
      border-bottom: .0625rem solid $color-primary-main;
    }
  }
}
</style>
