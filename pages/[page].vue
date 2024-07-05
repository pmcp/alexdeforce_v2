<template>
  <ContentQuery :path="`pages${$route.path}`" find="one" v-slot="{ data }">
    <ContentRenderer :value="data" class="prose" />
  </ContentQuery>
</template>