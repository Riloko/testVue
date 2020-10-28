<template>
  <div class="catalog"> 
    <Header />
    <div class="catalog__filters">
      <button class="catalog__filters--btn" v-on:click="clearFilters">Очистить фильтры</button>
      <button class="catalog__filters--btn" v-on:click="filterPriceUp">Фильтр по цене (По убыванию)</button>
      <button class="catalog__filters--btn" v-on:click="filterPriceDown">Фильтр по цене (По возрастанию)</button>
      <input class="catalog__filters--inpt" type="text" v-model="searchString" v-on:change="searchItems" placeholder="Что ищем?">
    </div>
    <div v-if="products[0] && !loading" class="catalog__body">
      <CatalogCard v-for="product in products" :key="product.id" :product="product"/>
    </div>    
    <div v-else-if="!products[0] && !loading" class="catalog__body">
      Каталог пуст, обновите страницу
    </div>
    <div class="catalog__body--loading" v-else-if="loading"></div>
  </div>
</template>

<script>
import './assets/catalog.sass';
import CatalogCard from '@/components/catalogCard/catalogCard';
import Header from '@/components/header/header';

export default {
  name: 'Catalog',
  components: {
    CatalogCard,
    Header
  },
  data: function () {
    let searchString = '';
    return {searchString}
  },
  methods: {
    filterPriceUp: function () {
      this.$store.dispatch('getProductsPriceFilteredUp');      
    },
    filterPriceDown: function () {
      this.$store.dispatch('getProductsPriceFilteredDown');      
    },
    clearFilters: function () {
      this.$store.dispatch('getProducts');      
    },
    searchItems: function () {
      this.searchString ? this.$store.dispatch('getProductsSearched', this.searchString) : this.$store.dispatch('getProducts');
    }
  },
  computed: {
    products () {
      return this.$store.state.catalog.catalogItems;
    },
    loading () {
      return this.$store.state.catalog.loading;
    }
  },
  mounted () {
    this.$store.dispatch('getProducts');
  }
}
</script>
