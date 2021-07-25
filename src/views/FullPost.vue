<template>
  <div id="full-post">
    <div v-if="post">
      <section class="hero is-success">
        <div class="hero-body">
          <div>
            <div class="title">{{ post.title }}</div>
            <div class="subtitle">{{ formattedDate }}</div>
          </div>
        </div>
      </section>
      <div class="py-5 post-body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Post from "@/types/Post";
import axios from "axios";
import { useRoute } from "vue-router";
import {formatDate} from '@/utils'

export default defineComponent({
  setup() {
    const route = useRoute();
    const post = ref<Post>();
    onMounted(() => {
      const id = route.params.id;
      axios
        .get(process.env.VUE_APP_API_ROOT + "/posts/" + id)
        .then((res) => (post.value = res.data))
        .catch((e) => console.log(e));
    });

    const formattedDate = computed(() => {
      if (post.value) {
        return formatDate(post.value.date)
      }
      return "no date";
    });

    return { post, formattedDate };
  },
});
</script>


<style>
.post-body{
  white-space: pre;
}
</style>