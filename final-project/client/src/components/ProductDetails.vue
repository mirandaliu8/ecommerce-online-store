<template>
  <div>
    <section v-for="product in getProduct" v-bind:key="product.productId">
        <h2>{{ product.name }}</h2>
    </section>
  </div>
</template>

<script>
export default {
    name: "product-details",
    computed: {
        getProduct() {
            let product = this.$store.state.products.filter((p) => {
                return p.productId === this.$route.params.productId;
            });
            return product;
        },
    },
    methods: {
        formatPrice(price) {
            price = Intl.NumberFormat(`en-US`, {
                currency: `USD`,
                style: "currency",
            }).format(price);
            return price;
        },
    },
};
</script>

<style>

</style>