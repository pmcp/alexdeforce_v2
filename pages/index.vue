<template>
  <ArticleFeatured
      v-for="f in articles"
      :key="f.slug"
      :article="f"
      class="mb-20"
  />
</template>

<script setup>
const articles = await queryContent('articles')
    .sort({ date: 1})
    .where({
      featured: true,
      draft: false
    })
    .find()

useHead({
  title: 'Alex Deforce',
  meta: [
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://alexdeforce.com/logo.jpeg'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Dichter van weinig woorden'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Dichter van weinig woorden'
    }
  ]
})
</script>
