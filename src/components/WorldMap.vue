<!--世界疫情地图-->
<template>
  <div >
    <p class="title"><i></i> 疫情地图</p>
    <div id="worldMap"></div>
  </div>
</template>

<script>
  export default {
    name: "WorldMap",
    mounted() {
      // this.$charts.worldMap('worldMap')
      this.getWorldMap()
    },
    methods:{
      getWorldMap() {
        this.$axios({
          method:'get',
          url:'http://api.tianapi.com/ncovabroad/index',
          params:{
            key:'d0de1cae1f8f6d058e99a8e368784dd7'
          }
        }).then( res => {
          // console.log(res.data);
          const allCountries = []
          for(let i = 0;i < res.data.newslist.length;i++) {
            // console.log('hhh');
            const temp = {
              name: res.data.newslist[i].provinceName,      //国家名称
              value: res.data.newslist[i].confirmedCount,    //国家累计确诊人数
            }
            allCountries.push(temp)
          }
          this.$charts.worldMap('worldMap',allCountries)
        }).catch( err =>{
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  #worldMap {
    width: 100%;
    height: 400px;
  }
  .title{
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
  }
  .title::before {
    content: '';
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
  }
</style>