import Api from '../../api'
import { checkData as _checkData } from '../../utils'

let actions = {
  handler: () => {}
}
/**
 * commit工厂函数
 * 根据api.config.mjs导出的模型生成各业务逻辑API处理方法
 * mutation函数名和api名字一致
 * @param {*} ApiMap
 */
function _factory(ApiMap) {
  for (let api in ApiMap) {
    // 遍历生成各个业务数据逻辑的actions
    actions[api] = ({commit}, params) => {
      return Api[api](params).then(data => {
        return _checkData(data).then(data => {
          commit(api, { ...data, ...params })
          return data
        }).catch(data => {
          commit(api, { ...data, ...params })
          return data
        })
      }).catch(err => {
        // 网络问题
        console.log('Network error ' + err.message)
      })
    }
  }
}

// common api
_factory(Api)

// 获取用户登录状态
export const fetchUserLoginStatus = ({ commit }, data) => {
  commit('USER_LOGIN_STATUS', data)
}
// 公共加载组件状态
export const setLoadingStatus = ({ commit }, data) => {
  commit('COMMON_LOADING_STATUS', data)
}

// 设置当前所选择的公司代码
export const setCurrentChoosedCompany = ({ commit }, data) => {
  commit('CURR_CHOOSED_COMPANY', data)
}

export default {
  ...actions,
  fetchUserLoginStatus,
  setCurrentChoosedCompany
}
