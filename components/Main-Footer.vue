<template>
  <footer class="fixed bottom-5 w-full py-2 md:sticky md:top-16 bg-white z-10 flex flex-row md:block mt-4">
    <div
      v-for="p in pages"
      :key="p.slug"
    >
      <nuxtLink
        v-if="!p.external"
        :to="`/${p._path.slice(7)}`"
        class="rotated uppercase border-b-2 md:border-l-2 md:border-b-0 border-white hover:border-black mt-2 pr-2 pl-2 py-2"
      >
        {{ p.title }}
      </nuxtLink>
      <a
        v-else
        :href="p.url"
        class="rotated uppercase border-b-2 md:border-l-2 md:border-b-0 border-white hover:border-black mt-2 pr-2 pl-2 py-2"
        target="_blank"
      >
        {{ p.title }}
      </a>
    </div>
  </footer>
</template>


<script setup>
const pages = await queryContent('pages').find()

</script>
