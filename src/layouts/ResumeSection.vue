<template>
    <div style="break-inside: avoid;">
        <div class="flex flex-col text-sm uppercase cursor-pointer mb-2">
            <h2 class="leading-none py-2 text-base">
                <slot name="header"></slot>
            </h2>
            <div class="h-2px bg-gray-800"></div>
        </div>
        
        <slot></slot>
    </div>
</template>
