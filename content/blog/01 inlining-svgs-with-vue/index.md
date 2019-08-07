---
title: Inlining SVGs with Vue
slug: inlining-svgs-with-vue
excerpt: How svg icons can be inlined as a vue component so that you can still add class and style to it and all the powers of inline SVG without having to copy the icon's code in your markup.
published: false
author: Ruman Saleem
date: 2019-07-03
tags: [vue, svg, inline-svg]
---
Can you think of a modern website without any icons or illustrations? Icons are essential part of modern UI. SVG seems to be the best format for icons of different sizes. But using svgs as image in a `<img>` tag doesn't really give the SVG superpowers. Real essence of svg is when svg is inlined in a html document, where we can add classes to it animate paths and alot more. But inlining SVG can really mess up your markup. In this post, I will demonstrate a few useful ways how you can inline SVG using vue.

Here are a few ways we can do that using webpack svg loaders:

1. Use `html-loader` and render that raw html string inside of a wrapper taq using `v-html` directive
2. Use `svg-to-vue-component` loader, and render the loaded component.

### Using `html-loader`

To be able to use the `html-loader` you would change your webpack configuration to use `html-loader` for all svg imports.

```html
<template>
    <span v-html="icon"></span>
</template>
<script>
export default {
    props: ['name'],
    data() {
        return {
            icon: '',
        }
    },
    created() {
        import(`html-loader!./../icons/${this.name}.svg`).then(
            r => this.icon = r.default
        );
    },
    mounted() {
        console.log(this.iconComponent)      
    }
}
</script>
```
 or an easier way is to tell webpack to use html loader and guess what it isnt not loading



 ### Using `svg-to-vue-component`

To be able to use the `html-loader` you would change your webpack configuration to use `html-loader` for all svg imports.

```html
<template>
    <component :is="icon"></component>
</template>
<script>
export default {
    props: ['name'],
    data() {
        return {
            iconComponent: '',
        }
    },
    created() {
        import(`svg-to-vue-component!./../icons/${this.name}.svg`).then(
            r => this.iconComponent = r.default
        );
    },
    mounted() {
        console.log(this.iconComponent)      
    }
}
</script>
```

