<template>
  <nav
    role="navigation"
    aria-labelledby="subNav"
    class="w-full flex text-xs md:text-sm"
  >
    <h2
      id="subNav"
      class="hidden"
    >Articles menu</h2>
    <nuxt-link
      to="/archive/poezie"
      class="inline-block uppercase border-b-2 leading-5 border-white hover:border-black md:mr-5 pt-1.5 px-2 md:p-2"
      :class="{'router-link-active': $route.path.includes('/poezie')}"
    >Poezie</nuxt-link>
    <nuxt-link
      to="/archive/txt"
      class="inline-block uppercase border-b-2 leading-5 border-white hover:border-black md:mr-5 pt-1.5 px-2 md:p-2"
      :class="{'router-link-active': $route.path.includes('/txt')}"
    >Txt</nuxt-link>
    <nuxt-link
      to="/archive/img"
      class="inline-block uppercase border-b-2 leading-5 border-white hover:border-black md:mr-5 pt-1.5 px-2 md:p-2"
      :class="{'router-link-active': $route.path.includes('/img')}"
    >Img</nuxt-link>
    <nuxt-link
      to="/archive/radio"
      class="inline-block uppercase border-b-2 leading-5 border-white hover:border-black md:mr-5 pt-1.5 px-2 md:p-2"
      :class="{'router-link-active': $route.path.includes('/radio')}"
    >Radio</nuxt-link>
  </nav>
</template>
