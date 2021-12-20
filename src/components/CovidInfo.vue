<!--病毒信息-->
<template>
  <div class="info">
    <p class="title">
      <i></i>
      病毒信息
    </p>
    <div class="content">
      <p>{{ covidInfo.note1 }}</p>
      <p>{{ covidInfo.note2 }}</p>
      <p>{{ covidInfo.note3 }}</p>
      <p>{{ covidInfo.remark1 }}</p>
      <p>{{ covidInfo.remark2 }}</p>
      <p>{{ covidInfo.remark3 }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CovidInfo",
    props:{
      covidInfo:{
        type:Object,
        default:function() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .info {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
  }
  .title {
    font-size: 0.17rem;
  }
  .title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    /*把此元素放置在父元素的中部*/
    vertical-align: middle;
    background: #4169e2;
  }
  .content {
    padding: 0.06rem 0.16rem;
  }
  .content p {
    font-size: 13px;
    margin: 5px 0;
  }
</style>