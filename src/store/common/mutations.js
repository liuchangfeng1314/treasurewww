const mutations = {
  USER_LOGIN_STATUS(state, data) {
    state.isLogin = data
  },
  CURR_CHOOSED_COMPANY(state, data) {
    state.currChoosedCompany = data
  },
  SHOW_PULL_DOM(state, data) {
    state.showPullDom = data
  },
  PULL_START(state, data) {
    state.pullstart = data
  },
  PULL_MOVE(state, data) {
    state.pullmove = data
  },
  PULL_REFRESHING(state, data) {
    state.pullRefreshing = data
  },
  SHOW_SEARCH_AREA(state, data) {
    state.showSearchArea = data
  }
}

export default mutations
