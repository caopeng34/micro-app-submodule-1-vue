<template>
  <div>
    <van-cell-group title="功能">
      <van-cell title="测试业务" @click="onCeshi" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    onCeshi() {
      this.$router.push({name: 'ceshi99/ceshi1'})
    }
  }
}
</script>

<style scoped>

</style>