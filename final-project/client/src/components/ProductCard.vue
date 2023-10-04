<template>
  <section id="container">
      <article class="product-card">
          <div class="sku">{{ product.productSku }}</div>
          <div class="price"></div>
          <div class="product-name"></div>
          <div class="product-image"></div>
          <div class="cart"></div>
      </article>
  </section>
</template>

<script>
export default {
    name: "product-card",
    props: ["product"]
}
</script>

<style>

</style>