<template>
  <div class="app">
    <router-link to="/login">{{ $store.state.name }}</router-link>
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>

    <el-button>Default</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
