<template>
  <div class="min-h-screen font-sans bg-teal-100 text-gray-900">
    <header class="py-4 flex justify-between items-center px-8">
      <g-link to="/" class="text-xl text-green-500">
        <svg-logo class="h-12"></svg-logo>
      </g-link>
      <nav class="flex items-center -mx-2">
        <g-link class="mx-2 underline-blue-500 hover:underline" to="/">Home</g-link>
        <g-link class="mx-2 underline-blue-500 hover:underline" to="/about">About</g-link>
      </nav>
    </header>
    <main class="px-8 py-3 mx-auto lg:w-1/2">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import SvgLogo from '../components/SVGLogo.vue';

export default {
  components: {SvgLogo}  
}
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');
html, body {
  font-size: calc(14px + .5vw)
}
@tailwind base;
h1, h2, h3, h4 {
  @apply font-bold;
}
h5, h6 {
  @apply font-semibold;
}
h1 {
  @apply text-3xl
}
@tailwind components;
.logo .cube, .logo .shadow {
  transition: transform .3s linear;
  transform-origin: center;
}
.logo:hover {
  .cube {
    transform: translateY(-.5rem);
  }
  .shadow {
    transform: translateY(.5rem) scale(0.8);
  }
}
@tailwind utilities;
</style>
