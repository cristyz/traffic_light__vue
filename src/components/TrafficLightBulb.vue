<template>
    <div class="traffic-light__bulb" :class="{ 'traffic-light__bulb__selected': isSelected }"
        :style="{backgroundColor: color, color}" @click="handleChangeSelectedColor">
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useTrafficLightStore } from '@/stores/trafficLight';
const trafficLightStore = useTrafficLightStore();

const { color } = defineProps(['color'])
// or...
// const { color } = defineProps({ color: String })

const selectedColor = computed(() => trafficLightStore.selectedColor);
const isSelected = computed(() => color === selectedColor.value);

const handleChangeSelectedColor = () => trafficLightStore.changeSelectedColor(color);
</script>
<style lang="scss">
.traffic-light__bulb {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px 0;
    opacity: 0.2;
    cursor: pointer;
    transition: 0.4s linear;

    &__selected {
        opacity: 1;
        @include pulse-shadow__animation(currentColor);
    }
}
</style>