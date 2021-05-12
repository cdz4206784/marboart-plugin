// 用于导出单个组件，如果要做按需引入，也需要在这里配置
import testToast from './toast.vue'

// 为组件添加 install 方法，用于按需引入
testToast.install = function(Vue){
    Vue.component(testToast.name, testToast)
}

export default testToast