import request from '@/utils/request'

// 查询人才专家库列表
export function specialistListUser(query) {
  return request({
    url: '/declare/specialist/specialist/list',
    method: 'get',
    params: query
  })
}

// 查询人才移除管理列表
export function selectRemoveList(query) {
  return request({
    url: '/declare/specialist/remove/list',
    method: 'get',
    params: query
  })
}

// 查询人才申报审批列表
export function examineListUser(query) {
  return request({
    url: '/declare/specialist/examine/list',
    method: 'get',
    params: query
  })
}

// 查询注册用户列表
export function registeredList(query) {
  return request({
    url: '/declare/specialist/registered/list',
    method: 'get',
    params: query
  })
}

// 用户状态修改
export function changeUserStatus(userId, status) {
  const data = {
    userId,
    status
  }
  return request({
    url: '/system/user/changeStatus',
    method: 'put',
    data: data
  })
}

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/declare/specialist/list',
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

// 修改用户
export function updatePassword(userId, password) {
  const data = {
    userId,
    password
  }
  return request({
    url: '/declare/specialist/edit',
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
