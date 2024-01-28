<template>
    <div>
        <div class="flex text-sm font-semibold border-b-2 border-gray-800 uppercase cursor-pointer mb-2 no-break-inside no-break-after">
            <h2 class="leading-none py-2 text-base">
                <slot name="header"></slot>
            </h2>
        </div>
        <slot></slot>
    </div>
</template>
