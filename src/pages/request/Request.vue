<template>
  <div>
    <p>我的名字是：<el-input v-model="name" placeholder="请输入内容"></el-input></p>
    <el-button type="success" @click="sendUserName">点击保存用户名</el-button>
  </div>
</template>

<script>
  import { reactive, toRefs, inject } from 'vue';

  export default {
    setup () {
      const $http = inject('$http');
      const state = reactive({
        name: '一颗洋葱',
      });

      const sendUserName = async () => {
        const { data } = await $http('/get-user-msg', { name: state.name, id: 123 }, true);

        console.log(data);
      };

      return {
        ...toRefs(state),
        sendUserName,
      }
    }
  }
</script>

<style scoped>
</style>