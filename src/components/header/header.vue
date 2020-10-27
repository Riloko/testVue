<template>
  <header class="header">
      <div class="header-logo"></div>
      <div class="header-brandname">
        <span class="header-brandname--vue">VUE</span>
        market
      </div>
      <nav class="header-nav">
        <router-link v-for="(link, index) in links" :key="index" :class="['header-nav--link', {'active' : currentPath == link.path} ]" :to="link.path">{{link.name}}</router-link>
      </nav>
      <div class="header-filters">
        
      </div>
    </header>
</template>

<script>
import './assets/header.sass';

export default {
    name: 'Header',
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
