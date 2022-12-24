<template>
    <div class="traffic-light__bulb" :class="{ 'traffic-light__bulb__selected': isSelected }"
        :style="{backgroundColor: color, color}" @click="emitSelectColor">
    </div>
</template>
<script>
export default {
    name: 'TrafficLightBulb',
    props: {
        color: {
            type: String,
            required: true,
        },
        selectedColor: {
            type: String,
            required: true,
        },
    },
    computed: {
        isSelected() {
            return this.color === this.selectedColor;
        },
    },
    methods: {
        emitSelectColor() {
            this.$emit('select-color', this.color);
        },
    },
}
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