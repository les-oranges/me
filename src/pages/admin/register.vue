<template>
  <div class="register-wrapper">
    <mt-header fixed title="注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'register-wrapper',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
