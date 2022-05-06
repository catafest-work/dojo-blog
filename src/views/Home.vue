<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <div v-if="error">{{ error }}</div> -->
    <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts"  />
    <!-- <PostList v-if="showPosts" :posts="posts"  /> -->
    </div>
    <!-- <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
    <div v-else>Loading ... </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
//import {ref} from 'vue' // this is removed because the return is send bby getPosts.js
import getPosts from '../composables/getPosts' // no need to use getPosts.js name just getPosts

export default {
  name: 'Home',
  components: { PostList },
  setup() {

    const { posts, error, load } = getPosts()
    
    load()
    
    return { posts, error }
  }
}
</script>

<style>
</style>