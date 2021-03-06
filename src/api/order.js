import { request } from '@/utils'

// export const getHello = params => {
//   return request({
//     method: 'GET',
//     url: '/search/getHello',
//     params,
//   })
// }

// (创建订单)cloudPasswordCreateOrder
export const createOrder = data => {
  return request({
    method: 'POST',
    url: '/insertReturn/cloudPasswordCreateOrder',
    data,
  })
}

// (查询密钥算法列表)queryCryptographicAlgorithmList
export const getCryptographicAlgorithmList = params => {
  return request({
    method: 'GET',
    url: '/search/queryCryptographicAlgorithmList',
    params,
  })
}

// (查询我的全部订单)queryMyAllOrders
export const queryMyAllOrders = params => {
  return request({
    method: 'GET',
    url: '/search/queryMyAllOrders',
    params,
  })
}

// (查询我的待支付订单)queryMyToBePaidOrders
export const queryMyToBePaidOrders = params => {
  return request({
    method: 'GET',
    url: '/search/queryMyToBePaidOrders',
    params,
  })
}

// (查询我的待商户收款确认订单)queryMyCollectionConfirmOrders
export const queryMyCollectionConfirmOrders = params => {
  return request({
    method: 'GET',
    url: '/search/queryMyCollectionConfirmOrders',
    params,
  })
}

// (查询我的待配货订单)queryMyToBeDistributedOrders
export const queryMyToBeDistributedOrders = params => {
  return request({
    method: 'GET',
    url: '/search/queryMyToBeDistributedOrders',
    params,
  })
}

// (查询我的配货完成订单)queryMyDisCompletedOrders
export const queryMyDisCompletedOrders = params => {
  return request({
    method: 'GET',
    url: '/search/queryMyDisCompletedOrders',
    params,
  })
}

// (上传文件)uploadFile
// export const uploadFile = data => {
//   return request({
//     method: 'POST',
//     headers: {
//       // myType: 'multipart/form-data; boundary=<calculated when request is sent>',
//       myType: 'none',
//     },
//     url: '/uploadFile',
//     data,
//   })
// }

// (上传订单支付凭证)uploadCredentials
export const uploadCredentials = data => {
  return request({
    method: 'POST',
    url: '/local/uploadCredentials',
    data,
  })
}

// (计算订单价格)countOrderPrice
export const countOrderPrice = params => {
  return request({
    method: 'GET',
    url: '/search/countOrderPrice',
    params,
  })
}

// (通过订单ID查询我的订单)queryOrdersById
export const queryOrdersById = params => {
  return request({
    method: 'GET',
    url: '/search/queryOrdersById',
    params,
  })
}

// (通过商品名查询我的订单)queryOrdersByName
export const queryOrdersByName = params => {
  return request({
    method: 'GET',
    url: '/search/queryOrdersByName',
    params,
  })
}

// (通过下单日期查询我的订单)queryOrdersByDate
export const queryOrdersByDate = params => {
  return request({
    method: 'GET',
    url: '/search/queryOrdersByDate',
    params,
  })
}

// （展示订单详细内容）}/order/queryDetailOrder
export const queryDetailOrder = data => {
  return request({
    method: 'POST',
    url: '/order/queryDetailOrder',
    data,
  })
}
