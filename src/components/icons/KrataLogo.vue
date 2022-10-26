<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="500" height="500" fill="#2976E8" />
    <rect x="15" y="15" width="470" height="470" rx="92.755" fill="#2976E8" />
    <path
      d="M206.105 351.463V103.701L104.635 147.588V396.284L206.105 351.463Z"
      fill="white"
      fill-opacity="0.33"
    />
    <path
      d="M206.105 351.463V103.701L293.569 146.966V395.661L206.105 351.463Z"
      fill="white"
    />
    <path
      d="M395.039 353.641V103.701L293.568 146.966V395.661L395.039 353.641Z"
      fill="white"
      fill-opacity="0.33"
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
