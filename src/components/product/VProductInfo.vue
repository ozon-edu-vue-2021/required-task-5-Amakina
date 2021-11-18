<template>
  <div class="product__info">
    <div class="product__info-name">{{ dish }}</div>
    <div class="product__info-price">${{ price.toFixed(2) }}</div>
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
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
