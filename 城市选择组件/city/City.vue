<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import $api from '../../apis/api'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {

    async getCityInfo () {

      const res = await $api.get("/api/index/getAreaList");
      // console.log(res);
      if(res.code==1){

        this.handleGetCityInfoSucc(res);

      }else if(res.code==0){

      }else{

      }
    },
    handleGetCityInfoSucc (res) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>
@import "../../assets/css/loanee.css";
</style>
