<template>
  <span
    class="uppercase text-xs">
    [
    <tag
      v-for="(t, index) in tags"
      :key="t">
      {{ t }}
      <span
        v-if="index != Object.keys(tags).length - 1">,
      </span>
    </tag>
    ]
  </span>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  },
  last: {
    type: Boolean,
    default: false
  }
})
</script>