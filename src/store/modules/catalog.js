const state = () => ({
    catalogItems: [],
    loading: false
})

const mutations = {
    SET_CATALOG_ITEMS (state, products) {
        state.catalogItems = products;
    },
    SET_LOADING (state, newState) {
        state.loading = newState;
    }
}

const actions = {
    getProducts ({commit, dispatch}) {
        const URL = 'http://localhost:1337/get_products'
        const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Origin': 'http://localhost:8080'       
        },
        
      };
      dispatch('onLoading');
      fetch(URL, options)
        .then(res => res.json())
        .then(body => commit('SET_CATALOG_ITEMS', body.products), dispatch('onLoaded'))
        .catch(err => console.log(err), dispatch('onLoaded'))
    },
    onLoading ({commit}) {
        commit('SET_LOADING', true);
    },
    onLoaded ({commit}) {
        commit('SET_LOADING', false);
    }
}



export default {
    state,
    mutations,
    actions
}