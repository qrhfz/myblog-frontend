<template>
  <div class="container p-3">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/" class="title is-size-4"
            >Qori El-Hafizh</router-link
          >
        </div>
      </div>
      <div class="level-right" id="nav-pages">
        <PageNav />
      </div>
    </nav>

    <router-view :key="$route.fullPath" />
  </div>
  <footer class="has-text-centered has-background-white-ter">
    <div class="is-v-centered">
      made by <b>Qori El-Hafizh</b> with VueJS and Bulma
    </div>
  </footer>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from "vue";
// import TagMenu from "@/components/TagMenu.vue";
import PageNav from "@/components/PageNav.vue";
export default defineComponent({
  components: {
    PageNav,
  },
});
</script>


