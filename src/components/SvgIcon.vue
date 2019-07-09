<template>
    <component :is="component"></component>
</template>
<script>
export default {
    props: {
        icon: {required: true},
    },
    data() {
        return {
            component: null,
        }
    },
    created() {
        const path = this.icon.split('.').join('/');

        import(`./../icons/${path}.svg`).then(
            r => this.component = r.default
        ).catch(err => console.error(err.code));
    }
}
</script>
