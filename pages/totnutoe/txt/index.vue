<template>
  <ul>
    <li
      v-for="a in articles"
      :key="a.slug"
      class="py-1">
<!--      <pre>{{ a }}</pre>-->
      <nuxtLink
        :to="`${a.category}/${a._path.slice(10)}`"
        class="inline-block border-b-2 border-white hover:border-black pt-1"
        :class="{'router-link-active': $route.path.includes('/txt')}"
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

const articles = await queryContent('articles')
  .sort({ date: 1})
  .where({
    category: 'txt',
    draft: false
  })
  .find()

definePageMeta({
  layout: 'totnutoe'
})
</script>