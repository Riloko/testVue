<template>
  <header class="header">
      <div class="header-logo"></div>
      <div class="header-brandname">
        <span class="header-brandname--vue">VUE</span>
        market
      </div>
      <nav class="header-nav">
        <router-link v-for="(link, index) in links" :key="index" :class="['header-nav--link', {'active' : currentPath == link.path} ]" :to="link.path">
            {{link.name}}
            <div v-if="index === 1 && catalogItemsCount > 0" class="header-nav--link-cartcount">
                {{catalogItemsCount}}
            </div>
        </router-link>
      </nav>      
    </header>
</template>

<script>
import './assets/header.sass';

export default {
    name: 'Header',
    computed: {
        catalogItemsCount() {
            return this.$store.state.cart.cartItemsCount;
        }
    },
    data: function () {
        const currentPath = this.$router.history.current.path;
        let links = [
            {
                name: 'Catalog',
                path: '/'
            },
            {
                name: 'Cart',
                path: '/cart'
            }
        ]
        return {
            links,
            currentPath
        }
    }
}
</script>
