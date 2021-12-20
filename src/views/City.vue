<template>
  <div>
    城市：{{ city }}
    <div id="city"></div>
  </div>
</template>

<script>
  export default {
    name: "City",
    mounted() {
      this. getCityData()
    },
    props:{
      city:{
        type:String,
        default:''
      }
    },
    methods:{
      async getCityData() {
        const cities = []
        await this.$axios({
          method:'get',
          url:"/api/news/wap/fymap2020_data.d.json",
        }).then(res => {
          console.log(res.data);
          if (res.status === 200) {
            for (let i = 0; i <res.data.data.list.length; i++) {
              if (res.data.data.list[i].name === this.city) {
                for(let j = 0; j <res.data.data.list[i].city.length; j++) {
                  let temp = {
                    name:res.data.data.list[i].city[j].name + "市",
                    value:res.data.data.list[i].city[j].conNum
                  }
                  cities.push(temp)
                }
              }
            }
          }
          this.$charts.provinceMap('city', this.city, cities)
        })
      }
    }
  }
</script>

<style scoped>
  #city {
    width: 375px;
    height: 500px ;
  }
</style>