<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Inter', BlinkMacSystemFont, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  transition: .3s all ease-in-out;
}

body {
  transition: .3s all ease-in-out;
}

.dark-mode-bg-color {
  background-color: #131b20;
}

.dark-mode-color {
  color: white;
}

.transition-mode {
    transition: .3s all ease-in-out;
}

a {
  text-decoration: none !important;
}

p {
  margin-bottom: 0;
}

ul, nav {
  list-style: none;
}

.section-title {
  font-weight: bold;
}

.section-title-line {
  width: 4rem;
  border: 1px solid #00da93;
}
</style>