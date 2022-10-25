<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5.63663" cy="5.3486" r="4.10062" fill="#F8E583" />
    <circle cx="5.69812" cy="18.6583" r="4.10062" fill="#DCB015" />
    <circle cx="18.3154" cy="5.41013" r="4.10062" fill="#157CDC" />
    <circle cx="18.3154" cy="18.6583" r="4.10062" fill="#48C4A6" />
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
