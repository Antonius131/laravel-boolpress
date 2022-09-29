<template>
   <section>
      <div class="container">
         <div class="row py-5">
            <div class="col-12">
               <ul class="list-group">
                  <li class="list-group-item"
                     v-for="tag in tags"
                     :key="tag.id">
                        {{ tag.tag_name }}
                  </li>
               </ul>a
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   import Axios from 'axios';

   export default {
      data: function(){
         return {
            tags: [],
         }
      },
      methods: {
         getTags(){
            Axios.get('/api/tags').then((response) => {
               this.tags = response.data.results;
            });
         }
      },
      created() {
         this.getTags();
      }
   }
</script>

<style>

</style>