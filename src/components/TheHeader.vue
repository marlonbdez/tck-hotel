<template>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__link"  active-class="nav__link--active" exact-active-class="nav__link--active" to="/home">Tab 1</router-link>
      <router-link class="nav__link"  active-class="nav__link--active" exact-active-class="nav__link--active" to="/products">Tab 3</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
}

.nav {
  flex-wrap: wrap;
  padding: 30px;

  .__link {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
