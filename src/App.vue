<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="header">
      <nav class="navbar navbar-dark bg-dark">
        <RouterLink to="/">Home</RouterLink>


        <RouterLink to="/blog">Blogs</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>

<style scoped>

#header {
  margin-top: 10px;

}


@media (min-width: 1024px) {

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
