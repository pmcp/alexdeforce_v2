<template>
  <div>
    <h1 class="pb-5 pt-1"><span class="text-xl">{{ article.title }}</span></h1>
    <nuxt-img v-if="article.image" :src="article.image" class="mb-4 w-full h-auto max-w-prose"/>
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
