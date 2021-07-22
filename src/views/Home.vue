<template>
  <div class="home">
    <PostItem v-for="post in posts" :key="post" :post="post"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PostItem from '@/components/PostItem.vue'
import axios from 'axios'
import Post from '@/types/Post';

// @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    PostItem
  },
  setup(){
    const posts = ref<Post[]>([])
    onMounted(()=>{
      axios.get(process.env.VUE_APP_API_ROOT+'/post').then((res)=>{
        posts.value = res.data
      }).catch(e=>{
        console.log(e)
      })
    })
    return {posts}
  }
});
</script>
