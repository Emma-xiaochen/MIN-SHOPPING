import request from '@/utils/request'

export function fetchMenuList (params) {
  return request({
    url: '/api/menu/list',
    method: 'get',
    params
  })
}
export function fetchMenu (params) {
  return request({
    url: '/api/menu/detail',
    method: 'get',
    params
  })
}
export function createMenu (data) {
  return request({
    url: '/api/menu/create',
    method: 'post',
    data
  })
}
export function editMenu (data) {
  return request({
    url: '/api/menu/edit',
    method: 'put',
    data
  })
}
export function deleteMenu (params) {
  return request({
    url: '/api/menu/delete',
    method: 'delete',
    params
  })
}