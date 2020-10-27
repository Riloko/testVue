<template>
  <div class="catalog"> 
      <Header />
    <div class="catalog__body">
      <CatalogCard v-for="product in products" :key="product.id" :product="product"/>
    </div>   
  </div>
</template>

<script>
import './assets/catalog.sass';
import products from '@/products.json';
import CatalogCard from '@/components/catalogCard/catalogCard';
import Header from '@/components/header/header';

export default {
  name: 'Catalog',
  components: {
    CatalogCard,
    Header
  },
  data: () => {
    return {
      products
    }
  }
}
</script>
