<script setup>
import TrafficLight from './components/TrafficLight.vue';

</script>

<template>
    <main>
        <TrafficLight />
    </main>
</template>

<style lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #333;
}
</style>
