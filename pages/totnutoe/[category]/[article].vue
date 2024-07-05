<template>
  <div>
    <ContentQuery :path="`/articles/${getStringAfterLastSlash($route.path)}`" find="one" v-slot="{ data }">
      <Article :article="data" />
    </ContentQuery>
  </div>
</template>
<script setup>
definePageMeta({
layout: 'totnutoe',
})

function getStringAfterLastSlash(str) {
  // Match any characters after the last slash
  const regex = /[^/]+$/;
  // Extract the matched portion using regex
  const match = str.match(regex);
  // Return the matched portion
  return match ? match[0] : "";
}

</script>