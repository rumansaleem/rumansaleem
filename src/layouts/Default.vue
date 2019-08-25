<template>
  <div id="app" class="min-h-screen flex flex-col font-sans text-gray-900 leading-tight">
    <div class="py-2 sm:py-4 print:hidden">
      <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <g-link to="/" class="inline-flex items-center text-xl text-teal-500 mb-2 sm:mb-0">
          <svg-icon icon="ruman-saleem-logo" class="logo h-12 mr-2"></svg-icon>
          <span class="text-gray-900 whitespace-no-wrap">Ruman</span>
          <span class="text-teal-500 font-medium ml-1">Saleem</span>
        </g-link>
        <nav class="flex items-center -mx-2">
          <g-link class="nav-link" to="/work">Work</g-link>
          <g-link class="nav-link" to="/blog">Blog</g-link>
          <g-link class="nav-link" to="/resume">Resume</g-link>
        </nav>
      </div>
    </div>
    <div class="container mx-auto px-4 flex-1 h-full">
      <slot></slot>
    </div>
    <footer class="bg-white text-gray-500 text-xs mt-4 print:hidden">
        <p class="text-center py-2 px-8 flex justify-between">
          <span><b>Ruman Saleem</b> &copy; 2019</span> 
          <span>built with <a class="link text-gray-600 font-medium" href="https://gridsome.org">Gridsome</a>, hosted by GitHub Pages</span>
        </p>
    </footer>
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
import SvgIcon from './../components/SvgIcon';

export default {
  components: {SvgIcon},
  computed: {
    routeComponents() {
      return this.$route.path.split('/').map(url => url)
    },
    breadcrumb() {
      return this.routeComponents.reduce((prev, curr, i) => {
        const ele = curr == '' ? '/' : prev[i-1] + curr + '/';
        return [...prev, ele];
      }, [])
      .map(link => this.$router.resolve(link))
      .filter(item => item.route)
      .map(item => item.route);
    }
  },
  methods: {
    pathName(route) {
      let name = route.name;
      
      if (!name) {
        name = route.path.replace(/^\/|\/$/g, '');
      }

      return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    }
  }
}
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap');

html, body {
  font-size: calc(13px + 0.25vw);
}

.smaller {
  font-size: calc(11px + 0.25vw);
}

@tailwind base;

h1, h2, h3, h4 {
  @apply font-medium;
}

@page {
  size: A4 portrait;
  margin: 1cm;
  font-size: 11pt;
  margin-right: .5cm;
}

details summary::-webkit-details-marker {
  display:none;
}

@tailwind components;

.narrow-container {
  max-width: 768px;
}

.nav-link {
  @apply mx-2 py-1 px-1 font-medium uppercase text-sm tracking-wide relative leading-snug;
}
.nav-link::after {
  content: '';
  height: 1.5px;
  @apply absolute w-full left-0 bottom-0 bg-gray-900;
  transform-origin: left;
  transform: translateX(50%) scaleX(0);
  transition: transform .2s linear, background-color .2s linear;
}
.nav-link:hover::after {
  transform: translateX(0) scaleX(1);
  @apply bg-teal-500;
}
.nav-link:hover {
  @apply text-teal-600;
}

.ruman-saleem-logo_svg__cube, .ruman-saleem-logo_svg__shadow {
  transition: transform .3s linear;
  transform-origin: center;
}
@screen sm {
  .logo:hover {
    .ruman-saleem-logo_svg__cube {
      transform: translateY(-.5rem);
    }
    .ruman-saleem-logo_svg__shadow {
      transform: translateY(.5rem) scale(0.8);
    }
  }
}

.link {
  @apply text-teal-500;
}
.link:hover {
  @apply underline;
}

@tailwind utilities;

@media print {
  .print\:hidden {
    display: none;
  }

  #app {
    display: block;
  }
}

</style>
