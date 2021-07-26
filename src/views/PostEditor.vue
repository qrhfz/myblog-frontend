<template>
  <div class="columns">
    <div class="column">
      <form @submit.prevent="submit">
        <div v-if="success" class="field">Sukses</div>
        <div class="field">
          <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="Text input"
          />
        </div>
        <div class="field">
          <div class="control">
            <textarea v-model="post.body" class="textarea"></textarea>
          </div>
        </div>
        <div class="field">
          <button class="button is-link" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div class="column">
        <TagSelection/>
      <div v-html="compiledMarkdown" class="block content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import marked from "marked";
import Post from "@/types/Post"
import TagSelection from "@/components/TagSelection.vue"

export default defineComponent({
  components:{
    TagSelection
  },
  setup() {
    const route = useRoute();
    const post : Post = reactive({title: '', body:''})

    const success = ref<boolean>();
    const compiledMarkdown = computed(() => {
      if (post) {
        return marked(post.body);
      }
      return "";
    });

    onMounted(() => {
      if (route.params.id) {
        axios
          .get(process.env.VUE_APP_API_ROOT + "/posts/" + route.params.id)
          .then((res) => {
            post.title = res.data.title
            post.body = res.data.body
          })
          .catch((e) => console.log(e));
      }
    });

    function submit() {
      if (route.params.id) {
        axios
          .patch(process.env.VUE_APP_API_ROOT + "/posts/" + route.params.id, post)
          .then((res) => {
            success.value = true;
            return console.log(res.data);
          })
          .catch((e) => console.log(e));
      } else {
        axios
          .post(process.env.VUE_APP_API_ROOT + "/posts", post)
          .then((res) => {
            success.value = true;
            return console.log(res.data);
          })
          .catch((e) => console.log(e));
      }
    }
    return { submit, success, compiledMarkdown, post };
  },
});
</script>


<style>
</style>