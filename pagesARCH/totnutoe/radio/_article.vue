<template>
  <div>
    <Article :article="article" />
  </div>
</template>

<script setup>
const route = useRoute();

const { data: article } = await useAsyncData('article', () =>
    $content('articles', route.params.article).fetch()
);
</script>
