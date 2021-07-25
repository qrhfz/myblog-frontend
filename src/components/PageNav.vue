<template>
  <div class="level-item">
    <router-link :to="{ path: '/' }">Home</router-link>
  </div>
  <div v-if="pages">
    <div v-for="page in pages" :key="page" class="level-item">
      <router-link :to="{ path: '/page/' + page.slug }">{{
        page.title
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Page from "@/types/Page";
import axios from "axios";

export default defineComponent({
  setup() {
    const pages = ref<Page[]>();
    onMounted(() => {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/pages")
        .then((res) => (pages.value = res.data))
        .catch((e) => console.log(e));
    });
    return { pages };
  },
});
</script>


<style>
</style>