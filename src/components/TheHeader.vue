<template>
  <header class="header">
    <RouterLink
      class="header__link"
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
    >
      {{ route.name }}
    </RouterLink>
  </header>
</template>

<script>
import routes from "../helpers/routes";

export default {
  name: "TheHeader",
  computed: {
    routes() {
      return routes;
    },
  },
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
