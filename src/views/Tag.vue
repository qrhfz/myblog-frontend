<template>
  <div class="columns">
    <div class="column is-10">
      <div>
        <div v-if="tag">
          <div class="title">#{{ tag.name }}</div>
          <PostItem v-for="post in tag.posts" :key="post" :post="post" />
        </div>
      </div>
    </div>
    <div class="column">
      <TagMenu />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import PostItem from "@/components/PostItem.vue";
import axios from "axios";
import Tag from "@/types/Tag";
import { useRoute } from "vue-router";
import TagMenu from "@/components/TagMenu.vue";

// @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    PostItem,
    TagMenu,
  },
  setup() {
    const tag = ref<Tag>();
    const route = useRoute();

    onMounted(() => {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/tags/" + route.params.id)
        .then((res) => {
          tag.value = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    });
    return { tag };
  },
});
</script>


<style>
</style>