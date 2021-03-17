<template>
  <div>
    <input v-model="userName" placeholder="请输入">
    <button @click="setName">确定</button>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup () {
      const store = useStore();
      const state = reactive({
        userName: '',
      });

      const setName = () => {
        const { userName } = state;

        if (userName) {
          store.dispatch('setUserName', userName);
        }
      };

      return {
        ...toRefs(state),
        setName,
      }
    }
  }
</script>

<style>
</style>