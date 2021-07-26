<template>
  <div>
    <div class="is-size-5">Tags</div>

    <ul v-if="tags">
      <li v-for="tag in tags" :key="tag.slug">
        <router-link :to="{ path: '/tag/' + tag.slug }" class="tag is-info mb-1"
          >#{{ tag.name }}
        </router-link>
      </li>
    </ul>
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