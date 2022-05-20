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
        if (res) {
          console.log(res)
        }
      });
    }
  }
}
</script>