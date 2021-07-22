<template>
  <div>
      <div v-if="tag">
        <div class="title">#{{tag.name}}</div> 
        <PostItem v-for="post in tag.posts" :key="post" :post="post"/>
      </div>
      
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import PostItem from '@/components/PostItem.vue';
import axios from 'axios';
import Tag from '@/types/Tag';
import { useRoute } from 'vue-router';

// @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    PostItem
  },
  setup(){
    const tag = ref<Tag>()
    const route = useRoute()
    
    onMounted(()=>{
        
      axios.get(process.env.VUE_APP_API_ROOT+'/tags/'+route.params.id).then((res)=>{
        tag.value = res.data
      }).catch(e=>{
        console.log(e)
      })
    })
    return {tag}
  }
});
</script>


<style>

</style>