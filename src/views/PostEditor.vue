<template>
<div class="columns">
  <div class="column">
      <form @submit.prevent="submit">
    <div v-if="success" class="field">Sukses</div>
    <div class="field">
      <input
        v-model="title"
        class="input"
        type="text"
        placeholder="Text input"
      />
    </div>
    <div class="field">
      <div class="control">
        <textarea v-model="body" class="textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <button class="button is-link" type="submit">Submit</button>
    </div>
    
      
  </form>
  </div>
  <div class="column">
    <div v-html="compiledMarkdown" class="block content"></div>
  </div>
  
  </div>
  
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import axios from "axios";
import marked from "marked";

export default defineComponent({
  setup() {
    const title = ref<string>();
    const body = ref<string>();
    const success = ref<boolean>();
    const compiledMarkdown = computed(() => {
      if (body.value) {
        return marked(body.value,);
      }
      return '';
    });

    function submit() {
      axios
        .post(process.env.VUE_APP_API_ROOT + "/posts", {
          title: title.value,
          body: body.value,
        })
        .then((res) => {
          success.value = true;
          return console.log(res.data);
        })
        .catch((e) => console.log(e));
    }
    return { title, body, submit, success, compiledMarkdown };
  },
});
</script>


<style>
</style>