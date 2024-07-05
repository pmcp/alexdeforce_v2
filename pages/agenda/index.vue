<template>
  <div>

    <div>
      <h2 class="text-lg mb-1">Binnenkort</h2>
      <ul v-if="articles && articles.length">
        <li
          v-for="a in articles"
          :key="a.slug"
          class="py-1">

          <nuxt-link
            :to="a._path"
            class="inline-block border-b-2 border-white hover:border-black pt-1"
          >
            <div v-if="a.date" >{{ formatDate(a.date) }} - {{ a.title }}</div>
          </nuxt-link>
          <!--suppress VueMissingComponentImportInspection -->
          <tags
            v-if="a.tags"
            :tags="a.tags" />
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
          :key="a.slug"
          class="py-1">
          <nuxt-link
            :to="`agenda/${a.slug}`"
            class="inline-block border-b-2 border-white hover:border-black pt-1"
          >
            <div v-if="a.date" >{{ formatDate(a.date) }} - {{ a.title }}</div>
          </nuxt-link>
          <!--suppress VueMissingComponentImportInspection -->
          <tags
            v-if="a.tags"
            :tags="a.tags" />
        </li>
      </ul>
      <div v-else>
        No passed events
      </div>
    </div>

  </div>
</template>

<script setup>
import { format } from '@formkit/tempo'

const currentDate = new Date()
currentDate.setHours(0, 0, 0, 0)

console.log(currentDate)
const articles = await queryContent('agenda')
    .sort({ date: 1})
    .where({
      draft: false,
      date: { $gte: currentDate }
    })
    .find()

const oldArticles = await queryContent('agenda')
    .sort({ date: 1})
    .where({
      draft: false,
      date: { $lte: currentDate }
    })
    .find()
console.log(articles)


function formatDate(date) {
  return format(date, 'YYYY-MM-DD')
}

function formatHour(date) {
  return format(date, 'HH:mm', 'be-nl')
}

// export default {
//   async asyncData({ $content }) {
//     const currentDate = new Date()
//     currentDate.setHours(0, 0, 0, 0)
//
//     const articles = await queryContent('articles')
//         .sort({ date: 1})
//         .where({
//           draft: false,
//           date: { $gte: currentDate }
//         })
//         .find()
//
//
//   },
//   layout: 'default',
//   methods: {
//     formatDate: function(date) {
//       return format(date, 'YYYY-MM-DD')
//     },
//     formatHour: function(date) {
//       return format(date, 'HH:mm', 'be-nl')
//     }
//   }
// }
</script>
