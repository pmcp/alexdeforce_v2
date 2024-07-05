<template>
  <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
    <Article :article="data" />
  </ContentQuery>
</template>