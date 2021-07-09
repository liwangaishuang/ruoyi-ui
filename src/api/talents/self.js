import request from '@/utils/request'

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/specialist/self/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(id) {
  return request({
    url: '/specialist/self/' + id,
    method: 'get'
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/specialist/self',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/specialist/self',
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUser(id) {
  return request({
    url: '/specialist/self/' + id,
    method: 'delete'
  })
}

// 导出用户
export function exportUser(query) {
  return request({
    url: '/specialist/self/export',
    method: 'get',
    params: query
  })
}
