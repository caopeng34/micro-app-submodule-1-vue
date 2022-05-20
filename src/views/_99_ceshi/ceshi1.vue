<template>
  <div class="pagerootdiv">
    <v-vant-pack-page
        navbartitle="测试1页面"
        navbarleft="返回"
        navbarright=""
        pageareaid="editid"
        pagebackgroundColor="#f4f4f4"
        @navbarOnLeft="back"
        @navbarOnRight="console.log()"
    >
      <h3 style="text-align: center;">子应用</h3>
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="测试2" @click="onCeshi2"/>
        <van-grid-item icon="photo-o" text="文字"/>
        <van-grid-item icon="photo-o" text="文字"/>
      </van-grid>
      <img style="margin: 20vw;width: 60vw;" src="../../assets/img/logo.png">
    </v-vant-pack-page>
  </div>
</template>

<script>
import VVantPackPage from "microcommon/src/components/v-vant-pack/page/index1";

export default {
  name: "ceshi1",
  components: {
    VVantPackPage,
  },
  created() {
    // 设置路由返回名（公共mixins中）
    this.returnroute = '-1'
  },
  mounted() {
    console.log('>>>')
  },
  methods: {
    // 覆盖公共返回方法
    back() {
      console.log(this.$store.state.subbackmain)
      // 子应用向基座应用发送数据
      window.microApp.dispatch({type: 'back', subbackmain: this.$store.state.subbackmain}) // dispatch只接受对象作为参数
    },
    // 测试页面
    onCeshi2() {
      this.$router.push({name: 'ceshi99/ceshi2'})
    },
  }
}
</script>

<style scoped>

</style>