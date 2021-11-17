<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import { moduleName, actionTypes } from "./store/modules/products";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  async created() {
    await this.$store.dispatch(
      `${moduleName}/${actionTypes.ACTION_FETCH_PRODUCTS}`
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
