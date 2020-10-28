<template>
  <div class="catalog"> 
    <Header />
    <div class="catalog__filters">
      
    </div>
    <div v-if="products[0] && !loading" class="catalog__body">
      <CatalogCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
    <div class="catalog__body--loading" v-else-if="loading"></div>
    <div v-else-if="!products[0] && !loading" class="catalog__body">
      Каталог пуст, обновите страницу
    </div> 
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
