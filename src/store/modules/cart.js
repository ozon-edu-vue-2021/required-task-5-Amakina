export const moduleName = "cart";
export const actionTypes = {};
export const mutationTypes = {
  MUTATION_ADD_TO_CART: "MUTATION_ADD_TO_CART",
  MUTATION_REMOVE_FROM_CART: "MUTATION_REMOVE_FROM_CART",
  MUTATION_CHANGE_QUANTITY: "MUTATION_CHANGE_QUANTITY",
};
export const getterTypes = {
  GETTER_CART: "GETTER_CART",
  GETTER_TOTAL: "GETTER_TOTAL",
};

const state = () => ({
  cart: [],
});

const actions = {};

const mutations = {
  [mutationTypes.MUTATION_ADD_TO_CART](state, { product, quantity }) {
    state.cart.push({ product, quantity });
  },
  [mutationTypes.MUTATION_REMOVE_FROM_CART](state, id) {
    state.cart = state.cart.filter((cartItem) => cartItem.product.id !== id);
  },
  [mutationTypes.MUTATION_CHANGE_QUANTITY](state, { id, quantity }) {
    if (quantity === 0) {
      state.cart = state.cart.filter((cartItem) => cartItem.product.id !== id);
      return;
    }

    const item = state.cart.find((cartItem) => cartItem.product.id === id);

    if (!item) return;

    item.quantity = quantity;
  },
};

const getters = {
  [getterTypes.GETTER_CART]: (state) => state.cart,
  [getterTypes.GETTER_TOTAL]: (state) =>
    state.cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    ),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
