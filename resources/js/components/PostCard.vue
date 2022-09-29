<template>
   <div class="card my-4 p-3">
      <div class="card-body">
         <h4 class="card-title">
            {{ post.title }}
         </h4>
         <small>
            {{ post.date }}
         </small>
         <p class="card-text">
            {{ post.article_text.substring(0, 150) }}
         </p>
      </div>
   </div>
</template>

<script>
   export default {
      props: [
         'post'
      ]
   }
</script>

<style>
   
</style>