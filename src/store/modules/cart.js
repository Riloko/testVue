const state = () => ({
    cartItems: [],
    cartFullPrice: 0,
    cartSale: 0,
    cartItemsCount: 0
})

const mutations = {
    SET_CART_ITEMS (state, products) {
        state.cartItems = products;
    },
    SET_CART_FULL_PRICE (state, summ) {
        state.cartFullPrice = summ;
    },
    SET_CART_ITEMS_COUNT (state, count) {
        state.cartItemsCount = count;
    },
    SET_CART_SALE (state, summ) {
        state.cartSale = summ;
    }
}

const actions = {
    reactiveRecount ({dispatch}) {
        dispatch('countFullPrice');
        dispatch('countCartItems');
        dispatch('countSale');
    },
    addProductToCart ({commit, dispatch, state}, newProduct) {
        const cartCards = state.cartItems;
        const sameProductIndex = cartCards.findIndex(({size, color, id}) => id === newProduct.id && size === newProduct.size && color === newProduct.color);
        if (sameProductIndex != -1) {
            const updatableProduct = cartCards[sameProductIndex];
            updatableProduct.count += newProduct.count;
            cartCards.splice(sameProductIndex, 1);           

            commit('SET_CART_ITEMS', [
                ...cartCards,
                updatableProduct
            ]);            
        } else {
            commit('SET_CART_ITEMS', [
                ...cartCards,
                newProduct
            ]);
        }
        
        dispatch('reactiveRecount');
    },
    removeProductFromCart ({commit, state, dispatch}, index) {     
        let newArr = state.cartItems;
        newArr.splice(index, 1);
        commit('SET_CART_ITEMS', newArr);
        dispatch('reactiveRecount');     
    },
    countFullPrice ({commit, state}) {
        let summ = 0;
        state.cartItems.map(cartProduct => summ += (cartProduct.price * cartProduct.count));
        commit('SET_CART_FULL_PRICE', summ);
    },
    countCartItems ({commit, state}) {
        let count = 0;
        state.cartItems.map(cartProduct => count += cartProduct.count);
        commit('SET_CART_ITEMS_COUNT', count);
    },
    countSale ({commit, state}) {
        let summ = 0;
        state.cartItems.map(cartProduct => {
            cartProduct.sale ? summ += cartProduct.count * (cartProduct.price - Math.ceil(cartProduct.price * 0.85)) : summ;
        });
        commit('SET_CART_SALE', summ);        
    }
}



export default {
    state,
    mutations,
    actions
}