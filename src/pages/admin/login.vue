<template>
  <div class="login-wrapper">
    <mt-header fixed title="登录">
      <mt-button icon="more" slot="right" @click="registerFun"></mt-button>
    </mt-header>
    <div class="content-wrapper">
      <div class="input-wrapper">
        <div class="input-item">
          <label class="icon_phone"></label>
          <input type="text" v-model="userPhone" name="phoneNum" id="Phone" placeholder="请输入手机号" maxlength="11">
        </div>
        <div class="input-item">
          <label class="icon_psd"></label>
          <input :type="[isOpen ? 'password' : 'text']" v-model="userPsd"  name="psd" id="Psd" placeholder="请输入密码">
          <label class="eyes_open" :class="[isOpen ? '' : 'open']" @click="setEyesTypeFun"></label>
        </div>
      </div>
      <p class="forgetPsd" @click="forgetPsdFun">忘记密码</p>
      <mt-button class="loginBtn"  size="large" type="default" @click="loginBtnFun">登录</mt-button>
      <div class="otherlogintype"></div>
      <div class="otherlogin">
        <div class="icon_wechat">
          <div class="iconClasses"></div>
          <p>微信登录</p>
        </div>
        <div class="icon_alipay">
          <div class="iconClasses"></div>
          <p>支付宝登录</p>
        </div>
      </div>
      <div class="remarks"><img src="../../assets/login/ios/icon_info@2x.png">采用第三方登录后绑定手机完成注册</div>
    </div>
  </div>
</template>

<script>
import * as api from '../../../static/js/common/api/api'
import Verify from '../../../static/js/common/verify/verify'
export default {
  name: 'login-wrapper',
  data () {
    return {
      isOpen: true,
      userPhone: '',
      userPsd: ''
    }
  },
  methods: {
    // 注册跳转
    registerFun () {
      var _this = this
      _this.$router.push('/register')
    },
    // 忘记密码
    forgetPsdFun () {
      var _this = this
      _this.$router.push('/etrievepsd')
    },
    // 设置密码是否可见
    setEyesTypeFun () {
      var _this = this
      _this.isOpen = !_this.isOpen
    },
    // 登陆
    loginBtnFun () {
      var _this = this
      if (!Verify.verifyTel(_this.userPhone)) {
        _this.userPhone = ''
        return false
      } else if (_this.userPsd.length < 6) {
        Verify.showMsg('请输入不少于6位的密码')
        _this.userPsd = ''
        return false
      } else {
        var params = {
          tel: _this.userPhone,
          psd: _this.userPsd
        }
        api.login(params).then(res => {
          console.log('保存历史记录成功!')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../../static/css/common/mixin'

.login-wrapper
  width 100%
  height 100%
  padding-top 40px
  background-color #f0efed
  .mint-header
    background-color #5AAB06
  .content-wrapper
    width 100%
    height calc(100% - 40px)
    padding 0 15px
    .input-wrapper
      width 100%
      height auto
      .input-item
        position relative
        .icon_phone
          width 15px
          height 15px
          bg-image('../../assets/login/ios/icon_phone03')
          background-repeat no-repeat
          background-size auto 100%
          background-position center
          position absolute
          top 12.5px
          left 13px
          z-index 22
        .icon_psd
          width 15px
          height 15px
          bg-image('../../assets/login/ios/icon_code')
          background-repeat no-repeat
          background-size auto 100%
          background-position center
          position absolute
          top 12.5px
          left 13px
          z-index 22
        input
          display block
          width 100%
          height 40px
          line-height 40px
          margin 0 auto
          margin-top 10px
          border-radius 6px
          background-color #fff
          padding-left 34px
          border-1px(red)
          outline none
        .eyes_open
          width 30px
          height 30px
          bg-image('../../assets/login/ios/btn_invisible')
          background-repeat no-repeat
          background-size auto 100%
          background-position center
          position absolute
          top 5px
          right 8px
          z-index 22
        .open
          bg-image('../../assets/login/ios/btn_visible')
    .forgetPsd
      margin-top 15px
      color #333333
      font-size .875rem
      text-align center
    .loginBtn
      margin 56px auto 0
      width 90%
      background-color #999999
      color #ffffff
      font-size 16px
    .otherlogintype
      margin 150px auto 0
      width 60%
      height 2px
      background-color #cccccc
      position relative
      &:after
        content '其他登陆方式'
        text-align center
        color #666666
        font-size 14px
        padding 0 10px
        background-color #f0efed
        position absolute
        top -6px
        left 50%
        margin-left: -52px
    .otherlogin
      width 100%
      text-align center
      margin-top 31px
      & > div
        display inline-block
        margin 0 32px
        & > .iconClasses
          width 96px
          height 79px
          background-repeat no-repeat
          background-size contain
          background-position center
        &.icon_wechat
          .iconClasses
            bg-image('../../assets/login/ios/icon_wechat03')
        &.icon_alipay
          .iconClasses
            bg-image('../../assets/login/ios/icon_alipay03')
        & > p
          color #999999
          font-size 14px
          margin-top 10px
    .remarks
      width 80%
      color #999999
      font-size 14px
      text-align center
      margin .9375rem auto 0
      & > img
        width 18px
        height 18px
        vertical-align sub
        margin-right 6px
</style>
