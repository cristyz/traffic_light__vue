import { ref } from "vue";
import { defineStore } from "pinia";

export const useTrafficLightStore = defineStore("trafficLight", () => {
  const avaliableLights = ref([]);

  return { avaliableLights };
});
