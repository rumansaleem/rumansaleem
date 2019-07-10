<template>
    <details open>
        <summary class="flex text-sm font-medium border-b-2 border-gray-800 uppercase cursor-pointer mb-2">
            <h4 class="leading-none py-2">
                <slot name="header"></slot>
            </h4>
        </summary>
        <slot></slot>
    </details>
</template>
