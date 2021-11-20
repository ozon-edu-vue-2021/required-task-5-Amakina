import images from "../../helpers/images";
export const moduleName = "products";
export const actionTypes = {
  ACTION_FETCH_PRODUCTS: "ACTION_FETCH_PRODUCTS",
};
export const mutationTypes = {
  MUTATION_SET_PRODUCTS: "MUTATION_SET_PRODUCTS",
  MUTATION_TOGGLE_FAVOURITE: "MUTATION_TOGGLE_FAVOURITE",
};
export const getterTypes = {
  GETTER_PRODUCTS: "GETTER_PRODUCTS",
  GETTER_FAVOURITES: "GETTER_FAVOURITES",
};

const state = () => ({
  products: [],
});

const actions = {
  async [actionTypes.ACTION_FETCH_PRODUCTS]({ commit }) {
    const response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    const products = await response.json();
    commit(mutationTypes.MUTATION_SET_PRODUCTS, products);
  },
};

const mutations = {
  [mutationTypes.MUTATION_SET_PRODUCTS](state, products) {
    state.products = products.map((product) => ({
      ...product,
      price: Math.random() * 10,
      image: images[Math.floor(Math.random() * images.length)],
      favourite: false,
    }));
  },
  [mutationTypes.MUTATION_TOGGLE_FAVOURITE](state, id) {
    state.products = state.products.map((product) => {
      if (product.id === id) {
        product.favourite = !product.favourite;
      }
      return product;
    });
  },
};

const getters = {
  [getterTypes.GETTER_PRODUCTS]: (state) => state.products,
  [getterTypes.GETTER_FAVOURITES]: (state) =>
    state.products.filter((product) => product.favourite),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
