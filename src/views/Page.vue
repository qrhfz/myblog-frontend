<template>
  <div id="page-content">
    <div v-if="page">
      <h1 class="title">{{page.title}}</h1>
      <div>
        {{page.body}}
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Page from "@/types/Page";
import axios from "axios";
import { useRoute } from 'vue-router'

export default defineComponent({
  
  setup() {
    const route = useRoute()
    const page = ref<Page>()
    onMounted(() => {
      const id = route.params.id
      axios
        .get(process.env.VUE_APP_API_ROOT+'/pages/' + id)
        .then((res) => (page.value = res.data))
        .catch((e) => console.log(e))
    });
    return { page };
  },
});
</script>


<style>
</style>