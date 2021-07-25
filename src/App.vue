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
    <div class="columns">
      <div class="column is-9">
        <router-view :key="$route.fullPath" />
      </div>
      <div class="column is-3">
        <TagMenu />
      </div>
    </div>
  </div>
  <footer class="has-text-centered has-background-grey-lighter"><div class="is-v-centered">
    made by <b>Qori El-Hafizh</b> with VueJS and Bulma</div></footer>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from "vue";
import TagMenu from "@/components/TagMenu.vue";
import PageNav from "@/components/PageNav.vue";
export default defineComponent({
  components: {
    TagMenu,
    PageNav,
  },
});
</script>


