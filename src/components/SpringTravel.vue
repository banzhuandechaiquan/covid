<!--次联选择——出发/到达城市（实现）-->
<template>
  <div class="spring">
    <p class="title"> <i></i> 全国各地疫情出行隔离政策</p>
    <Cascader :options="options" label="出发城市" @onValue="getGoCity"></Cascader>
    <Cascader :options="options" label="到达城市" @onValue="getOnCity"></Cascader>
<!--    <Cascader :options="options" label="出发城市"></Cascader>-->
<!--    <Cascader :options="options" label="到达城市"></Cascader>-->
    <van-button type="info" block @click="vistProlicy">查看政策</van-button>
  </div>
</template>

<script>
  import Cascader from './Cascader'
  export default{
    name: "SpringTravel",
    mounted() {
      this.getPolicy()
    },
    components:{
      Cascader
    },
    data() {
      return {
        options:[],
        citys:[]
      };
    },
    methods: {
      getPolicy() {
        this.$axios({
          url:'city.json',
          method:'get',
        }).then(res => {
          // console.log(res);
          let currentAll = [];
          if (res.status === 200) {
            for (let i = 0; i < res.data.result.length; i++) {
              let arr = []
              for (let j = 0; j < res.data.result[i].citys.length; j++) {
                let temp2 = {
                  text:res.data.result[i].citys[j].city,
                  value:res.data.result[i].citys[j].city_id
                }
                arr.push(temp2)
              }
              let temp1 = {
                text:res.data.result[i].province,
                value:res.data.result[i].province_id,
                children:arr
              };
              currentAll.push(temp1)
            }
            this.options = currentAll;
          }
        })
      },

      getGoCity(data) {
        // console.log(data);
        this.citys.push(data)
      },
      getOnCity(data) {
        // console.log(data);
        this.citys.push(data)
      },
      vistProlicy() {
        if(this.citys.length === 2 ){
          this.$router.push({
            name:'Policy',
            params:{citys:this.citys}
          })}else{
          // console.log(this.citys);
          this.$notify({type:'danger',message:'请选择城市'})
        }
      }
    },
  };
</script>

<style scoped>
  .spring {
    width: 100%;
    background: #fff;
    margin: 10px 10px;
    box-sizing: border-box;
  }
  .spring .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
  }
  .spring .title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    /*把此元素放置在父元素的中部*/
    vertical-align: middle;
    background: #4169e2;
  }
</style>