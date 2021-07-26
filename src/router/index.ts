import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import FullPost from '../views/FullPost.vue'
import Page from '../views/Page.vue'
import Tag from '../views/Tag.vue'
import PostEditor from '../views/PostEditor.vue'
import TagManager from '../views/TagManager.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/admin/post-editor/',
    name: 'Post Editor Create',
    component: PostEditor
  },
  {
    path:'/admin/tag-manager/',
    name: 'Post Editor Create',
    component: TagManager
  },
  {
    path: '/admin/post-editor/:id',
    name: 'Post Editor Update',
    component: PostEditor
  },
  {
    path: '/post/:id',
    name: 'Full Post',
    component: FullPost
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: Page
  },
  {
    path:'/tag/:id',
    name: 'Tag',
    component: Tag
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
