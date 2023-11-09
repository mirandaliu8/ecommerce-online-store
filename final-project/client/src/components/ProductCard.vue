<template>
  <section id="container">
      <article class="product-card">
          <div class="sku">{{ product.productSku }}</div>
          <div class="price">{{ product.price }}</div>
          <div class="product-name">{{ product.name }}</div>
          <div class="product-image">
            <img v-bind:src="product.imageName" />
          </div>
          <div class="cart">
            <i class="fa-solid fa-cart-plus icon action" title="Add item to cart"></i>
          </div>
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