<template>
  <div>
    <p>当前用户名为：{{ userName }}</p>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();

      const userName = computed(() => {
        return store.state.userName;
      });

      return {
        userName,
      }
    }
  }
</script>

<style>

</style>
