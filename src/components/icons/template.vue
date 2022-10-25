<template>
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
    </svg>
  </template>
  <script setup lang="ts">
  const props = defineProps({
      size: {
          type: [String, Number],
          default: 24
      }
  })
  </script>
  