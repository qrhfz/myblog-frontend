<template>
<div class="mb-2">
    <div class="headline">
    <div class="mr-1">
      <router-link :to="{ path: '/post/' + post.id }" class="title is-4">{{
        post.title
      }}</router-link>
    </div>

    <div v-if="post.tags">
      <span
        ><router-link
          v-for="tag in post.tags"
          :key="tag.slug"
          :to="{ path: '/tag/' + tag.slug }"
          class="tag is-info mr-1"
          >#{{ tag.name }}</router-link
        ></span
      >
    </div>
  </div>

  <span class="subtitle is-6 has-text-grey">{{ formattedDate }}</span>
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
    },
  },
  setup(props) {
    const formattedDate = computed(() => {
      if (props.post.date) {
        return formatDate(props.post.date);
      }
      return "no date";
    });
    return { formattedDate };
  },
});
</script>

<style>
div.headline {
  display: flex;
  align-items: center; /* align vertical */

}
</style>