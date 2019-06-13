<template>
  <div class="header">

    <i class="iconfont icon-guanbi1" @click="goback"></i>
    <p>城市选择</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  @import "../../../assets/css/loanee.css";
  .header{
    position: relative;
    overflow: hidden;
    height: .64rem;
    line-height: .64rem;
    text-align: center;
    color:#7b7b7b;
    /*background: #f7a803;*/
    font-size: .16rem;
    padding: .2rem .12rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    .icon-guanbi1{
      text-align: center;
      font-size: .16rem;
      color: #7b7b7b;
    }

</style>
