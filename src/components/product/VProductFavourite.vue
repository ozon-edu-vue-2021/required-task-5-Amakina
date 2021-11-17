<template>
  <button class="product__favourite" @click="toggleFavourite">
    <span v-if="isFavourite">❤️</span>
    <span v-else>🤍</span>
  </button>
</template>

<script>
import { moduleName, mutationTypes } from "../../store/modules/products";

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isFavourite: false,
    };
  },
  created() {
    this.isFavourite = this.product.favourite;
  },
  methods: {
    toggleFavourite() {
      this.isFavourite = !this.isFavourite;
      this.$store.commit(
        `${moduleName}/${mutationTypes.MUTATION_TOGGLE_FAVOURITE}`,
        this.product
      );
    },
  },
};
</script>

<style scoped>
.product__favourite {
  position: absolute;
  top: 0;

  width: 1em;
  height: 1em;
  cursor: pointer;

  font-size: 1em;

  background: transparent;
  border: none;
}
</style>
