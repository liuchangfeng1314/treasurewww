/**
 * vuex - getters
 * 根据业务类型，做数据分发
 */
const getters = {
  getListDataByName: (state) => (name) => {
    return state.allSelectorData.find(data => data.name === name)
  }
}

export default getters