<template>
  <div class="cart">
      <h1>Shopping Cart</h1>
      <shopping-cart />
  </div>
</template>

<script>
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
    name: 'cart',
    components: {
        ShoppingCart
    }
}
</script>

<style>

</style>