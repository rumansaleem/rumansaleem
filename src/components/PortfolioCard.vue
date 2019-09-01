<template>
    <article class="pb-12">
        <div class="h-48 bg-cover flex items-center justify-center rounded text-black font-semibold shadow-md" 
            :class="coverClasses"
            :style="coverBackground"
        >
            <span v-if="!hasCover" v-text="project.title"></span>
        </div>
        <div class="-my-12 px-3">
            <div class="p-4 bg-white rounded shadow-lg">
                <h3 class="text-lg mb-2">
                    <a target="__blank" :href="project.link || project.sourceCode" v-text="project.title"></a>
                </h3>
                <div v-html="project.content" class="text-sm mb-3"></div>
                <div v-if="project.sourceCode" class="mt-2 text-sm mb-3">
                    <a :href="project.sourceCode" class="inline-flex items-center">
                        <feather-icon name="code" class="h-current mr-1"></feather-icon>
                        <span class="link">Source Code</span>
                    </a>
                </div>
                <div class="flex items-center text-xs italic mb-4">
                    <span>
                        <span v-text="project.start"></span>
                        &mdash;
                        <span v-text="project.end"></span>
                    </span>
                </div>
                <div class="flex flex-wrap -m-1">
                    <span v-for="tech in project.technologies" :key="tech" v-text="tech"
                    class="p-1 bg-gray-200 font-thin text-xs m-1 rounded"></span>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import FeatherIcon from './../components/FeatherIcon';
export default {
    components: { FeatherIcon },
    props: {
        project: {required: true}
    },
    computed: {
        hasCover() {
            return !! this.project.cover;
        },
        coverBackground() {
            if (!this.hasCover) {
                return {};
            }

            return {backgroundImage: `url(${this.project.cover.src})`};
        },
        bgColorShade() {
            if (!this.project.color) {
                return 300;
            }
            return this.project.color.shade || 500;
        },
        bgColor() {
            return this.project.bgcolor || 'gray-200';
        },
        fgColor() {
            return this.project.fgcolor || 'gray-900';
        },
        coverClasses() {
            return [ 
                `bg-${this.bgColor}`,
                `text-${this.fgColor}`,
            ]
        }

    }
}
</script>
