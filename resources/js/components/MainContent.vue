<template>
   <main>
      <div class="container">
         <div class="row py-5">
            <div class="col-12">
               <div class="row">
                  <div class="col-12">
                     <h2>Posts:</h2>
                  </div>
               </div>
               <div class="row">
                  <div class="col-12">
                     <PostCard v-for="post in posts" :key="post.id" :post="post"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>

<script>
   import PostCard from './PostCard.vue';
   import Axios from 'axios';

   export default {
      components: {
         PostCard
      },
      data: function(){
         return {
            posts: [],
         }
      },
      methods: {
         getPosts(){
            Axios.get('/api/posts').then((response) => {
               console.log(response.data.results[0]);
               this.posts = response.data.results[0];
            });
         }
      },
      created() {
         this.getPosts();
      }
   }
</script>

<style>
   
</style>