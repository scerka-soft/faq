<template>
	<Header />
	<main class="container flex-shrink-0">
		<router-view />
	</main>
	<Footer />
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  letter-spacing: .5px;
}
html, body, #app {
	height: 100%!important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	}
}
</script>