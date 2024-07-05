<template>
  <div>
    <Article :article="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // Get the article
    let article, articles
    try {
      article = await $content('articles', params.article).fetch()
    } catch (e) {
      console.log(e)
    }

    // Get the rest of the articles
    try {
      articles = await $content('articles')
        .sortBy('date', 'desc')
        .surround(article.slug, { before: 0, after: 10 })
        .fetch()
    } catch (e) {
      console.log(e)
    }

    // Filter out null
    articles = articles.filter(article => article !== null)
    return {
      article,
      articles
    }
  },
  layout: 'totnutoe',
  head() {
    return {
      title: `Alex Deforce | ${this.article.title}`
      // meta: [
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: `een zondagse muziekcolumn`
      //   },
      //   {
      //     hid: 'og:title',
      //     property: 'og:title',
      //     content: `● naakt in bad |  ${this.article.artist} - ${
      //       this.article.song
      //     }`
      //   },
      //   {
      //     hid: 'og:image',
      //     property: 'og:image',
      //     content: this.article.cover
      //   }
      //   // // Twitter Card
      //   // {
      //   //   hid: 'twitter:title',
      //   //   name: 'twitter:title',
      //   //   content: this.article.title
      //   // },
      //   // {
      //   //   hid: 'twitter:description',
      //   //   name: 'twitter:description',
      //   //   content: this.article.description
      //   // }
      // ]
    }
  }
}
</script>
