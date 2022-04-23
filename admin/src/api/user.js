import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/user/list',
    method: 'get',
    params
  })
}

export function fetchUser(id) {
  return request({
    url: '/api/user/detail',
    method: 'get',
    params: { id }
  })
}

export function createUser(data) {
  return request({
    url: '/api/user/create',
    method: 'post',
    data
  })
}

export function editUser(data) {
  return request({
    url: '/api/user/edit',
    method: 'put',
    data
  })
}

export function deleteUser(params) {
  return request({
    url: '/api/user/delete',
    method: 'delete',
    params
  })
}
