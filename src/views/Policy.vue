<template>
  <div class="policy">
    <div class="go">
      <p class="text-in">出</p>
      <div class="text-body">
        <div class="title">
          <!--        <p class="text-city">{{ citys[0].text }}</p>-->
          <p class="text-city">{{ citys[0].text }}</p>
          <p class="text-risk">低风险地区</p>
        </div>
        <div class="text-policyIn">出城政策</div>
        <div class="text-content">
          临近国庆假期，建议广大市民群众如非必要，不要前往中高风险地区；
          如需出行，请注意做好个人防护和防控要求。
        </div>
        <div class="line">
          <div class="text-source">数据来源：当地卫健委和权威网站</div>
          <div class="text-time">发布时间：2021-9-28</div>
        </div>
      </div>
    </div>

    <div class="on">
      <p class="text-in">入</p>
      <div class="text-body">
        <div class="title">
          <!--        <p class="text-city">{{ citys[0].text }}</p>-->
          <p class="text-city">{{ citys[1].text }}</p>
          <p class="text-risk">低风险地区</p>
        </div>
        <div class="text-policyIn">入城政策</div>
        <div class="text-content">
          1.对有高风险地区旅居史的来（返）穗人员实施“集中隔离14天”（时间从离开所在地级市、盟、州、直辖市的区开始计算，下同）
          ，在第1、4、7、10、14天开展核酸检测。
          <br>
          2.对有中风险地区（或经评估需参照中风险地区管理的）旅居史的来（返）穗人员实施“居家隔离14天”，
          在第1、4、7、10、14天开展核酸检测。
          <br>
          3.对有高风险地区（或经评估需参照高风险地区管理的）所在地级市（盟、州、直辖市的区）旅居史的来（返）穗人员实施
          “居家隔离7天+居家健康监测7天”，在第1、3、7、14开展核酸检测。
          <br>
          4.对有本土阳性个案地级市（盟、州、直辖市的区）旅居史的来（返）穗人员实施 “三天两检”（间隔24小时）和14天居家健康监测
          ，在第7天、第14天分别做一次核酸检测。
          <br>
          5.对国内有本土疫情发生的外省（自治区、直辖市）来（返）穗人员，抵穗后在机场、火车站或24小时内尽早就近做一次核酸检测，
          并自我健康监测14天。
          <br>
          6.其他省（自治区、直辖市）外来（返）穗人员抵穗后应48小时内主动做一次核酸检测。
        </div>
        <div class="line">
          <div class="text-source">数据来源：当地卫健委和权威网站</div>
          <div class="text-time">发布时间：2021-9-28</div>
        </div>
      </div>
    </div>

    <div class="footer">
      补充说明：以上信息可能更新不及时或有错误，请及时关注官方新政策，若前往某地村镇或社区，可联系当地政府部门进行咨询。
    </div>
  </div>
</template>

<script>
  export default {
    name: "Policy",
    created() {
      // console.log(this.citys);
    },
    props:{
      citys:{
        type:Array,
        default:function () {
          return []
        }
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .go {
    width: 100wh;
    margin: 0.1rem 0.2rem;
    padding: 0.1rem 0.1rem;
    background: #ffffff;
    border-radius: 5%;
    display: flex;
    /*overflow: hidden;*/
  }
  .on {
    width: 100wh;
    margin: 0.1rem 0.2rem;
    padding: 0.1rem 0.1rem;
    background: #ffffff;
    border-radius: 5%;
    display: flex;
    /*overflow: hidden;*/
  }
  .text-in {
     font-size: 0.1rem;
     color: #fff;
     height: 100%;
     /*width: 100%;*/
     background: #F03838;
     padding: 0.025rem;
     border-radius: 50%;
     margin-top: 0.05rem;
   }
  .title {
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 0.05rem;
  }
  .text-city {
    font-size: 0.25rem;
    font-weight: bold;
    margin-left: 0.05rem;
  }
  .text-risk {
    font-size: 0.1rem;
    border: 1px #B8C959 solid;
    color: #B8C959;
    margin-left: 0.05rem;
    padding: 0.02rem;
  }
  .text-policyIn {
    font-size: 0.2rem;
    font-weight: bold;
    font-family: 黑体;
    margin-bottom: 0.05rem;
  }
  .text-content {
    font-size: 0.15rem;
    margin-bottom: 0.05rem;
  }
  .footer {
    width: 90%;
    margin: 0.25rem auto;
  }
</style>