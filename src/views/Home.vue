<template>
  <div class="home">
    <Header></Header>
    <covidInfo :covidInfo="covidInfo"></covidInfo>
    <caseNumber :caseNumberData="caseNumberData"></caseNumber>
    <router-view></router-view>
    <SwiperData></SwiperData>
    <SpringTravel></SpringTravel>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import covidInfo from "../components/CovidInfo"
import caseNumber from "../components/CaseNumber"
import Map from "../components/ChinaMap"
import SwiperData from "../components/SwiperData"
import SpringTravel from "../components/SpringTravel"

export default {
  created() {
    this.getNcov()
  },
  name: 'Home',
  components: {
    Header,
    covidInfo,
    caseNumber,
    Map,
    SwiperData,
    SpringTravel
  },
  data() {
    return {
      // 疫情病毒信息：covidInfo
      covidInfo:{
        note1:'',
        note2:'',
        note3:'',
        remark1:'',
        remark2:'',
        remark3:'',
      },
      // 案例数据
      caseNumberData:{
        modifyTime:'', // 案例截止时间
        currentConfirmedCount:'', //现存确诊人数
        confirmedCount:'', //累计确诊人数
        suspectedCount:'', //累计境外输入人数
        curedCount:'', //累计治愈人数
        deadCount:'', //累计死亡人数
        seriousCount:'', //现存无症状人数
        suspectedIncr:'', //新增境外输入人数
        currentConfirmedIncr:'', //相比昨天现存确诊人数
        confirmedIncr:'', //相比昨天累计确诊人数
        curedIncr:'', //相比昨天新增治愈人数
        deadIncr:'', //相比昨天新增死亡人数
        seriousIncr:'', //相比昨天现存无症状人数
      }
    }
  },
  methods:{
    async getNcov() {
      await this.$axios({
        methods: 'get',
        url:'http://api.tianapi.com/ncov/index',
        params:{
          key:'d0de1cae1f8f6d058e99a8e368784dd7'
        }
      }).then(res => {
        // console.log(res.data);
        if(res.status === 200) {
          // 疫情病毒信息数据
          this.covidInfo.note1 = res.data.newslist[0].desc.note1
          this.covidInfo.note2 = res.data.newslist[0].desc.note2
          this.covidInfo.note3 = res.data.newslist[0].desc.note3
          this.covidInfo.remark1 = res.data.newslist[0].desc.remark1
          this.covidInfo.remark2 = res.data.newslist[0].desc.remark2
          this.covidInfo.remark3 = res.data.newslist[0].desc.remark3
          // 疫情病例数据
          this.caseNumberData.modifyTime = res.data.newslist[0].desc.modifyTime
          this.caseNumberData.currentConfirmedCount = res.data.newslist[0].desc.currentConfirmedCount
          this.caseNumberData.confirmedCount = res.data.newslist[0].desc.confirmedCount
          this.caseNumberData.suspectedCount = res.data.newslist[0].desc.suspectedCount
          this.caseNumberData.curedCount = res.data.newslist[0].desc.curedCount
          this.caseNumberData.deadCount = res.data.newslist[0].desc.deadCount
          this.caseNumberData.seriousCount = res.data.newslist[0].desc.seriousCount
          this.caseNumberData.suspectedIncr = res.data.newslist[0].desc.suspectedIncr
          this.caseNumberData.currentConfirmedIncr = res.data.newslist[0].desc.currentConfirmedIncr
          this.caseNumberData.confirmedIncr = res.data.newslist[0].desc.confirmedIncr
          this.caseNumberData.curedIncr = res.data.newslist[0].desc.curedIncr
          this.caseNumberData.deadIncr = res.data.newslist[0].desc.deadIncr
          this.caseNumberData.seriousIncr = res.data.newslist[0].desc.seriousIncr
          // console.log(this.caseNumberData);
        }
      }).catch(err => {
        console.log(err);})
    }
  }
}
</script>
