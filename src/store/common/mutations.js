const mutations = {
  USER_LOGIN_STATUS(state, data) {
    state.isLogin = data
  },
  CURR_CHOOSED_COMPANY(state, data) {
    state.currChoosedCompany = data
  }
}

export default mutations
