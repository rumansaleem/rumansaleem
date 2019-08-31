<template>
    <Layout>
        <div class="narrow-container mx-auto px-4">
            <h2 class="font-extrabold text-3xl mt-4 mb-3">Blog Posts</h2>
            <h4 class="mb-6 font-semibold text-lg" v-text="`${count} Post${count > 1 ? 's' : ''}`"></h4>
            <div v-if="posts.length > 0">
                <article v-for="post in posts" :key="post.id" class="py-4 mb-4">
                    <div class="flex items-center text-sm font-bold text-gray-700 mb-2">
                        <span v-text="post.date"></span>
                        <span class="mx-3 w-1 h-1 rounded-full bg-gray-600"></span>
                        <span class="inline-flex items-center">
                            <svg-icon icon="fontawesome.regular.clock" class="h-current text-gray-600 fill-current mr-1"></svg-icon>
                            <span v-text="`${post.timeToRead} min read`"></span>
                        </span>
                    </div>
                    <h3 class="font-bold text-2xl mb-2"><a :href="post.path" v-text="post.title"></a></h3>
                    <p v-text="post.excerpt" class="mb-3"></p>
                    <p>
                        <a class="link" :href="post.path">Read More »</a>
                    </p>
                </article>
                <Pager :info="pageInfo"/>
            </div>
            <p v-else>
                I have not published anything yet. I'll soon publish some posts, stay tuned ;).
            </p>
        </div>
    </Layout>
</template>
<static-query>
query Posts($page: Int){
  allBlogPost(page: $page) @paginate {
    totalCount
    pageInfo {
        totalPages
        currentPage
    }
    edges{
      node{
        id
        title
        excerpt
        timeToRead
        date(format: "D MMMM YYYY")
        path
        slug
      }
    }
  }
}
</static-query>

<script>
import Layout from './../layouts/Default';
import SvgIcon from './../components/SvgIcon';
import { Pager } from 'gridsome';
export default {
    metaInfo() {
        return {
            title: 'Blog'
        }
    },
    components: { Layout, Pager, SvgIcon },
    computed: {
        posts() {
            return this.$static.allBlogPost.edges.map(edge => edge.node);
        },
        pageInfo() {
            return this.$static.allBlogPost.pageInfo;
        },
        count() {
            return this.$static.allBlogPost.totalCount;
        }
    }
}
</script>
