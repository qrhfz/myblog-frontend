<template>
  <div v-if="tags">
    <span
      v-for="tag in tags"
      :key="tag.slug"
      class="tag"
      v-on:click="toggleSelect(tag.slug)"
      v-bind:class="{ 'is-primary': isSelected(tag.slug) }"
    >
      {{ tag.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import Tag from "@/types/Tag";
export default defineComponent({
  setup() {
    const tags = ref<Tag[]>();
    const selectedTags = ref<string[]>([]);
    onMounted(() => {
      axios
        .get(process.env.VUE_APP_API_ROOT + "/tags")
        .then((res) => (tags.value = res.data))
        .catch((e) => console.log(e));
    });

    function isSelected(strTag: string) {
      return selectedTags.value?.includes(strTag);
    }

    function toggleSelect(strTag: string): void {
        
      if (!isSelected(strTag)) {
        selectedTags.value.push(strTag);
      } else {
        selectedTags.value.forEach((item, index) => {
          if (item === strTag) selectedTags.value.splice(index, 1);
        });
      }
      console.log(selectedTags)
    }
    return { tags, isSelected, toggleSelect };
  },
});
</script>


<style>
</style>