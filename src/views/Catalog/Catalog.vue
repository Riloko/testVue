<template>
  <div class="catalog"> 
    <Header />
    <div class="catalog__filters">
      
    </div>
    <div v-if="products[0]" class="catalog__body">
      <CatalogCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
    <div v-else class="catalog__body">
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
    }
  },
  mounted () {
    this.$store.dispatch('getProducts');
  }
}
</script>
