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
    <nuxtLink
      class="text-center whitespace-nowrap inline-block leading-5 uppercase border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      exact
      to="/"
    >nu</nuxtLink>
    <nuxtLink
      to="/agenda"
      class="text-center whitespace-nowrap inline-block leading-5 uppercase border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      :class="{'router-link-active': $route.path.includes('/agenda')}"
      exact
    >Agenda</nuxtLink>
    <nuxtLink
      class="whitespace-nowrap inline-block uppercase leading-5 border-b-2 border-white hover:border-black md:mr-5 pt-1.5 px-1 md:p-2"
      :class="{'router-link-active': $route.path.includes('/totnutoe')}"
      to="/totnutoe"
    >tot nu toe</nuxtLink>
  </nav>
</template>
