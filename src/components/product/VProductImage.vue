<template>
  <img class="product__image" :src="require(`../../assets/images/${image}`)" />
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.product__image {
  width: 100%;
  height: 300px;
}

.product_horizontal .product__image {
  width: 150px;
  height: 150px;
}
</style>
