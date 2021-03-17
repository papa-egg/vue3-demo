<template>
  <div>
    <el-select v-model="value" placeholder="请选择颜色" @change="colorChange">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary" @click="showColor">提示</el-button>
    <color-board :color="color" ref="colorRef" @clearColor="clearColor"></color-board>
  </div>
</template>

<script>
  import { reactive, toRefs, ref } from 'vue';
  import ColorBoard from './components/color-board/ColorBoard';

  export default {
    components: {
      ColorBoard,
    },
    setup () {
      const colorRef = ref(null);
      const state = reactive({
        options: [{
          value: '',
          label: '透明'
        }, {
          value: 'red',
          label: '红色'
        }, {
          value: 'green',
          label: '绿色'
        }, {
          value: 'blue',
          label: '蓝色'
        }],
        value: '',
        color: '',
      });

      const colorChange = (val) => {
        state.color = val;
      };

      const clearColor = () => {
        state.value = '';
        state.color = '';
      };

      const showColor = () => {
        colorRef.value.showColor();
      };

      return {
        ...toRefs(state),
        colorChange,
        clearColor,
        showColor,
        colorRef,
      }
    }
  }
</script>

<style scoped>
</style>