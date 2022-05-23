<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.enterSystem(this)
  },
  methods: {
    // 进入系统
    async enterSystem(_this) {
      _this.$store.dispatch("initbasicinfo", {}).then(res => {
        if (res && res === 'home') {    // 跳转首页
          this.$router.push({name: 'tmp00/home'})
        } else {                        // 其他，不处理
          // console.log(res)
        }
      });
    }
  }
}
</script>