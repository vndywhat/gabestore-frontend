<template>
  <div>
    <a class='fixed-cart js-cart-icon ' href='/basket'></a>
    <Header />
    <main>
      <div class='b-content__layout'>
        <div class='b-content__container'>
          <slot></slot>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'AppLayout',
  components: { Footer, Header },
}
</script>
