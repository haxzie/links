<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16223 22.3425V24.954H11.9965V22.3425H4.16223ZM4.16223 6.67393V9.28537H17.2194V6.67393H4.16223ZM17.2194 27.5654V24.954H27.6651V22.3425H17.2194V19.7311H14.608V27.5654H17.2194ZM9.3851 11.8968V14.5082H4.16223V17.1197H9.3851V19.7311H11.9965V11.8968H9.3851ZM27.6651 17.1197V14.5082H14.608V17.1197H27.6651ZM19.8308 11.8968H22.4423V9.28537H27.6651V6.67393H22.4423V4.0625H19.8308V11.8968Z"
      fill="currentColor"
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
