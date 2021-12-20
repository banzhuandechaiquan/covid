import echarts from "echarts";
import axisTrigger from "echarts/src/component/axisPointer/axisTrigger";

const install = function (Vue) {
  Object.defineProperties(Vue.prototype ,{
    $charts:{
      get() {
        return {
          // 中国地图
          chinaMap:function (id,data) {
            const dom = document.getElementById(id);
            const myCharts = echarts.init(dom);
            const option = {
              // 提示信息
              tooltip:{
                enterable:true,         //是否可以操作
                triggerOn:"click",      //事件类型-点击
                formatter(data) {
                  // 显示提示信息并通过a标签跳转到city.vue页面
                  return "<a href='/#/city/"+data.name+"' style='color: #fff'><p>" + data.name +"</p><p>累计确诊:" + data.value + "</p></a> "
                }
              },
              series: [{
                // 资源配置
                name: '省',
                type: 'map',      // 配置图表类型
                map: 'china',     // 中国地图
                roam: false,      // 是否允许自动缩放
                zoom: 1.2,        // 地图缩放比例
                // aspectScale: 0.75,
                label: {          // 配置字体
                  normal: {
                    show: true,   //控制地图显示名字
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)',
                      fontSize:8
                    }
                  }
                },
                itemStyle: {     //配置地图样式
                  normal: {
                    areaColor: 'rgba(0, 255, 236,0.1)',
                    borderColor:'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis: {
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                // data:[
                //   {name:"内蒙古",value:10,itemStyle:{normal:{areaColor:"#f00"}}}
                // ]
                data:data
              }],
              visualMap:[{
                // orient:"horizontal",
                type:"piecewise",
                pieces:[
                  {min:0,max:0,color:"#FFF"},
                  {min:1,max:9,color:"#FFE5DB"},
                  {min:10,max:99,color:"#FFE5DB"},
                  {min:100,max:999,color:"#F57567"},
                  {min:1000,max:9999,color:"#E64546"},
                  {min:10000,color:"#4F070D"},
                ]
              }]
            }
            myCharts.setOption(option)
          },
          // 世界地图
          worldMap:function (id,data) {
            // echarts世界地图转中文
            let nameMap = {
              Afghanistan: '阿富汗',
              Singapore: '新加坡',
              Angola: '安哥拉',
              Albania: '阿尔巴尼亚',
              'United Arab Emirates': '阿联酋',
              Argentina: '阿根廷',
              Armenia: '亚美尼亚',
              'French Southern and Antarctic Lands':
                  '法属南半球和南极领地',
              Australia: '澳大利亚',
              Austria: '奥地利',
              Azerbaijan: '阿塞拜疆',
              Burundi: '布隆迪',
              Belgium: '比利时',
              Benin: '贝宁',
              'Burkina Faso': '布基纳法索',
              Bangladesh: '孟加拉国',
              Bulgaria: '保加利亚',
              'The Bahamas': '巴哈马',
              'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
              Belarus: '白俄罗斯',
              Belize: '伯利兹',
              Bermuda: '百慕大',
              Bolivia: '玻利维亚',
              Brazil: '巴西',
              Brunei: '文莱',
              Bhutan: '不丹',
              Botswana: '博茨瓦纳',
              'Central African Republic': '中非共和国',
              Canada: '加拿大',
              Switzerland: '瑞士',
              Chile: '智利',
              China: '中国',
              'Ivory Coast': '象牙海岸',
              Cameroon: '喀麦隆',
              'Democratic Republic of the Congo': '刚果民主共和国',
              "Dem. Rep. Congo": "刚果（金）",
              // 'Republic of the Congo': '刚果（金）',
              Colombia: '哥伦比亚',
              'Costa Rica': '哥斯达黎加',
              Cuba: '古巴',
              'Northern Cyprus': '北塞浦路斯',
              Cyprus: '塞浦路斯',
              'Czech Republic': '捷克共和国',
              Germany: '德国',
              Djibouti: '吉布提',
              Denmark: '丹麦',
              'Dominican Republic': '多明尼加共和国',
              Algeria: '阿尔及利亚',
              Ecuador: '厄瓜多尔',
              Egypt: '埃及',
              Eritrea: '厄立特里亚',
              Spain: '西班牙',
              Estonia: '爱沙尼亚',
              Ethiopia: '埃塞俄比亚',
              Finland: '芬兰',
              Fiji: '斐',
              'Falkland Islands': '福克兰群岛',
              France: '法国',
              Gabon: '加蓬',
              'United Kingdom': '英国',
              Georgia: '格鲁吉亚',
              Ghana: '加纳',
              Guinea: '几内亚',
              Gambia: '冈比亚',
              'Guinea Bissau': '几内亚比绍',
              Greece: '希腊',
              Greenland: '格陵兰',
              Guatemala: '危地马拉',
              'French Guiana': '法属圭亚那',
              Guyana: '圭亚那',
              Honduras: '洪都拉斯',
              Croatia: '克罗地亚',
              Haiti: '海地',
              Hungary: '匈牙利',
              Indonesia: '印度尼西亚',
              India: '印度',
              Ireland: '爱尔兰',
              Iran: '伊朗',
              Iraq: '伊拉克',
              Iceland: '冰岛',
              Israel: '以色列',
              Italy: '意大利',
              Jamaica: '牙买加',
              Jordan: '约旦',
              Japan: '日本',
              Kazakhstan: '哈萨克斯坦',
              Kenya: '肯尼亚',
              Kyrgyzstan: '吉尔吉斯斯坦',
              Cambodia: '柬埔寨',
              Kosovo: '科索沃',
              Kuwait: '科威特',
              Laos: '老挝',
              Lebanon: '黎巴嫩',
              Liberia: '利比里亚',
              Libya: '利比亚',
              'Sri Lanka': '斯里兰卡',
              Lesotho: '莱索托',
              Lithuania: '立陶宛',
              Luxembourg: '卢森堡',
              Latvia: '拉脱维亚',
              Morocco: '摩洛哥',
              Moldova: '摩尔多瓦',
              Madagascar: '马达加斯加',
              Mexico: '墨西哥',
              Macedonia: '马其顿',
              Mali: '马里',
              Myanmar: '缅甸',
              Montenegro: '黑山',
              Mongolia: '蒙古',
              Mozambique: '莫桑比克',
              Mauritania: '毛里塔尼亚',
              Malawi: '马拉维',
              Malaysia: '马来西亚',
              Namibia: '纳米比亚',
              'New Caledonia': '新喀里多尼亚',
              Niger: '尼日尔',
              Nigeria: '尼日利亚',
              Nicaragua: '尼加拉瓜',
              Netherlands: '荷兰',
              Norway: '挪威',
              Nepal: '尼泊尔',
              'New Zealand': '新西兰',
              Oman: '阿曼',
              Pakistan: '巴基斯坦',
              Panama: '巴拿马',
              Peru: '秘鲁',
              Philippines: '菲律宾',
              'Papua New Guinea': '巴布亚新几内亚',
              Poland: '波兰',
              'Puerto Rico': '波多黎各',
              'North Korea': '北朝鲜',
              Portugal: '葡萄牙',
              Paraguay: '巴拉圭',
              Qatar: '卡塔尔',
              Romania: '罗马尼亚',
              Russia: '俄罗斯',
              Rwanda: '卢旺达',
              'Western Sahara': '西撒哈拉',
              'Saudi Arabia': '沙特阿拉伯',
              Sudan: '苏丹',
              'South Sudan': '苏丹',
              'S. Sudan':'南苏丹',
              "Côte d'Ivoire": "科特迪瓦",
              Senegal: '塞内加尔',
              'Solomon Islands': '所罗门群岛',
              'Sierra Leone': '塞拉利昂',
              'El Salvador': '萨尔瓦多',
              Somaliland: '索马里兰',
              Somalia: '索马里',
              'Republic of Serbia': '塞尔维亚',
              Suriname: '苏里南',
              Slovakia: '斯洛伐克',
              Slovenia: '斯洛文尼亚',
              Sweden: '瑞典',
              Swaziland: '斯威士兰',
              Syria: '叙利亚',
              Chad: '乍得',
              Togo: '多哥',
              Thailand: '泰国',
              Tajikistan: '塔吉克斯坦',
              Turkmenistan: '土库曼斯坦',
              'East Timor': '东帝汶',
              'Trinidad and Tobago': '特里尼达和多巴哥',
              Tunisia: '突尼斯',
              Turkey: '土耳其',
              'United Republic of Tanzania': '坦桑尼亚',
              Uganda: '乌干达',
              Ukraine: '乌克兰',
              Uruguay: '乌拉圭',
              'United States': '美国',
              Uzbekistan: '乌兹别克斯坦',
              Venezuela: '委内瑞拉',
              Vietnam: '越南',
              Vanuatu: '瓦努阿图',
              'West Bank': '西岸',
              Yemen: '也门共和国',
              'South Africa': '南非',
              Zambia: '赞比亚共和国',
              Korea: '韩国',
              Tanzania: '坦桑尼亚',
              Zimbabwe: '津巴布韦',
              Congo: '刚果（布）',
              'Central African Rep.': '中非共和国',
              Serbia: '塞尔维亚',
              'Bosnia and Herz.': '波黑',
              'Czech Rep.': '捷克',
              'W. Sahara': '西撒哈拉',
              'Lao PDR': '老挝',
              'Dem.Rep.Korea': '朝鲜',
              'Falkland Is.': '福克兰群岛',
              'Timor-Leste': '东帝汶',
              'Solomon Is.': '所罗门群岛',
              Palestine: '巴勒斯坦',
              'N. Cyprus': '北塞浦路斯',
              Aland: '奥兰群岛',
              'Fr. S. Antarctic Lands': '法属南半球和南极陆地',
              Mauritius: '毛里求斯',
              Comoros: '科摩罗',
              'Eq. Guinea': '赤道几内亚',
              'Guinea-Bissau': '几内亚比绍',
              'Dominican Rep.': '多米尼加',
              'Saint Lucia': '圣卢西亚',
              Dominica: '多米尼克',
              'Antigua and Barb.': '安提瓜和巴布达',
              'U.S. Virgin Is.': '美国原始岛屿',
              Montserrat: '蒙塞拉特',
              Grenada: '格林纳达',
              Barbados: '巴巴多斯',
              Samoa: '萨摩亚',
              Bahamas: '巴哈马',
              'Cayman Is.': '开曼群岛',
              'Faeroe Is.': '法罗群岛',
              'IsIe of Man': '马恩岛',
              Malta: '马耳他共和国',
              Jersey: '泽西',
              'Cape Verde': '佛得角共和国',
              'Turks and Caicos Is.': '特克斯和凯科斯群岛',
              'St. Vin. and Gren.': '圣文森特和格林纳丁斯'
            }
            const dom = document.getElementById(id);
            const myCharts = echarts.init(dom);
            const option = {
              // 提示信息
              tooltip:{
                triggerOn:"click",
                formatter(data) {
                  return "<div><p>" + data.name +"</p><p>累计确诊:" + data.value + "</p></div>"
                }
              },
              // 资源配置
              series: [{
                // echarts世界地图转中文
                nameMap: nameMap,
                name: '世界地图',
                type: 'map',      // 配置图表类型
                map: 'world',     // 世界地图
                roam: false,      // 是否允许自动缩放
                zoom: 1.2,        // 地图缩放比例
                // aspectScale: 0.75,
                label: {          // 配置字体
                  normal: {
                    show: false,   //控制地图显示名字
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)',
                      fontSize:8
                    }
                  }
                },
                itemStyle: {     //配置地图样式
                  normal: {
                    areaColor: 'rgba(0, 255, 236,0.1)',
                    borderColor:'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis: {
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                data:data
              }],
              visualMap:[{
                // orient:"horizontal",
                type: 'piecewise',                  // 定义为分段型 visualMap
                splitNumber:4,                      //对于连续型数据，自动平均切分成几段。默认为5段
                itemWidth:15,
                pieces:[
                  {min:0,max:0,color:"#FFF"},
                  {min:1,max:4999,color:"#FFE5DB"},
                  {min:5000,max:9999,color:"#FFC4B3"},
                  {min:10000,max:100000,color:"#FF9985"},
                  {min:100000,color:"#FF6A57"},
                  // {min:100000,max:1000000,conpmlor:"#FF6A57"},
                  // {min:100000,max:5000000,color:"#FF6A57"},
                  // {min:500000,max:10000000,color:"#B80909"},
                  // {min:10000000,color:"#4F070D"},
                ]
              }]
            }
            myCharts.setOption(option)
          },
          // 中国各省份地图
          provinceMap:function (id,cityName,data) {
            // console.log(data);
            const dom = document.getElementById(id);
            const myCharts = echarts.init(dom);
            const option = {
              // 提示信息
              tooltip:{
                triggerOn:"click",
                formatter(data) {
                  return "<div><p>" + data.name +"</p><p>累计确诊:" + data.value + "</p></div>"
                }
              },
              // 资源配置
              series: [{
                name: '市',
                type: 'map',      // 配置图表类型
                map: cityName,     // 各省份地图
                roam: false,      // 是否允许自动缩放
                zoom: 1.2,        // 地图缩放比例
                // aspectScale: 0.75,
                label: {          // 配置字体
                  normal: {
                    show: true,   //控制地图显示名字
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)',
                      fontSize:8
                    }
                  }
                },
                itemStyle: {     //配置地图样式
                  normal: {
                    areaColor: 'rgba(0, 255, 236,0.1)',
                    borderColor:'rgba(0, 0, 0, 0.2)'
                  },
                  emphasis: {
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                // data:[
                //   {name:"内蒙古",value:10,itemStyle:{normal:{areaColor:"#f00"}}}
                // ]
                data:data
              }],
              visualMap:[{
                orient:"horizontal",
                type:"piecewise",
                pieces:[
                  {min:0,max:0,color:"#FFF"},
                  {min:1,max:9,color:"#FFE5DB"},
                  {min:10,max:99,color:"#FFE5DB"},
                  {min:100,max:999,color:"#F57567"},
                  {min:1000,max:9999,color:"#E64546"},
                  {min:10000,color:"#4F070D"},
                ]
              }]
            }
            myCharts.setOption(option)
          }
        }
      }
    }
  })
}

export default install