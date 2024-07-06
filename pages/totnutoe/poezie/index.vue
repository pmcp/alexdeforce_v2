<template>
  <ul>
    <li
      v-for="a in data"
      :key="a.slug"
      class="py-1">
<!--      <pre>{{ a }}</pre>-->
      <nuxtLink
        :to="`${a.category}/${a._path.slice(10)}`"
        class="inline-block border-b-2 border-white hover:border-black pt-1"
      >
        {{ a.title }}
      </nuxtLink>
      <tags
        v-if="a.tags"
        :tags="a.tags" />
    </li>
  </ul>
</template>
<script setup>
const route = useRoute()

const { data } = await useAsyncData('poezie', () => queryContent('articles')
  .sort({ date: 1})
  .where({
    category: 'poezie',
    draft: false
  })
  .find()

definePageMeta({
  layout: 'totnutoe'
})
</script>