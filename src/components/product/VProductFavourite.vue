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
    isFavourite: {
      type: Boolean,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleFavourite() {
      this.$store.commit(
        `${moduleName}/${mutationTypes.MUTATION_TOGGLE_FAVOURITE}`,
        this.productId
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
