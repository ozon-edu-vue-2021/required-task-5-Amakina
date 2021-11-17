import Router from "vue-router";
import TheProductsList from "../components/TheProductsList.vue";
import TheCart from "../components/TheCart.vue";
import TheFavourites from "../components/TheFavourites.vue";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: TheProductsList,
    },
    {
      path: "/cart",
      component: TheCart,
    },
    {
      path: "/faves",
      component: TheFavourites,
    },
  ],
});
