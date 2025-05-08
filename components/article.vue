<template>
  <div class="pmcp-article">
    <back
      :to="isAgenda ? '/agenda' : '/archief/'+article.category"
      class="mb-4">
      <span v-if="article.category === 'poezie'">poëzie</span>
      <span v-else>{{ article.category }}</span>
    </back>
    <div
      v-if="article.date && isAgenda"
      class="mb-2"
    >
      {{ formatDate(article.date) }}
    </div>
    <h1 class="pb-5"><span class="text-2xl">{{ article.title }}</span></h1>
<!--    <pre>{{ article }}</pre>-->
    <ContentRenderer
        v-if="article.body.children.length > 0"
        :value="article"
        class="text-sm leading-6 prose"
    />
  </div>
</template>

<script setup>
import { format } from '@formkit/tempo'
// import { defineProps } from 'vue'

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

const isAgenda = props.article._path.includes('/agenda')
const formatDate = (date) => {
  return format(date, 'YYYY-MM-DD')
}
</script>
