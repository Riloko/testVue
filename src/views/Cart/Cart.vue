<template>
  <div class="cart">
    <Header />
    <div v-if="cards[0]" class="cart-body">
      <div class="cart-body-cardswrapper">
        <CartCard v-for="(card, index) in cards" :key="index" :product="card" :onItemRemove="() => removeProductFromCart(index)"/>
      </div>
      <div class="cart-body-usercontrols">
        Сумма: {{ cartFullPrice }} р
        <div>
          В том числе скидка: {{ cartSale }} р  
        </div> 
        <div class="cart-body-usercontrols-sendbutton">
          <button v-on:click="createAnOrder" class="cart-body-usercontrols-sendbutton--btn">Оформить заказ</button>
        </div>      
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
      return this.$store.state.cart.cartFullPrice;
    },
    cartSale () {
      return this.$store.state.cart.cartSale;
    }
  },
  methods: {
    removeProductFromCart (index) {
      this.$store.dispatch('removeProductFromCart', index); 
    },
    createAnOrder () {
      const sendData = this.$store.state.cart.cartItems;
      const URL = 'http://localhost:1337/create_order'
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:8080'       
        },
        body: JSON.stringify(sendData)
      };

      fetch(URL, options)
        .then(res => res.json())
        .then(body => console.log(body))
        .catch(err => console.log(err))


    }
  }
}
</script>
