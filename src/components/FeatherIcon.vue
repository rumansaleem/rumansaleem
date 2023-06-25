<template>
  <svg viewBox="0 0 24 24" role="presentation" :aria-label="title" :stroke-width="strokeWidth" fill="none"
    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" v-html="iconWithTitle">
  </svg>
</template>
<script>
import feather from 'feather-icons';
export default {
    props: {
        name: {required: true},
        title: {required: false},
        strokeWidth: {default: 2},
    },
    computed: {
        iconWithTitle() {
          return this.title ? `<title>${this.title}</title>${this.icon}` : this.icon;
        },
        icon() {
            return feather.icons.hasOwnProperty(this.name || 'x') 
                ? feather.icons[this.name].contents
                : feather.icons['x'].contents;
        }
    }
}
</script>
