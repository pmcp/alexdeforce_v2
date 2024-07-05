<template>
  <div>

    <NuxtLink
      :to="to"
      exact
      class="inline-block border-b-2 border-white hover:border-black"
    >Overzicht <slot/> </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: ''
  }
})
</script>