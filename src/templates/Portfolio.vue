<template>
  <Layout>
    <h2 class="text-3xl font-medium text-center mb-2" v-text="$page.project.title"></h2>
    <div class="flex justify-center items-center text-sm italic mb-2">
      <span>
          Started - <span v-text="$page.project.start"></span>
      </span>
      <span class="mx-3 w-1 h-1 rounded-full bg-gray-600"></span>
      <span>
          Ended - <span v-text="$page.project.end"></span>
      </span>
    </div>
    <hr class="my-8 border-t border-gray-500 w-5/6">
    <article class="md-content" v-html="$page.project.content">
    </article>
  </Layout>
</template>

<page-query>
query blogPost ($id: String!) {
  project: portfolio (id: $id) {
    id
    title
    excerpt
    start(format: "D MMM, YYYY")
    end(format: "D MMM, YYYY")
    content
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue';
export default {
  components: {
    Layout,
  },
  metaInfo () {
    return {
      title: this.$page.project.title
    }
  }
}
</script>
<style lang="postcss">
  .md-content p {
    @apply mb-4;
  }
  .md-content h2 {
    @apply font-medium mb-4;
  }
  .md-content h3,
  .md-content h4,
  .md-content h5 {
    @apply font-semibold mb-3;
  }
  .md-content h6 {
    @apply font-medium mb-2;
  }

  .md-content h2,
  .md-content h1 {
    @apply text-3xl;
  }

  .md-content h3 {
    @apply text-2xl;
  }
  .md-content h4 {
    @apply text-xl;
  }
  .md-content h5,
  .md-content h6 {
    @apply text-lg;
  }
  .md-content pre {
    @apply mb-6 rounded-lg;
  }
  .md-content p img {
    @apply block mx-auto rounded shadow-2xl;
  }
  .md-content blockquote {
    @apply bg-gray-300 border-l-4 py-2 pr-2 pl-4 border-teal-600 rounded overflow-hidden mb-6;
  }
  .md-content blockquote > p {
    @apply mb-0;
  }
  .md-content blockquote > h3,
  .md-content blockquote > h4,
  .md-content blockquote > h5,
  .md-content blockquote > h6 {
    @apply text-lg mb-2;
  }
</style>
