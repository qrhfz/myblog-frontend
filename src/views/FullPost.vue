<template>
  <div id="full-post">
    <div v-if="post">
      {{post.body}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Post from "@/types/Post";
import axios from "axios";
import { useRoute } from 'vue-router'

export default defineComponent({
  
  setup() {
    const route = useRoute()
    const post = ref<Post>();
    onMounted(() => {
      const id = route.params.id
      axios
        .get("http://localhost:3000/post/" + id)
        .then((res) => (post.value = res.data))
        .catch((e) => console.log(e));
    });
    return { post };
  },
});
</script>


<style>
</style>