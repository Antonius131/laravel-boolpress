<template>
   <section>
      <MainHeader />
      <!-- <MainContent /> -->
      <router-view></router-view>
   </section>
</template>

<script>
   import MainContent from '../components/MainContent.vue';
   import MainHeader from '../components/MainHeader.vue';

   export default {
      components: {
         MainContent,
         MainHeader,
      }
   }
</script>

<style>

</style>