<template>
    <div class="tooltip-container" @mouseover="showTooltip" @mouseleave="hideTooltip">
        <slot />
        <div v-if="visible && text" :id="tooltipId" class="tooltip" :class="position" role="tooltip" :style="tooltipStyles">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        default: 'top',
        validator: (value: string) =>
            ['top', 'bottom', 'left', 'right'].includes(value),
    },
});

const visible = ref(false);
const tooltipStyles = ref<Record<string, string>>({});
const tooltipId = `tooltip-${Math.random().toString(36).substring(2, 15)}`;

const showTooltip = (event: MouseEvent) => {
    visible.value = true;
    const trigger = event.currentTarget as HTMLElement;
    trigger.setAttribute('aria-describedby', tooltipId);
};

const hideTooltip = (event: MouseEvent) => {
    visible.value = false;
    const trigger = event.currentTarget as HTMLElement;
    trigger.removeAttribute('aria-describedby');
};
</script>

<style scoped>
.tooltip-container {
    position: relative;
    font-weight: 600;
    text-decoration:underline;
    font-style: italic;
    display: inline-block;
}

.tooltip {
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 0.875rem;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.2s ease-in forwards;
}

.tooltip.top {
    transform: translate(0%, -150%);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>