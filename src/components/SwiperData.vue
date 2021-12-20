<!--swiper图片轮播-->
<template>
  <div id="SwiperData" class="chart">
    <h3 class="title"> <i></i> 全国疫情趋势</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in SwiperData" :key="index">
        <img :src="item.url" alt="">
      </swiper-slide>
    </swiper>
    <ul class="navigator">
      <li class="navigatorItem" :class="{'active':index === currentIndex}"
          @click="clickHandle(index)" v-for="(item,index) in SwiperData" :key="index">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    name: "SwiperData",
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
    },
    data() {
      let that = this;
      return {
        currentIndex:0,
        SwiperData:[
          {url:require("../assets/img/swiper/swiper01.png"),title:'新增疑似/新增确诊'},
          {url:require("../assets/img/swiper/swiper02.png"),title:'现存确诊/现存疑似'},
          {url:require("../assets/img/swiper/swiper03.png"),title:'死亡/治愈'},
          {url:require("../assets/img/swiper/swiper04.png"),title:'病死率'},
          {url:require("../assets/img/swiper/swiper05.png"),title:'治愈率'},
        ],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          on: {
            slideChangeTransitionEnd:function () {
              // console.log(this.activeIndex);      //切换结束后，显示这是第几个index
              // this.currentIndex = this.activeIndex   //此时的this是指swiper对象，拿不到vue的data数据
              that.currentIndex = this.activeIndex
            }
          },
          // autoplay: {
          //   stopOnLastSlide:true,
          //   disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
          //   delay: 3000, // 自动切换的时间间隔（单位ms）
          // },
          // observer:true,//修改swiper自己或子元素时，自动初始化swiper
          // observeParents:true,//修改swiper的父元素时，自动初始化swiper
        },
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
      clickHandle(index) {
        this.swiper.slideTo(index, 1000, false)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .line {
    padding: 0 10px;
    width: 100%;
    height: 300px;
  }
  .chart {
    position: relative;
    background: #fff;
    padding: 0.16rem 0;
    width: 100%;
    /*让屏幕底部不出现滚动条*/
    overflow-x:hidden;
  }
  .chart .title {
    font-size: 0.16rem;
    margin: 0 0 0.08rem 0.16rem;
  }
  .chart .title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.16rem;
    margin-right: 0.03rem;
    /*把此元素放置在父元素的中部*/
    vertical-align: middle;
    background: #4169e2;
  }
  .chart .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms opacity;
    -o-transition: 300ms opacity;
    transition: 300ms opacity;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .chart.swiper-pagination-bullet {
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
  }
  .navigator {
    font-size: 0.12rem;
    list-style: none;
    display: flex;
    padding: 0 0.16rem;
    justify-content: center;
    margin: 0.06rem 0 0;
  }
  .navigatorItem {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
    width: calc(20% - 0.02rem);
    text-align: center;
    background: #f7f7f7;
    padding: 0.045rem;
    box-sizing: border-box;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.02rem;
    margin-left: 0.025rem;
  }
  .active {
    color: #4169e2;
    background: #f1f5ff;
    position: relative;
  }
</style>