<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <!-- <p>{{ name }}</p> -->
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed , ref , watch, watchEffect } from 'vue'

export default {
  name: 'Home', 
  setup() {
    // const name = computed(() => {
    //   return 'shaun'
    // })
    const search = ref('')

    const names = ref(['mario','yoshi','luigi','toad','browser','browser','koopa','peach']);

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names , search , matchingNames, handleClick }
  }
}
</script>

<style>

</style>