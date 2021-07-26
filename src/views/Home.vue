<template>
  <div class="home">
    <div class="columns">
      <div class="column is-10">
        <PostItem v-for="post in posts" :key="post" :post="post" />
      </div>
      <div class="column">
        <TagMenu />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import PostItem from "@/components/PostItem.vue";
import axios from "axios";
import Post from "@/types/Post";
import TagMenu from "@/components/TagMenu.vue";

// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    PostItem,
    TagMenu,
  },
  setup() {
    const posts = ref<Post[]>([]);
    onMounted(() => {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/posts")
        .then((res) => {
          posts.value = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    });
    return { posts };
  },
});
</script>
