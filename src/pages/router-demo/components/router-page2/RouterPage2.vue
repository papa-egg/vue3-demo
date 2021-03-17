<template>
  <div>
    <div>
      <p>This is page2</p>
      link to <router-link to="/router-demo/page1">page1</router-link>
      <el-button type="primary" @click="toPage1">主动触发</el-button>
    </div>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';

  export default {
    setup () {
      const { push } = useRouter();

      const toPage1 = () => {
        push('/router-demo/page1');
      };

      return {
        toPage1,
      }
    }
  }
</script>

<style>
</style>