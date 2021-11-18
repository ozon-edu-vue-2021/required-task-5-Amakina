<template>
  <div class="product__controls">
    <div class="product__controls-quantity">
      <button class="product__quantity-button" @click="decrease">-</button>
      <input class="product__input" type="number" min="0" v-model="quantity" />
      <button class="product__quantity-button" @click="increase">+</button>
    </div>
    <div>
      <button
        v-if="!isInCart"
        class="product__button"
        @click="addToCart"
        :disabled="isAddButtonDisabled"
      >
        Add to cart
      </button>
      <button v-else class="product__button" @click="removeFromCart">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  moduleName,
  mutationTypes,
  getterTypes,
} from "../../store/modules/cart";

export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    ...mapGetters(moduleName, {
      cart: getterTypes.GETTER_CART,
    }),
    cartItem() {
      return this.cart.find((item) => item.product.id === this.product.id);
    },
    isInCart() {
      return Boolean(this.cartItem);
    },
    computedQuantity() {
      return (this.cartItem && this.cartItem.quantity) || 0;
    },
    isAddButtonDisabled() {
      return this.quantity === 0;
    },
  },
  created() {
    this.quantity = this.computedQuantity;
  },
  watch: {
    quantity() {
      this.$store.commit(
        `${moduleName}/${mutationTypes.MUTATION_CHANGE_QUANTITY}`,
        { id: this.product.id, quantity: this.quantity }
      );
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(
        `${moduleName}/${mutationTypes.MUTATION_ADD_TO_CART}`,
        { product: this.product, quantity: this.quantity }
      );
    },
    removeFromCart() {
      this.$store.commit(
        `${moduleName}/${mutationTypes.MUTATION_REMOVE_FROM_CART}`,
        this.product.id
      );
    },
    decrease() {
      if (this.quantity === 0) return;

      this.quantity--;
    },
    increase() {
      this.quantity++;
    },
  },
};
</script>

<style scoped>
.product__controls {
  display: flex;
  justify-content: flex-end;

  margin: 1em 0 0 0;
}

.product__input {
  width: 2em;
  margin-left: 0.5em;

  font-size: 1em;
  text-align: center;

  border: none;

  background: transparent;
}

.product__controls-quantity {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  border-top: 1px solid;
}

.product__quantity-button {
  font-size: 1em;
  width: 1.5em;
  height: 1.5em;

  border-radius: 50%;
  background: #d7d7d7;
  border: none;
}

.product__button {
  width: 6em;
  height: 2em;

  border: none;
  padding: 0.5em;

  font-size: 1em;

  background: #654e9b;
  color: #fff;

  cursor: pointer;
}

.product_horizontal .product__controls {
  margin: 0;
}

.product_horizontal .product__controls-quantity {
  border: none;
  margin: 0 0.5em 0 0;
}
</style>
