import { ref } from "vue";
import { defineStore } from "pinia";
import { COLORS_ENUM } from "../helpers/enums";

export const useTrafficLightStore = defineStore("trafficLight", () => {
  const avaliableColors = ref(Object.values(COLORS_ENUM));
  const selectedColor = ref(COLORS_ENUM.RED);

  const changeSelectedColor = (color) => {
    selectedColor.value = color;
  }

  return { avaliableColors, selectedColor, changeSelectedColor };
});
