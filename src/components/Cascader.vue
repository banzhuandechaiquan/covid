<!--次联选择——出发/到达城市（组件）-->
<template>
  <div>
    <van-field
            v-model="City"
            is-link
            readonly
            :label="label"
            placeholder="请选择所在地区"
            @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
              v-model="cascaderValue"
              title="请选择所在地区"
              :options="options"
              @close="show = false"
              @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "Cascader",
    data() {
      return {
        show: false,
        City: '',
        cascaderValue: '',
        // 选项列表，children 代表子选项，支持多级嵌套
        // options: [
        //   {
        //     text: '浙江省',
        //     value: '330000',
        //     children: [{text: '杭州市', value: '330100'}],
        //   },
        //   {
        //     text: '江苏省',
        //     value: '320000',
        //     children: [{text: '南京市', value: '320100'}],
        //   },
        // ],
      };
    },
    props:{
      options:{
        type:Array,
        default:function () {
          return []
        }
      },
      label:{
        type:String,
        default: ''
      }
    },
    methods: {
      // 全部选项选择完毕后，会触发 finish 事件
      onFinish({ selectedOptions }) {
        // console.log(selectedOptions);
        this.show = false;
        // this.fieldValue = selectedOptions.map((option) => option.text).join('/');
        this.City = selectedOptions.map((option) => option.text).join('/');
        this.$emit('onValue',selectedOptions[1])
      },
    },
  }
</script>

<style scoped>

</style>