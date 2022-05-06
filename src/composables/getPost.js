import { ref } from 'vue'

const getPost = (id) => { // getPost use the id to load data 
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts' + id) // this is load data from URL 
      // console.log()
      if(!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { posts, error, load } // this return will be sent to the Details.vue
}

export default getPost