<template>
  <div>
    <ContentQuery :path="`/articles/${getStringAfterLastSlash($route.path)}`" find="one" v-slot="{ data }">
      <Article :article="data" />
    </ContentQuery>
  </div>
</template>
<script setup>
definePageMeta({
layout: 'archief',
})

function getStringAfterLastSlash(str) {
  const regex = /[^/]+$/;
  const match = str.match(regex);
  return match ? match[0] : "";
}

</script>