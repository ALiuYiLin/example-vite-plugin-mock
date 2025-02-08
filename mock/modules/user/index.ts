import { MockMethod } from 'vite-plugin-mock'
import { ResponseData } from '../../types'
import Mock from 'mockjs'

// 用户列表接口
const getUserList = {
  url: '/api/users',
  method: 'get',
  response: (): ResponseData => ({
    code: 200,
    data: Mock.mock({
      'list|10': [
        {
          'id|+1': 1,
          name: '@cname',
          email: '@email',
          'age|20-60': 1
        }
      ]
    }),
    message: 'success'
  })
}

// 用户详情接口
const getUserDetail = {
  url: '/api/user/:id',
  method: 'get',
  response: ({ query }): ResponseData => ({
    code: 200,
    data: Mock.mock({
      id: query.id,
      name: '@cname',
      email: '@email'
    }),
    message: 'success'
  })
}

export default [getUserList, getUserDetail] as MockMethod[]
