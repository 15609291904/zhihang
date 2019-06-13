<template>
  <ul class="list">
    <!--以下@touchstart.prevent="handleTouchStart" 改了-->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart ="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['X'][0].offsetTop;
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText);
      // console.log(e.target.innerText);
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY-150;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    font-size: .16rem;
  }

    .item{
      font-size: .1rem;
      line-height: .2rem;
      text-align: center;
      color:#333333;
    }

</style>
