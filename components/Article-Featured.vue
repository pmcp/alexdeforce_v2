<template>
  <div>
    <h1 class="pb-5 pt-1"><span class="text-xl">{{ article.title }}</span></h1>
    <ContentRenderer
      :value="article"
      class="text-sm prose"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  },
  last: {
    type: Boolean,
    default: false
  }
})
</script>
