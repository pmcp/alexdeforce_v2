<template>
  <nav
    role="navigation"
    aria-labelledby="mainNav"
    class="flex text-xs md:text-sm pl-1 md:pl-0"
  >
    <h2
      id="mainNav"
      class="hidden"
    >Main menu</h2>
    <nuxt-link
      class="text-center whitespace-nowrap inline-block leading-5 uppercase border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      exact
      to="/"
    >nu</nuxt-link>
    <nuxt-link
      class="text-center whitespace-nowrap inline-block leading-5 uppercase border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      exact
      to="/agenda"
    >Agenda</nuxt-link>
    <nuxt-link
      class="whitespace-nowrap inline-block uppercase leading-5 border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      to="/totnutoe"
    >tot nu toe</nuxt-link>
  </nav>
</template>
