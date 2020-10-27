<template>
  <div class="cart">
    <Header />
    <div v-if="cards[0]" class="cart-body">
      <div class="cart-body-cardswrapper">
        <CartCard v-for="(card, index) in cards" :key="index" :product="card" :onItemRemove="() => removeProductFromCart(index)"/>
      </div>
      <div class="cart-body-usercontrols">
        Сумма: {{ cartFullPrice }} р
        Оформить заказ
      </div>
    </div>
    <div v-else class="cart-body">
      <div class="cart-body--empty">
        Корзина пуста, перейдите на старницу каталога и выберите что-то интересное ;)
      </div>
    </div>
  </div>
</template>

<script>
import './assets/cart.sass';
import Header from '@/components/header/header';
import CartCard from '@/components/cartCard/cartCard';

export default {
  name: "Cart",
  components: {
    Header,
    CartCard
  },
  computed: {
    cards () {
      return this.$store.state.cart.cartItems;
    },
    cartFullPrice () {
      return this.$store.getters.CARTFULLPRICE;
    }
  },
  methods: {
    removeProductFromCart (index) {
      this.$store.dispatch('removeProductFromCart', index); 
    }
  }
}
</script>
