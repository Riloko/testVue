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
    fetchProducts ({commit, dispatch}, {url, searchString = null}) {
        console.log(searchString)
        const URL = `http://localhost:1337/${url}`
        const options = {
        method: searchString ? 'POST' : 'GET',
        mode: 'cors',
        headers: !searchString ? {'Origin': 'http://localhost:8080'} : {'Origin': 'http://localhost:8080', 'Content-Type': 'application/json; charset=utf-8'},
        body: searchString ? JSON.stringify({"searchString": searchString}) : null
      };
      console.log(options)
      dispatch('onLoading');
      fetch(URL, options)
        .then(res => res.json())
        .then(body => {
            dispatch('onLoaded');
            commit('SET_CATALOG_ITEMS', body.products); 
        })
        .catch(err => {
            dispatch('onLoaded');
            console.log(err);
        })
    },
    getProducts ({dispatch}) {
        dispatch('fetchProducts', {url: 'get_products'});
    },
    getProductsPriceFilteredUp ({dispatch}) {
        dispatch('fetchProducts', {url: 'get_products/filter/price_up'});
    },
    getProductsPriceFilteredDown ({dispatch}) {
        dispatch('fetchProducts', {url: 'get_products/filter/price_down'});
    },
    getProductsSearched ({dispatch}, payload) {
        console.log(payload)
        dispatch('fetchProducts', {url: 'get_products/filter/search', searchString: payload});
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