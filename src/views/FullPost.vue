<template>
  <div id="full-post">
    <div v-if="post">
      <section class="hero is-success">
        <div class="hero-body">
          <div>
            <div class="title">{{post.title}}</div>
      <div class="subtitle">{{post.date}}</div>
          </div>
        </div>
      </section>
      <div class="py-5">
        {{post.body}}
      </div>
      
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
    const post = ref<Post>()
    onMounted(() => {
      const id = route.params.id
      axios
        .get(process.env.VUE_APP_API_ROOT+'/post/' + id)
        .then((res) => (post.value = res.data))
        .catch((e) => console.log(e))
    });
    return { post };
  },
});
</script>


<style>
</style>