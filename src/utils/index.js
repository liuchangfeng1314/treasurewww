/**
 * 获取数据状态处理
 * @param {object} data
 * */
export const checkData = (data) => {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'undefined') {
      if (data.code === 1) {
        resolve(data)
      } else {
        reject(data)
      }
    }
  })
}
