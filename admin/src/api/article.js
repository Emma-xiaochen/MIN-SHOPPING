import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/api/article/list',
    method: 'get',
    params
  })
}

export function fetchArticle(id) {
  return request({
    url: '/api/article/detail',
    method: 'get',
    params: { id }
  })
}

export function createArticle(data) {
  return request({
    url: '/api/article/create',
    method: 'post',
    data
  })
}

export function editArticle(data) {
  return request({
    url: '/api/article/edit',
    method: 'put',
    data
  })
}

export function deleteArticle(params) {
  return request({
    url: '/api/article/delete',
    method: 'delete',
    params
  })
}
