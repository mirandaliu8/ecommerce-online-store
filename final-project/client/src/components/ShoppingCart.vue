<template>
  <div class="shopping-cart">
      <div class="empty-cart" v-show="$store.state.cart.items.length == 0">
          <h3>You Have No Items In Your Cart</h3>
          <p id="products-link" v-on:click="$router.push('/products')">Return to Products</p>
      </div>
      <div class="display-cart" v-show="$store.state.cart.items.length != 0">
          <h2>Shopping Cart</h2>
      </div>
      <!-- <div v-for="item in items" v-bind:key="item.userId" class="item">
          <router-link v-bind:to="{ name: 'cart', params: { id: user.userId } }">
              {{ item.product.productId }}
              {{ item.product.productSku }}
              {{ item.product.name }}
          </router-link>
      </div> -->
  </div>
</template>

<script>
import shoppingCartService from "../services/ShoppingCartService";

export default {
    name: 'shopping-cart',
    data() {
        return {
            prices: []
        }
    },
    methods: {
        getCart() {
            shoppingCartService.getCart().then((response) => {
                this.$store.commit('SET_CART_ITEMS', response.data);
            });
        }
    }
};
</script>

<style>

</style>