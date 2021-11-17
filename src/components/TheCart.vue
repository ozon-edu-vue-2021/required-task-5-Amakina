<template>
  <div class="cart">
    <div v-if="cart.length" class="cart__products-list">
      <div>
        <VProduct
          v-for="item in cart"
          :key="`product-${item.product.id}`"
          :product="item.product"
          :horizontal="true"
        />
      </div>
      <div class="cart__confirmation">
        <div>
          <button class="cart__confirmation-button" @click="confirmOrder">
            Confirm order
          </button>
        </div>
        <div class="cart__confirmation-total">
          Total: ${{ total.toFixed(2) }}
        </div>
      </div>
    </div>
    <div v-else>No items in the cart</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { moduleName, getterTypes } from "../store/modules/cart";
import VProduct from "./product/VProduct.vue";

export default {
  name: "TheCart",
  components: {
    VProduct,
  },
  computed: {
    ...mapGetters(moduleName, {
      cart: getterTypes.GETTER_CART,
      total: getterTypes.GETTER_TOTAL,
    }),
  },
  methods: {
    confirmOrder() {
      alert(
        this.cart
          .map((item) => `${item.product.dish} x${item.quantity}`)
          .join(", ")
      );
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: center;
  padding: 5em 0;
}

.cart__products-list {
  display: flex;
}

.cart__confirmation {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
}

.cart__confirmation-button {
  border: none;
  padding: 0.5em;
  margin: 0 0 1em 0;

  font-size: 1.5em;

  background: #654e9b;
  color: #fff;
}

.cart__confirmation-total {
  font-size: 1.5em;
}
</style>
