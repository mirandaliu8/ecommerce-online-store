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
import ProductService from "../services/ProductService";

export default {
    name: "products-list",
    components: {
        ProductCard
    },
    data() {
        return {
            products: []
        }
    },
    created() {
        ProductService.list().then((response) => {
            this.products = response.data;
        });
    },
    methods: {
        loadProducts() {
            ProductService.list().then((response) => {
                this.products = response.data;
            });
        }
    }
}
</script>

<style>

</style>