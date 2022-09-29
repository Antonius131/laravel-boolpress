import VueRouter from "vue-router";

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