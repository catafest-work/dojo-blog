import {ref} from 'vue' 

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts')
      // console.log()
      if(!data.ok) {
        throw Error('that post does not exist')
      }
      posts.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load } // this return will be sent to the Home.vue 
}

export default getPosts