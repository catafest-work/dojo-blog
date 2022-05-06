<template>
  <div class="home">Home
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }} .</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name"> -->
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age}}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age}} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {ref, reactive } from 'vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  setup() {
    //console.log('setup');
    //console.log(this);

    /* 
    const p = ref('hello') // using the ref is a good solution but is not the last 
    */
    //console.log(p, p.value);

    // let name = ref('mario'); // using the reference for this example 
    // let age = ref(30);
    
    // const handleClick = () => {
    //   name.value = 'luigi'
    //   age.value = 35
    //   //console.log(p, p.value);
    //   // p.value.classList.add('test')
    //   // p.value.textContent = 'hello, ninjas'
    // }
    // //return { name: name, age: age}
    // return { name, age, handleClick}
    const ninjaOne = ref({name: 'mario', age: 30}) // use reference ref 
    const ninjaTwo = reactive({ name: 'luigi', age: 35 }) // use reactive 

    const nameOne = ref('mario');
    const nameTwo = reactive('luigi'); // 'luigi' this is a primitive type and is not reactive --- cannot update the {{ nameTwo }} but in this area is defined and show on web

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45 // this value "word" can be remove because is used with reactive and access direct 
      nameTwo = 'mario' // this is a primitive value and cannot update the output {{ nameTwo }}
      nameTwo = reactive('mario') // also cannot be update - don't work , ref can be better 
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo } // reference and reactive return 
  },
  // created() {
  //   console.log('created');
  // },
  // mounted() {
  //   console.log('mounted');
  // }
  data() {
    return {
      //age: 40 // NOTE: this defined age is send before age.value if is set in the data return area 
      score: 5
    }
  }
}
</script>
