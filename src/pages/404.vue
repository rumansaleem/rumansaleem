<template>
    <Layout>
        <div class="h-full flex flex-col justify-center">
            <h1 class="text-4xl font-normal mb-3">404! Not Found</h1>
            <p class="mb-2">
                Whoops! looks like you lost the track. Let me guide you to home.
            </p>
            <p>
                <g-link to="/" class="inline-block px-4 py-2 bg-white border-2 border-teal-500 rounded text-teal-500 font-semibold">Go to Home</g-link>
            </p>
        </div>
    </Layout>
</template>
<script>
import Layout from './../layouts/Default';
export default {
    components: {Layout}
}
</script>
