<!--全国疫情数据统计（较昨日比较）-->
<template>
  <div class="case-num">
    <div class="container">
      <div class="title">
        <span>截止 {{ caseNumberData.modifyTime | formatDate}} 全国数据统计</span>
      </div>
    </div>
    <div class="num">
      <ul class="count">
<!--        现存确诊人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(247,76,49)">
                {{ numZore(caseNumberData.currentConfirmedIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(247,76,49)">
              {{ caseNumberData.currentConfirmedCount }}
            </strong>
            <span>现存确诊</span>
          </div>
        </li>
<!--        确诊人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(247,130,7)">
                {{ numZore(caseNumberData.confirmedIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(247,130,7)">
              {{ caseNumberData.confirmedCount }}
            </strong>
            <span>累积确诊</span>
          </div>
        </li>
<!--        境外输入人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(162,90,78)">
                {{ numZore(caseNumberData.suspectedIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(162,90,78)">
              {{ caseNumberData.suspectedCount }}
            </strong>
            <span>累积境外输入人数</span>
          </div>
        </li>
<!--        治愈人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(174,33,44)">
                {{ numZore(caseNumberData.curedIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(174,33,44)">
              {{ caseNumberData.curedCount }}
            </strong>
            <span>累积治愈人数</span>
          </div>
        </li>
<!--        死亡人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(93,112,146)">
                {{ numZore(caseNumberData.deadIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(93,112,146)">
              {{ caseNumberData.deadCount }}
            </strong>
            <span>累积死亡人数</span>
          </div>
        </li>
<!--        无症状人数-->
        <li>
          <div class="create-item">
            <div class="create-count">
              <b>
                较昨日 <em style="color: rgb(40,183,163)">
                {{ numZore(caseNumberData.seriousIncr) }}
              </em>
              </b>
            </div>
            <strong style="color:rgb(40,183,163)">
              {{ caseNumberData.seriousCount }}
            </strong>
            <span>现存无症状人数</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../porducttest/src/js/date";

  export default {
    name: "CaseNumber",
    filters: {
      // 时间戳过滤器
      formatDate(time) {
        const date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    props: {
      caseNumberData:{
        type:Object,
        default:function () {
          return{}
        }
      }
    },
    methods:{
      numZore(num) {
        return num > 0 ? "+" + num : num
      }
    }
  }
</script>

<style scoped>
  .case-num {
    padding: 0.16rem;
    background: #fff;
  }
  .container {
    margin: -0.16rem 0 0;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0 0.07rem;
    line-height: 0.24rem;
  }
  .title span {
    color: #666;
  }
  .title em {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.24rem;
    margin-right: -0.16rem;
    padding: 0 0.08rem;
    color: #666;
    font-style: normal;
    background-color: #f7f7f7;
    border-radius: 0.12rem 0 0 0.12rem;
  }
  .title em img {
    width: 0.123rem;
    height: 0.123rem;
    margin-right: 0.037rem;
  }
  .num {
    position: relative;
    text-align: center;
    background: #fff;
  }
  .num::after {
    content: '';
    position: absolute;
    top: -0.01rem;
    left: -0.01rem;
    display: block;
    width: 200%;
    height: 200%;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.05);
    transform: scale(0.5);
    transform-origin: 0 0;
  }
  .num ul {
    flex-flow: wrap;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.08rem 0 0.12rem;
  }
  .num ul li {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 33.33333333%;
    margin: 10px 0;
  }
  .num ul li .create-item {
    position: relative;
    text-align: center;
  }
  .num ul li .create-item .create-count {
    display: flex;
    align-items: center;
    height: 0.12rem;
    margin-bottom: 0.02rem;
    color: #666;
    font-weight: 400;
    font-size: 0.09rem;
  }
  .num ul li .create-item .create-count em {
    font-weight: 400;
    font-style: normal;
  }
  .num ul li strong {
    margin-bottom: 0.01rem;
    font-weight: 700;
    font-size: 0.2rem;
    line-height: 0.25rem;
  }
  .num ul li span {
    display: block;
    color: #333;
    font-weight: 700;
    font-size: 0.11rem;
    line-height: 0.15rem;
  }
</style>