<template>
  <Layout>
    <div v-if="about" class="narrow-container mx-auto flex flex-col items-center py-4 mb-8">
      <g-image class="h-64 mt-1 ml-3 mb-6 shadow-xl rounded-lg"
        :src="about.image.src" 
        :alt="`A portrait of ${about.name}`"></g-image>
      <h2 class="text-3xl font-sans font-bold mb-1" v-text="about.name"></h2>
      <h3 class="text-gray-600 uppercase font-sans font-semibold mb-6" v-text="about.title"></h3>
      <ul class="flex justify-center items-center -mx-2 mb-6 text-lg">
        <li v-for="link in about.links" :key="link.alt" class="mx-2">
          <a :href="link.target" :class="`text-gray-500 hover:text-${link.color}`" :title="link.alt">
            <feather-icon class="h-current" :name="link.icon"></feather-icon>
          </a>
        </li>
      </ul>
      <div class="px-4 about-md-content leading-normal" v-html="about.content">
      </div>
    </div>
  </Layout>
</template>
<page-query>
{
  allAbout(limit: 1){
    edges{
      node{
        name
        title
        image
        links {
          icon alt target color
        }
        content
      }
    }
  }
}
</page-query>
<script>
import FeatherIcon from './../components/FeatherIcon';
export default {
  metaInfo: {
    title: 'Home'
  },
  components: { FeatherIcon },
  computed: {
    about() {
      return this.$page.allAbout.edges[0].node;    
    }
  }
}
</script>

<style lang="postcss">
  .about-md-content p:not(:last-child) {
    @apply mb-4;
  }
  
  .about-md-content code {
    @apply whitespace-pre font-mono px-1 bg-gray-200;
  }

  .about-md-content a {
    @apply text-teal-500;
  }
  .about-md-content a:hover {
    @apply underline;
  }
</style>
