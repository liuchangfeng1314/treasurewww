import getters from './getters'

const state = {
  isLogin: false,
  // 当前选择的公司代码
  currChoosedCompany: null
}

export default{
  state,
  actions: require('./actions').default,
  getters,
  mutations: require('./mutations').default
}
