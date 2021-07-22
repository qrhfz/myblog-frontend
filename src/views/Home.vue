<template>
  <div class="home">
    <PostItem/>
    <PostItem/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostItem from '@/components/PostItem.vue'
// @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    PostItem
  },
});
</script>
