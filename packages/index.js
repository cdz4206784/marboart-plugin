// 整合并导出组件
import testPanel from './panel/panel.vue'
import testToast from './toast/toast.vue'

// 以数组的结果保存组件，更于遍历
const components = [
    testPanel,
    testToast
]

// 定义 install 方法
const install = function(Vue){
    if(install.installed) return
    install.installed = true

    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}