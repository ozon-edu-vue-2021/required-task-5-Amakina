<template>
  <div class="product__info">
    <div class="product__info-name">{{ product.dish }}</div>
    <div class="product__info-price">${{ product.price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.product__info {
  display: flex;
  justify-content: space-between;

  margin: 0.25em;
}

.product__info-name {
  font-weight: 700;
}

.product_horizontal .product__info-price,
.product_horizontal .product__info-name {
  padding: 0.5em;
}
</style>
