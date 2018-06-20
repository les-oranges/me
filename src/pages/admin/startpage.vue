<template>
  <div class="startPage"></div>
</template>

<script>
let timmer = null
let n = 3

export default {
  name: 'startPage',
  mounted: function () {
    var _this = this
    _this.$nextTick(() => {
      _this.bb()
    })
  },
  methods: {
    bb () {
      var _this = this
      console.log(_this)
      timmer = setInterval(() => {
        --n
        console.log(n)
        if (n === 0) {
          clearInterval(timmer)
          timmer = null
          _this.$router.push('/login')
        } else if (n === -1) {
          n = 3
        }
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .startPage
    width: 100%
    height: 100%
    background-image:url('../../assets/startpage/ios/default750x1334.png')
    // background-image:url('../assets/startpage/ios/default1125x2436.png)
    // background-image:url('../assets/startpage/ios/default1242x2208.png')
    background-repeat no-repeat
    background-size cover
    background-position center center
</style>
