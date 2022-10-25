<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    >
    <path
      d="M2.85645 2.65796H28.9708V28.7723H2.85645V2.65796Z"
      stroke="currentColor"
      stroke-width="3.13372"
      stroke-linejoin="round"
    />
    <path
      d="M25.0537 6.5751C21.1366 6.5751 17.8723 9.18654 15.9137 15.7151C13.9551 22.2437 10.6908 24.8551 6.77368 24.8551"
      stroke="currentColor"
      stroke-width="3.13372"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({
  size: {
    type: [String, Number],
    default: 24,
  },
});
</script>
