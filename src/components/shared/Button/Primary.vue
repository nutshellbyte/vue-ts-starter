<script setup lang="ts">
import type { ButtonProps } from '@/types/components/button';

defineProps<ButtonProps>();
</script>

<template>
    <button
        :disabled="disabled"
        @click="onClick"
        class="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors">
        <slot />
    </button>
</template>
