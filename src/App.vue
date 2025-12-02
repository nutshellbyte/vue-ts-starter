<script setup lang="ts">
const handleClick = () => {
    console.log('asdsad');
};
</script>

<template>
    <div class="flex items-center h-screen w-screen bg-slate-700 justify-center">
        <ButtonPrimary 
            :onClick="handleClick" 
            type="primary"
            size="small"
        >
            Hello World
        </ButtonPrimary>
    </div>
</template>

<style scoped></style>
