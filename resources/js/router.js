import Vue from "vue";
import VueRouter from "vue-router";

Vue.use('VueRouter')

import TagsList from './pages/TagsList';

const router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/tags',
         name: 'tags',
         component: TagsList
      }
   ]
})

export default router