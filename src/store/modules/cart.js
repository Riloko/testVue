const state = () => ({
    cartItems: [],
    cartFullPrice: 0
})

const getters = {
    CARTFULLPRICE: state => {
        return state.cartFullPrice;
    }
}

const mutations = {
    SET_CART_ITEMS (state, products) {
        state.cartItems = products;
    },
    SET_CART_FULL_PRICE (state, summ) {
        state.cartFullPrice = summ;
    }
}

const actions = {
    addProductToCart ({commit, dispatch}, product) {
        console.log(product)
        commit('SET_CART_ITEMS', product);
        dispatch('countFullPrice');
    },
    removeProductFromCart ({commit, state, dispatch}, index) {     
        let newArr = state.cartItems;
        newArr.splice(index, 1);
        commit('SET_CART_ITEMS', newArr);
        dispatch('countFullPrice');        
    },
    countFullPrice ({commit, state}) {
        let summ = 0;
        state.cartItems.map(cartProduct => summ += (cartProduct.price * cartProduct.count));
        commit('SET_CART_FULL_PRICE', summ);
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}