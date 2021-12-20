<!--国内外疫情地图tab组件-->
<template>
  <div id="Tabs">
    <ul class="tabs-header">
      <li id="tab-china" :class="isUseChina?'tab active':'tab'" @click="selectChina">国内疫情</li>
      <li id="tab-world":class="isUseWorld?'tab active':'tab'" @click="selectWorld">国外疫情</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Tabs",
    data() {
      return{
        isUseChina:true,
        isUseWorld:false
      }
    },
    methods:{
      selectChina() {
        this.$router.push('/home/tabs/chinaMap')
        this.isUseChina = true
        this.isUseWorld = false
      },
      selectWorld() {
        this.$router.push('/home/tabs/worldMap')
        this.isUseChina = false
        this.isUseWorld = true
      }
    }
  }
</script>

<style scoped>
 .tabs-header {
   display: flex;
   list-style: none;
   margin: 0;
   padding: 0;
   border-bottom: 2px solid #ededed;
 }
  .tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
    font-size: 0.17rem;
  }
 .tab.active {
    border-bottom: 2px solid blue;
  }
</style>