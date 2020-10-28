const state = () => ({
    catalogItems: []
})

const mutations = {
    SET_CATALOG_ITEMS (state, products) {
        state.catalogItems = products;
    }
}

const actions = {
    getProducts ({commit}) {
        const URL = 'http://localhost:1337/get_products'
        const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Origin': 'http://localhost:8080'       
        },
        
      };

      fetch(URL, options)
        .then(res => res.json())
        .then(body => commit('SET_CATALOG_ITEMS', body.products))
        .catch(err => console.log(err))
    }
}



export default {
    state,
    mutations,
    actions
}