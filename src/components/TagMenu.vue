<template>
  <div>
    <div class="is-size-5">Tags</div>

    <router-link
      v-for="tag in tags"
      :key="tag.id"
      :to="{ path: '/tag/' + tag.id }"
      ><span class="tag is-info is-medium is-rounded m-1"
        >#{{ tag.name }}</span
      ></router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import Tag from "@/types/Tag";
export default defineComponent({
  setup() {
    const tags = ref<Tag[]>();
    onMounted(() => {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/tags")
        .then((res) => (tags.value = res.data))
        .catch((e) => console.log(e));
    });
    return { tags };
  },
});
</script>



<style>
</style>