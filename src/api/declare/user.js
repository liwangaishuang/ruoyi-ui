import request from '@/utils/request'

// 查询用户列表
export function examineListUser(query) {
  return request({
    url: '/declare/specialist/examine/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细
export function getUser(id) {
  return request({
    url: '/declare/specialist/' + id,
    method: 'get'
  })
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/declare/specialist',
    method: 'post',
    data: data
  })
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/declare/specialist',
    method: 'put',
    data: data
  })
}

// 删除用户
export function delUser(id) {
  return request({
    url: '/declare/specialist/' + id,
    method: 'delete'
  })
}

// 导出用户
export function exportUser(query) {
  return request({
    url: '/declare/specialist/export',
    method: 'get',
    params: query
  })
}

// 导出word
export function exportWord(query) {
  return request({
    url: '/declare/specialist/exportWord',
    method: 'get',
    params: query
  })
}
