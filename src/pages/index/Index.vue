<template>
  <div>
    <el-table
        :data="tableList"
        style="width: 100%">
      <el-table-column
          prop="des"
          label="描述"
          width="500">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="skip(scope.row.url)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { reactive, toRefs } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    setup () {
      const { push } = useRouter();

      const state = reactive({
        tableList: [
          {
            des: '接口请求demo',
            url: '/request',
          },
          {
            des: 'vuex的演示demo',
            url: '/vuex-demo',
          },
          {
            des: '路由跳转的演示demo',
            url: '/router-demo/page1',
          },
          {
            des: '父子之间信息通信事件传递的demo',
            url: '/transmit',
          },
        ]
      });

      const skip = (url) => {
        if (url) {
          push(url);
        }
      };

      return {
        ...toRefs(state),
        skip
      }
    }
  }
</script>

<style>
</style>