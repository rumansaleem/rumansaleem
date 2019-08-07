<template>
  <Layout>
    <div class="narrow-container px-4 mx-auto">
      <h2 class="text-3xl font-medium text-center mb-2" v-text="$page.post.title"></h2>
      <div class="flex justify-center items-center text-sm italic mb-12">
        <span>
            Posted - <span v-text="$page.post.date"></span>
        </span>
        <span class="mx-3 w-1 h-1 rounded-full bg-gray-600"></span>
        <span class="inline-flex items-center">
            <svg-icon icon="fontawesome.regular.clock" class="h-current text-gray-900 fill-current mr-1"></svg-icon>
            <span v-text="`${$page.post.timeToRead} min read`"></span>
        </span>
      </div>
      <article class="md-content leading-snug" v-html="$page.post.content">
      </article>

    </div>
  </Layout>
</template>

<page-query>
query blogPost ($id: String!) {
  post: blogPost (id: $id) {
    id
    title
    excerpt
    timeToRead
    date(format: "D MMM, YYYY")
    content
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue';
import SvgIcon from '~/components/SvgIcon.vue';
export default {
  components: {
    Layout,
    SvgIcon
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
<style lang="postcss">

  .md-content > * {
    break-inside: avoid;
    break-after: auto;
    break-before: auto;
  }

  .md-content > p {
    @apply mb-3;
  }
  .md-content > h2 {
    @apply font-medium mb-4 mt-10;
  }
  .md-content > h3,
  .md-content > h4 {
    @apply font-medium mb-3 mt-8;
  }

  .md-content > h5, 
  .md-content > h6 {
    @apply font-medium mb-2 mt-3;
  }

  .md-content > h2,
  .md-content > h1 {
    @apply text-2xl;
  }

  .md-content > h3 {
    @apply text-xl;
  }
  .md-content > h4 {
    @apply text-lg;
  }
  .md-content > h6 {
    @apply text-sm;
  }

  .md-content a {
    @apply text-teal-500;
  }
  .md-content a:hover,
  .md-content a:focus {
    @apply underline text-teal-600;
  }

  .md-content > .code-with-output {
    @apply my-8;
  }
  .md-content > pre,
  .md-content > .code-with-output > pre {
    @apply mb-8 rounded-lg pt-8 relative;
  }
  .md-content > pre::after,
  .md-content > .code-with-output > pre::after {
    content: 'code';
    @apply absolute font-sans text-gray-600 font-semibold uppercase text-xs top-0 left-0 mt-2 ml-4;
  }
  .md-content > .code-with-output > pre{
    @apply mb-2;
  }
  .code-with-output > .html-code-output {
    @apply relative bg-gray-200 p-4 pt-8 rounded;
  }
  .html-code-output::after {
    content: 'preview';
    @apply absolute text-gray-600 font-semibold uppercase text-xs top-0 left-0 mt-2 ml-4;
  }

  .md-content :not(pre) > code {
    @apply px-1 border border-teal-500 text-teal-700 rounded;
  }
  .md-content pre > code {
    @apply whitespace-pre-wrap;
  }
  .md-content p img {
    @apply block mx-auto rounded shadow-2xl mb-8;
  }

  .md-content ul {
    @apply list-disc ml-4 pl-2;
  }
  .md-content ol {
    @apply list-decimal ml-4 pl-2;
  }

  .md-content blockquote {
    @apply bg-gray-200 border-l-4 py-2 pr-2 pl-4 border-teal-600 rounded overflow-hidden my-6;
  }
  .md-content blockquote > p {
    @apply mb-0;
  }
  .md-content blockquote > h3,
  .md-content blockquote > h4,
  .md-content blockquote > h5,
  .md-content blockquote > h6 {
    @apply text-base mb-2 mt-0;
  }
</style>
