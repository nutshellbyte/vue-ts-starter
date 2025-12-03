<script setup lang="ts">
import type { ButtonProps } from '@/types/components/button';

const props = withDefaults(defineProps<ButtonProps>(), {
    disabled: false,
    loading: false
});
</script>

<template>
    <button
        :disabled="props.disabled"
        @click="props.onClick"
        class="bg-slate-600 px-6 py-2.5 rounded-2xl text-white font-semibold flex items-center justify-center shadow-2xl cursor-pointer">
        <slot />
    </button>
</template>
