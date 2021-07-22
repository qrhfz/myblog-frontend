<template>
  <div class="container p-3">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title is-size-4">Qori El-Hafizh</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item"><router-link to="/">Home</router-link></div>
        <div class="level-item">
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-9">
        <router-view :key="$route.fullPath"/>
      </div>
      <div class="column is-3">
        <TagMenu/>
      </div>
    </div>
  </div>
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
</template>

<style>
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import TagMenu from "@/components/TagMenu.vue";
export default defineComponent({
components:{
  TagMenu,
}
})
</script>


