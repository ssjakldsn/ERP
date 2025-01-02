import request from '@/config/axios'

export const ZnerpApi = {
	// 获得订单
  getOrderPage: async (params: any) => {
    return await request.get({ url: `/znerp/order/page2`, params })
  },

	// 修改订单状态
	updateOrderStatus: async (data: any) => {
    return await request.put({
      url: `/znerp/order/update`,
      data: data
    })
  },

	// 创意生产团队-修改接口 类型：1=画图师；2=制版师；3=生产员
  getDraftsPage: async (params: any) => {
    return await request.get({ url: `/znerp/draftsman/page`, params })
  },	

	// 创意生产团队-领图接口
  updateDraftsPage: async (data: any) => {
    return await request.post({ url: `/znerp/draftsman/create`, data: data })
  },	

	// 画图师-修改接口
	draftsmanUpdate: async (data: any) => {
    return await request.put({
      url: `/znerp/draftsman/update`,
      data: data
    })
  },

	// 子订单-修改
	orderItemUpdate: async (data: any) => {
    return await request.put({
      url: `/znerp/order-items/update`,
      data: data
    })
  },	

	// 物流模块 - 创建物流渠道
  logisticsCreate: async (data: any) => {
    return await request.post({ url: `/znerp/logistics-channel/create`, data: data })
  },	

	// 物流模块 - 修改物流渠道
  logisticsUpdate: async (data: any) => {
    return await request.put({
      url: `/znerp/logistics-channel/update`,
      data: data
    })
  },	

	// 获得物流渠道分页
  logisticsPage: async (params: any) => {
    return await request.get({ url: `/znerp/logistics-channel/page`, params })
  },

	// 删除物流渠道
  deleteLogistics: async (id: number) => {
    return await request.delete({ url: `/znerp/logistics-channel/delete?id=` + id })
  },	

	// 创建报关模板
  logisticsCustomsCreate: async (data: any) => {
    return await request.post({ url: `/znerp/logistics-customs-temp/create`, data: data })
  },	

	// 修改报关模板
  logisticsCustomsUpdate: async (data: any) => {
		return await request.put({
      url: `/znerp/logistics-customs-temp/update`,
      data: data
    })
  },	

	// 获得报关模板分页
  logisticsCustomsPage: async (params: any) => {
    return await request.get({ url: `/znerp/logistics-customs-temp/page`, params })
  },	

	// 删除报关模板
  deleteLogisticsCustoms: async (id: number) => {
    return await request.delete({ url: `/znerp/logistics-customs-temp/delete?id=` + id })
  },	

	// 获得发件人地址分页
  senderAddrPage: async (params: any) => {
    return await request.get({ url: `/znerp/order-sender-addresses/page`, params })
  },		

	// 创建发件人地址
  senderAddrCreate: async (data: any) => {
    return await request.post({ url: `/znerp/order-sender-addresses/create`, data: data })
  },	

	// 更新发件人地址
  senderAddrUpdate: async (data: any) => {
		return await request.put({
      url: `/znerp/order-sender-addresses/update`,
      data: data
    })
  },

  // 删除发件人地址
  deleteSenderAddr: async (id: number) => {
    return await request.delete({ url: `/znerp/order-sender-addresses/delete?id=` + id })
  },	

	// 物流订单-生成运单号
  logisticsOrderCreate: async (data: any) => {
		return await request.put({
      url: `/znerp/logistics-order/create`,
      data: data
    })
  },

	// 店铺管理 - 获得店铺管理分页
  shopPage: async (params: any) => {
    return await request.get({ url: `/znerp/shop/page`, params })
  },		

	// 店铺管理 - 创建店铺管理
  shopCreate: async (data: any) => {
    return await request.post({ url: `/znerp/shop/create`, data: data })
  },	

	// 店铺管理 - 更新店铺信息
  shopUpdate: async (data: any) => {
		return await request.put({
      url: `/znerp/shop/update`,
      data: data
    })
  },

  // 店铺管理 - 删除店铺信息
  deleteShop: async (id: number) => {
    return await request.delete({ url: `/znerp/shop/delete?id=` + id })
  },	

	// 申请运单号
	logisticsOrderSend: async (data: any) => {
    return await request.put({
      url: `/znerp/logistics-order/send`,
      data: data
    })
  },	

	// 主订单-回退订单
  rollbackOrderItems: async (params: any) => {
    return await request.get({ url: `/znerp/order/rollbackOrderItems`, params })
  },		

}

