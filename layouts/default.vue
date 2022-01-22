<template>
  <div id="app">
    <a class="fixed-cart js-cart-icon" href="/basket"></a>

    <Header />

    <main>
      <Nuxt />
    </main>

    <footer></footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  name: 'DefaultLayout',
  components: { Header },
}
</script>
