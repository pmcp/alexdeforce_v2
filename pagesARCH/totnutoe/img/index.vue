<template>
  <ul>
    <li
      v-for="a in articles"
      :key="a.slug"
      class="py-1">
      <nuxt-link
        :to="`img/${a.slug}`"
        class="inline-block border-b-2 border-white hover:border-black pt-1"
      >
        {{ a.title }}
      </nuxt-link>
      <tags
        v-if="a.tags"
        :tags="a.tags" />
    </li>
  </ul>
</template>
<script setup>
const { data: articles, error } = await useAsyncData('articles', async () => {
  const { $content } = useNuxtApp()
  try {
    const articles = await $content('articles')
        .sortBy('date', 'desc')
        .where({ draft: false, category: 'img' })
        .fetch()
    return articles
  } catch (e) {
    console.log(e)
    throw e
  }
})
</script>

<script>
definePageMeta({
  layout: 'totnutoe'
})
</script>