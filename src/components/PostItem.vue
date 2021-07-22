<template>
  <div class="mb-3">
    <h2 class="is-size-4">{{post.title}}</h2>
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