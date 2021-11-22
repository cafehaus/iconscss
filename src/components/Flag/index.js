// 为组件提供 install 安装方法，供按需引入
import Flag from './Flag.vue'

Flag.install  = Vue => Vue.component(Flag.name, Flag)
export default Flag