<template>
  <div>

    <div>
      <h2 class="text-lg mb-1">Binnenkort</h2>
      <ul v-if="newArticles && newArticles.length">
        <li
          v-for="a in newArticles"
          :key="a._path"
          class="py-1">

          <nuxtLink
            :to="a._path"
            class="inline-block border-b-2 border-white hover:border-black pt-1"
          >
            <span v-if="a.date">{{ formatDate(a.date) }} - </span>{{ a.title }}
          </nuxtLink>
        </li>
      </ul>
      <div v-else>
        No upcoming events
      </div>
    </div>


    <div class="mt-10">
      <h2 class="text-lg mb-1">Afgelopen</h2>
      <ul v-if="oldArticles && oldArticles.length">
        <li
          v-for="a in oldArticles"
          :key="a._path"
          class="py-1">
          <nuxt-link
            :to="a._path"
            class="inline-block border-b-2 border-white hover:border-black pt-1"
          >
            <span v-if="a.date" >{{ formatDate(a.date) }} - </span>{{ a.title }}
          </nuxt-link>
        </li>
      </ul>
      <div v-else>
        No passed events
      </div>
    </div>

  </div>
</template>

<script setup>
import { format, isBefore } from '@formkit/tempo'

const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)

const { data } = await useAsyncData('agenda', () => queryContent('agenda')
    .sort({ date: 1})
    .where({
      draft: false,
      // date: { $gte: currentDate }
    })
    .find())
//

const oldArticles = computed(() => (data.value.filter(a => isBefore(a.date, currentDate))).reverse())

const newArticles = computed(() => data.value.filter(a => !isBefore(a.date, currentDate)))

function formatDate(date) {
  return format(date, 'YYYY-MM-DD')
}

definePageMeta({
  layout: 'agenda'
})

</script>
