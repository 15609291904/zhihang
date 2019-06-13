<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom currentCityHeader">当前城市</div>
        <div class="button-list">
          <div class="">
            <div class="currCityBtn" style="">
              {{curCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.id)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom abHeader">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.id)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import $api from '../../../apis/api'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data(){
    return{
      curCity:'',
      // cData:[],
    }
  },
  watch:{
    // hot: function(newVal,oldVal){
    //   console.log(newVal,oldVal);
    //   this.cData = newVal;  //newVal即是chartData
    //   // this.drawChart();
    // }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    async handleCityClick (cityid) {
      let par2 = {
        'city_id':cityid,
      };
      const res2 = await $api.get("/api/index/index",par2);
      console.log(par2,res2);
      if(res2.code==1){
        // this.curCity = res2.data.city.name
      }else if(res2.code==0){
        // this.curCity = res2.msg;
      }else{

      }
      this.$router.push('/');
    },
    // 获取当前城市
    async getCityInfo () {

      const res1 = await $api.get("/api/index/index");
      // console.log(res1);
      if(res1.code==1){
          this.curCity = res1.data.city.name
      }else if(res1.code==0){
        this.curCity = res1.msg;
      }else{

      }
    },
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      // 点击事件不生效问题
        click:true
    });
    // 获取当前城市
    this.getCityInfo();
  }
}
</script>

<style scoped>
  .border-topbottom{
    border-color: #ccc;
  }

  .list{
    overflow: hidden;
    position: absolute;
    top: 1.1rem;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: .16rem;
  }

    .title{
      line-height: .34rem;
      /*background: #eee;*/
      padding-left: .2rem;
      color: #666;
      font-size: .14rem;
    }

    .button-list{
      overflow: hidden;
      /*padding: .1rem .6rem .1rem .1rem;*/
      padding: 0 .1rem;
    }

      .button-wrapper{
        float: left;
        width: 20%;
      }

        .button{
          margin: .1rem;
          height:.28rem;
          line-height: .28rem;
          text-align: center;
          border-radius: .22rem;
          background: #f7a803;
          color: white;
          font-size: .12rem;
        }
.currCityBtn{
  height: .4rem;
  line-height: .4rem;
  font-size: .18rem;
  color: #0a0a0a;
  font-weight: 600;
  text-align: left;
  padding-left: .12rem;
}
  .item-list{
    padding:0 .2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
    .item-list .item{
      line-height: .42rem;
      border-bottom: .02rem solid #fafafa;
      color: #1b1a2a;
      font-size: .14rem;
    }
.abHeader{
  background: #f8f8f8!important;
  height: .16rem;
  font-size:.1rem ;
  line-height: .16rem;
}
</style>
