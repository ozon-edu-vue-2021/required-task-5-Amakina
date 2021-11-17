<template>
  <div class="product" :class="{ product_horizontal: horizontal }">
    <VProductImage :product="product" />
    <VProductFavourite :product="product" />
    <VProductInfo :product="product" />
    <VProductControls :product="product" />
  </div>
</template>

<script>
import VProductFavourite from "./VProductFavourite.vue";
import VProductInfo from "./VProductInfo.vue";
import VProductControls from "./VProductControls.vue";
import VProductImage from "./VProductImage.vue";

export default {
  name: "VProduct",
  props: {
    product: {
      type: Object,
      required: true,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VProductFavourite,
    VProductInfo,
    VProductControls,
    VProductImage,
  },
};
</script>

<style scoped>
.product {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 1.5em;
  border: 1px solid;
}

.product_horizontal {
  flex-direction: row;
  align-items: center;

  margin: 0 0 1em 0;
}
</style>
