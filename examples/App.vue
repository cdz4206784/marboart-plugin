<template>
  <div id="app">
    <div>test</div>
    <p>
      <button @click="getChildrenFn">点击触发子组件的toast</button>
    </p>

    <p>点击面板上的内容</p>
    <test-panel ref="panel"></test-panel>
    <test-toast ref="toast"></test-toast>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data (){
    return {
      testArr: [1,2,6]
    }
  },
  created (){
    // 这里调用全局属性
    console.log(this.$msg)

    // 这里调用全局方法
    console.log(this.$myMethod(this.testArr))

    // 获取子组件的dom
    this.$nextTick(()=>{
      console.log(this.$refs.panel.$el)
    })
  },
  methods: {
    // 调用插件方法，传入所需参数
    getChildrenFn(){
      this.$nextTick(()=>{
        this.$refs.toast.toastPlugin('在父组件里调用的toast', 2500)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
