
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import type { Orb } from '@/types/utils/orb';

const loading = ref<boolean>(false);

const mouseX = ref<number>(0);
const mouseY = ref<number>(0);

const orbs = reactive<Orb[]>([
    { x: 0, y: 0, size: 0, targetSize: 500, ease: 0.05, rotation: 0, opacity: 0.2 },
    { x: 0, y: 0, size: 0, targetSize: 350, ease: 0.08, rotation: 0, opacity: 0.25 },
    { x: 0, y: 0, size: 0, targetSize: 200, ease: 0.12, rotation: 0, opacity: 0.3 },
]);

const eventMouseMove = (e: MouseEvent) :void => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
};

let animationId:number;

const animate = () :void => {
    const time = Date.now() * 0.001;
    
    orbs.forEach((orb, index) => {
        orb.x += (mouseX.value - orb.x) * orb.ease;
        orb.y += (mouseY.value - orb.y) * orb.ease;
        const breathe = Math.sin(time * 1.5 + index) * 30;
        orb.size = orb.targetSize + breathe;
        orb.rotation = time * (30 + index * 10);
        orb.opacity = 0.15 + Math.sin(time * 2 + index * 0.5) * 0.1;
    });

    animationId = requestAnimationFrame(animate);
};

onMounted(() => {
    loading.value = true;
    window.addEventListener('mousemove', eventMouseMove);
    mouseX.value = window.innerWidth / 2;
    mouseY.value = window.innerHeight / 2;
    orbs.forEach((orb) => {
        orb.x = mouseX.value;
        orb.y = mouseY.value;
    });
    animate();
    loading.value = false;
});

onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', eventMouseMove);
});
</script>

<template>
    <div class="h-screen w-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div
            v-for="(orb, index) in orbs"
            :key="index"
            class="pointer-events-none absolute rounded-full blur-3xl transition-all duration-100"
            :style="{
                left: orb.x - orb.size / 2 + 'px',
                top: orb.y - orb.size / 2 + 'px',
                width: orb.size + 'px',
                height: orb.size + 'px',
                opacity: orb.opacity,
                transform: `rotate(${orb.rotation}deg)`,
                background: index === 0 
                    ? 'radial-gradient(circle, rgba(16,185,129,0.9), rgba(52,211,153,0.7), rgba(190,242,100,0.6))' 
                    : index === 1 
                        ? 'radial-gradient(circle, rgba(52,211,153,0.8), rgba(134,239,172,0.6), rgba(190,242,100,0.4))'
                        : 'radial-gradient(circle, rgba(134,239,172,0.9), rgba(190,242,100,0.7), rgba(254,240,138,0.5))',
            }"
        />

        <div
            class="pointer-events-none absolute w-[150px] h-[150px] rounded-full blur-2xl opacity-40 transition-all duration-500"
            :style="{
                left: mouseX - 75 + 'px',
                top: mouseY - 75 + 'px',
                background: 'radial-gradient(circle, rgba(134,239,172,1), rgba(190,242,100,0.5), transparent)',
            }"
        />

        <div class="relative">
            <div
                class="absolute inset-0 blur-3xl opacity-30 bg-linear-to-r from-emerald-400 via-green-400 to-lime-400 animate-pulse-slow"
            />
        </div>
    
        <p class="text-xl text-emerald-200 font-semibold animate-fadeIn">
            🎉 Felicidades, usted está listo para desarrollar 🚀
        </p>
    
        <button-primary type="primary" size="small" class="my-6 w-32 z-20"
        >Test</button-primary>

        <div class="flex gap-4 justify-center">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
            <div
                class="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style="animation-delay: 0.1s"
            />
            <div
                class="w-2 h-2 bg-lime-400 rounded-full animate-bounce"
                style="animation-delay: 0.2s"
            />
        </div>
    </div>
</template>

<style>
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse-slow {
    0%,
    100% {
        opacity: 0.3;
    }
    50% {
        opacity: 0.5;
    }
}

.animate-fadeIn {
    animation: fadeIn 1s ease forwards;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}
</style>
