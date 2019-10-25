import getters from './getters'

const state = {
  isLogin: false,
  // 当前选择的公司代码
  currChoosedCompany: null,
  showPullDom: false,
  pullstart: false,
  pullmove: false,
  pullRefreshing: false,
  showSearchArea: false
}

export default{
  state,
  actions: require('./actions').default,
  getters,
  mutations: require('./mutations').default
}
