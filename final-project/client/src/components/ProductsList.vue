<template>
  <section>
    <h2>Products</h2>
  <div class="products-list">
    <product-card v-for="product in products" v-bind:product="product" v-bind:key="product.productId" v-bind:enable-add="true" />
  </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
    name: "products-list",
    components: {
        ProductCard
    }
}
</script>

<style>

</style>