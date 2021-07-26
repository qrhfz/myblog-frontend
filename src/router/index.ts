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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/post/new',
    name: 'Post Editor Create',
    component: PostEditor
  },
  {
    path:'/tag/manage',
    name: 'Post Editor Create',
    component: TagManager
  },
  {
    path: '/post/:id/edit',
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
