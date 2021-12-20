<!--头部背景图-->
<template>
  <div class="header"></div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 33.5%;
    color: #fff;
    font-size: 0.28rem;
    text-align: center;
    background: url("../assets/img/header_bg.jpg") no-repeat center center/cover;
    /*background-size: cover;*/
  }
</style>