<template>
  <div v-if="color">
    <div class="color-board" :style="'background:' + color"></div>
    <el-button @click="clearColor">清空颜色</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        default: '',
      },
    },
    setup (props, context) {
      const getColorName = (color) => {
        let rel = '';

        switch (color) {
          case 'red': {
            rel = '红色';
            break;
          }
          case 'green': {
            rel = '绿色';
            break;
          }
          case 'blue': {
            rel = '蓝色';
            break;
          }
          default: {
            rel = '透明';
          }
        }

        return rel;
      };
      const clearColor = () => {
        context.emit("clearColor");
      };

      const showColor = () => {
        alert('当前颜色为' + getColorName(props.color));
      };

      return {
        clearColor,
        showColor,
      }
    }
  }
</script>

<style scoped>
  .color-board{
    width: 100px;
    height: 100px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>