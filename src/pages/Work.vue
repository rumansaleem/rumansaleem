<template>
    <Layout>
        <h2 class="font-normal text-3xl mt-4 mb-4">Work</h2>
        <div class="flex flex-wrap -mx-4 -mt-6">
            <PortfolioCard v-for="project in projects" 
                :key="project.id" 
                :project="project" 
                class="w-full md:w-1/2 lg:w-1/3 py-6 px-4"/>
        </div>
        <Pager :info="pageInfo"/>
    </Layout>
</template>
<static-query>
query Projects($page: Int){
  allPortfolio(perPage: 2, page: $page) @paginate {
    totalCount
    pageInfo {
        totalPages
        currentPage
    }
    edges{
      node{
        id
        title
        bgcolor
        fgcolor  
        cover
        excerpt
        timeToRead
        start(format: "MMM, YYYY")
        end(format: "MMM, YYYY")
        path
        slug
        technologies
      }
    }
  }
}
</static-query>

<script>
import Layout from './../layouts/Default';
import PortfolioCard from './../components/PortfolioCard';
import { Pager } from 'gridsome';
export default {
    metaInfo() {
        return {
            title: 'Work'
        }
    },
    components: { Layout, Pager, PortfolioCard },
    computed: {
        projects() {
            return this.$static.allPortfolio.edges.map(edge => edge.node);
        },
        pageInfo() {
            return this.$static.allPortfolio.pageInfo;
        },
        total() {
            return this.$static.allPortfolio.total;
        }
    }
}
</script>
