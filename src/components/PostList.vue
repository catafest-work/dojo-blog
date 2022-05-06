<template>
  <div class="post-list">
    <!-- set template from each post with v-for based on Home.vue -->
    <div v-for="post in posts" :key="post.id">
      <!-- <h3>{{ post.title }}</h3> -->
      <SinglePost :post="post" />
    </div> 
  </div>
</template>
<script>
import { onMounted , onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
  props: ['posts'], 
  components: { SinglePost },
  // export the posts 
  // using the 'setup' with 'this'
  setup(props) {
    //console.log(props);
    //console.log(props.posts);
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component unmounted'))
    onUpdated(() => console.log('component updated'))
  }//,
  // mounted() {
  //   console.log('mounted using options api');
  // },
  // mounted() {

  // },
  // updated() {

  // }
}
</script>
<style></style>