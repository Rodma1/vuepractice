<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <el-button></el-button> -->
    <el-button type="primary">主要按钮</el-button>
    <el-input-number v-model="num" :min="1" :max="10" @change="handleChange"></el-input-number>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    num: 5,
    data() {
      return {
        msg: 'HelloWorld'
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }

</script>

<!-- style 标签省略了 -->
