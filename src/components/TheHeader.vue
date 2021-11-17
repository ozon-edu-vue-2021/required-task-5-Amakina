<template>
  <header class="header">
    <RouterLink class="header__link" to="/">Products</RouterLink>
    <RouterLink class="header__link" to="/cart">Cart</RouterLink>
    <RouterLink class="header__link" to="/faves">Favourites</RouterLink>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  padding: 1em;

  background: #505050;

  text-align: center;
}

.header__link {
  font-size: 1.5em;
  margin: 0 0.5em;
  color: #fff;
  text-decoration: none;
}

.header__link:hover {
  color: #dc0a6b;
}
</style>
