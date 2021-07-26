<template>
<div class="columns">
  <div class="column is-10">
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
      <div class="py-5 content" v-html="compiledBody">
        
      </div>
      <div v-if="tags">
        <router-link
          v-for="tag in tags"
          :key="tag.slug"
          :to="{ path: '/tag/' + tag.slug }"
          class="tag is-info mr-1"
          >#{{ tag.name }}</router-link
        >
      </div>
    </div>
  </div>
  </div>
  <div class="column">
    <TagMenu/>
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Post from "@/types/Post";
import axios from "axios";
import { useRoute } from "vue-router";
import { formatDate } from "@/utils";
import Tag from "@/types/Tag";
import marked from "marked";
import TagMenu from "@/components/TagMenu.vue"

export default defineComponent({
  components:{
    TagMenu
  },
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
        return formatDate(post.value.date);
      }
      return "no date";
    });

    const tags = computed((): Tag[] => {
      if (post.value?.tags) {
        return post.value?.tags;
      }
      return []
    });

    const compiledBody = computed(()=>{
      if(post.value){
        return marked(post.value.body)
      }
      return '';
    })

    return { post, tags, formattedDate, compiledBody };
  },
});
</script>


<style>
.post-body {
  white-space: pre;
}
</style>