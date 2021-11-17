<template>
  <div class="products-list">
    <VProduct
      v-for="(product, index) in products"
      :key="`product-${product.id}-${index}`"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { moduleName, getterTypes } from "../store/modules/products";
import VProduct from "./product/VProduct.vue";

export default {
  name: "TheProductsList",
  components: {
    VProduct,
  },
  computed: {
    ...mapGetters(moduleName, {
      products: getterTypes.GETTER_PRODUCTS,
    }),
  },
};
</script>

<style scoped>
.products-list {
  max-width: 1000px;
  margin: 0 auto;
  padding: 5em 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3em;
  column-gap: 5em;
}
</style>
