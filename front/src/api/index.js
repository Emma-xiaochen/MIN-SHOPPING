import http from '@/utils/request';

const api = {
  // 登录
  login: (data) => http({ url: '/api/user/login', method: 'post', data }),
  // 注册
  register: (data) => http({ url: '/api/user/create', method: 'post', data }),
  // 获取用户信息
  getUserInfo: (params) => http({ url: '/api/user/detail', method: 'get', params }),
  // 编辑用户信息
  editUserInfo: (data) => http({ url: '/api/user/edit', method: 'put', data }),
  // 获取商品列表
  getProductList: (params) => http({ url: '/api/product/list', method: 'get', params }),
  // 获取商品详情
  getProductDetail: (params) => http({ url: '/api/product/detail', method: 'get', params })
}

export default api