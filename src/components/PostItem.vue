<template>
  <div class="mb-3">
    <h2 class="tittle is-size-4">{{post.title}}</h2>
    <span class="subtitle is-size-6 has-text-grey">{{formattedDate}}</span>
    <p>
      {{slicedBody}}
    </p>
    <p>
      <router-link :to="{ path: '/post/'+ post.id}">Read more</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Post from "@/types/Post";
import { formatDate } from "@/utils";

export default defineComponent({
  props: {
    post: {
      required: true,
      type: Object as PropType<Post>,
    }
  },
  setup(props) {
    const formattedDate = computed(() => {
      if (props.post) {
        return formatDate(props.post.date)
      }
      return "no date";
    });
    const slicedBody = computed(()=>{
      return props.post.body.substring(0,140);
    })
    return {formattedDate, slicedBody}
  },
});
</script>


<style>
</style>