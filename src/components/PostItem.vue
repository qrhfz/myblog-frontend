<template>
  <div class="mb-3">
    <h2 class="tittle is-size-4">{{post.title}}</h2>
    <span class="subtitle is-size-6 has-text-grey">{{post.date}}</span>
    <p>
      {{post.body}}
    </p>
    <p>
      <router-link :to="{ path: '/post/'+ post.id}">Read more</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Post from "@/types/Post";

export default defineComponent({
  props: {
    post: {
      required: true,
      type: Object as PropType<Post>,
    }
  },
  // setup() {

  // },
});
</script>


<style>
</style>