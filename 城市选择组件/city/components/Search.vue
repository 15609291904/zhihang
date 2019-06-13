<template>
  <div>
        <div class="search">
          <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div
          class="search-content"
          ref="search"
          v-show="keyword"
        >
          <ul>
            <li
              class="search-item border-bottom"
              v-for="item of list"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              {{item.name}}
            </li>
            <li class="search-item border-bottom" v-show="hasNoData">
              没有找到匹配数据
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 节流函数
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city);
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']),
    goback(){
      this.$router.go(-1);
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search,{
      click:true,
    })
  }
}
</script>

<style scoped>
  .search{
    height: .36rem;
    padding: 0 .1rem;
    background: #fff;
  }

    .search-input{
      height: .3rem;
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 0 .1rem;
      line-height: .2rem;
      text-align: center;
      border-radius: .2rem;
      color: #666;
      background: #f8f8f8;
    }

  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    font-size: .16rem;
    padding:0 .2rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .search-item{
    line-height: .42rem;
    border-bottom: .02rem solid #fafafa;
    color: #1b1a2a;
    font-size: .14rem;
  }


</style>
