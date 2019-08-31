<template>
  <Layout>
    <div class="narrow-container px-4 mx-auto mt-8">
      <div class="flex items-center italic font-bold text-gray-700 mb-2">
        <span v-text="$page.post.date"></span>
        <span class="mx-3 text-gray-600">&bull;</span>
        <span class="inline-flex items-center">
            <svg-icon icon="fontawesome.regular.clock" class="h-current text-gray-900 fill-current mr-1"></svg-icon>
            <span v-text="`${$page.post.timeToRead} min read`"></span>
        </span>
      </div>
      <h2 class="text-3xl font-extrabold mb-2" v-text="$page.post.title"></h2>
      <hr class="border-b-2 border-gray-800 ml-0 mb-10">
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
    date(format: "MMMM D, YYYY")
    content
    tags
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
      title: this.$page.post.title,
      meta: [
        { name: 'keywords', content: this.$page.post.tags.join(' ') }
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Fira+Mono"},
        { rel: 'stylesheet', href: '/css/prism.css' }
      ]
    }
  }
}
</script>
<style lang="postcss">

  .md-content > pre,
  .md-content > figure,
  .md-content > blockquote {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .md-content > p {
    @apply mb-3;
  }
  .md-content > h2 {
    break-after: avoid;
    page-break-after: avoid;
    @apply font-sans font-extrabold mb-4 mt-10;
  }
  .md-content > h3,
  .md-content > h4 {
    break-after: avoid;
    page-break-after: avoid;
    @apply font-sans font-bold mb-3 mt-8;
  }

  .md-content > h5, 
  .md-content > h6 {
    break-after: avoid;
    page-break-after: avoid;
    @apply font-sans font-bold mb-2 mt-3;
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
    @apply mb-8 rounded-lg pt-8 relative font-mono;
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
    @apply relative font-sans bg-gray-200 p-4 pt-8 rounded;
  }
  .html-code-output::after {
    content: 'preview';
    @apply absolute text-gray-600 font-semibold uppercase text-xs top-0 left-0 mt-2 ml-4;
  }

  .md-content :not(pre) > code {
    font-size: .85em;
    @apply px-1 text-gray-800 bg-gray-200 border rounded font-normal align-middle font-mono;
  }
  
  .md-content pre > code {
    @apply overflow-x-auto;
  }
  .md-content > p img {
    @apply block mx-auto p-4 my-8;
  }

  .md-content > .figure-with-caption {
    @apply my-8;
  }

  .md-content > .figure-with-caption img{
    @apply block mx-auto p-4;
  }
  
  .md-content > .figure-with-caption .caption {
    @apply text-center text-gray-600 italic;
  }

  .md-content ul {
    @apply list-disc ml-4 pl-2 mb-3;
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
    @apply text-sm uppercase font-bold text-teal-700 mb-2 mt-0;
  }
</style>
