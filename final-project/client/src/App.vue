<template>
  <div id="app">
    <header>
      <img src="https://via.placeholder.com/500x100.jpg" alt="logo" class="logo">
    <nav>
      <router-link v-bind:to="{ name: 'products' }" class="nav-left">Home</router-link>
      <router-link v-bind:to="{ name: 'cart' }" class="nav-left">Cart</router-link>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token" class="nav-right">Logout</router-link>
      <router-link v-bind:to="{ name: 'login' }" v-else class="nav-right">Login</router-link>
    </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2023 All Rights Reserved</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #DAF7D9;
}

header > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 10px 0;
}

nav {
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 0;
  display: flex;
  justify-content: flex-start;
}


.nav-right {
    margin-left: auto;
}

main {
    margin-top: 200px;
    margin-bottom: 90px;
  }

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #DAF7D9;
  border-top: 1px solid black;
}

footer > p {
    margin-left: 1rem;
}
</style>