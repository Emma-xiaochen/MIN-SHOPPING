import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/product/list',
    method: 'get',
    params
  })
}

export function fetchProduct(id) {
  return request({
    url: '/api/product/detail',
    method: 'get',
    params: { id }
  })
}

export function createProduct(data) {
  return request({
    url: '/api/product/create',
    method: 'post',
    data
  })
}

export function editProduct(data) {
  return request({
    url: '/api/product/edit',
    method: 'put',
    data
  })
}

export function deleteProduct(params) {
  return request({
    url: '/api/product/delete',
    method: 'delete',
    params
  })
}
