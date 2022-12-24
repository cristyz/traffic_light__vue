<template>
    <div class="traffic-light">
        <TrafficLightBulb v-for="color in colors" :color="color" />
    </div>
</template>
<script setup>
import TrafficLightBulb from './TrafficLightBulb.vue';
import { useTrafficLightStore } from '../stores/trafficLight';
import { computed } from 'vue';

const trafficLightStore = useTrafficLightStore();
const colors = computed(() => trafficLightStore.avaliableColors);
</script>
<style lang="scss">
.traffic-light {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 150px;
    background-color: #222;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>