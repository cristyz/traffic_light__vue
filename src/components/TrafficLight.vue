<template>
    <div class="traffic-light">
        <TrafficLightBulb v-for="color in colors" :color="color" :selected-color="selectedColor"
            @selectColor="setSelectedColor" />
    </div>
</template>
<script>
import TrafficLightBulb from './TrafficLightBulb.vue';
import { COLORS_ENUM } from '../helpers/enums';

export default {
    name: "TrafficLight",
    components: { TrafficLightBulb },
    data() {
        return {
            selectedColor: COLORS_ENUM.RED,
        };
    },
    computed: {
        colors() {
            return Object.values(COLORS_ENUM);
        }
    },
    methods: {
        setSelectedColor(color) {
            this.selectedColor = color;
        }
    }
}
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