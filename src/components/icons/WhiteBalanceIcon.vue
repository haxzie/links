<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_101_27)">
      <path
        d="M9.18916 16.8385H12.1923L10.6907 12.0727L9.18916 16.8385ZM28.9708 9.46122L27.4039 17.6742L25.4453 9.46122H23.3562L21.4107 17.6742L19.8307 9.46122H18.8384C16.919 7.07176 13.9942 5.54407 10.6907 5.54407C4.91946 5.54407 0.244995 10.2185 0.244995 15.9898C0.244995 21.7611 4.91946 26.4355 10.6907 26.4355C14.7776 26.4355 18.3161 24.0722 20.0266 20.6512L20.1572 21.2127H22.4422L24.4008 13.2478L26.3593 21.2127H28.6443L31.3211 9.46122H28.9708ZM13.6939 21.2127L12.7799 18.6012H8.60158L7.68758 21.2127H5.20672L9.38501 9.46122H11.9964L16.1747 21.2127H13.6939Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_101_27">
        <rect
          width="31.3372"
          height="31.3372"
          fill="currentColor"
          transform="translate(0.244995 0.321213)"
        />
      </clipPath>
    </defs>
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
