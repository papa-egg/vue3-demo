<template>
  <div>
    <div>
      <p>This is page1</p>
      link to <router-link to="/router-demo/page2">page2</router-link>
      <el-button type="primary" @click="toPage2">主动触发</el-button>
    </div>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';

  export default {
    setup () {
      const { push } = useRouter();

      const toPage2 = () => {
        push('/router-demo/page2');
      };

      return {
        toPage2,
      }
    }
  }
</script>

<style>
</style>