import request from '@/config/axios'

export const ZnerpApi = {
	// 获得订单
  getOrderPage: async (params: any) => {
    return await request.get({ url: `/znerp/order/getOrderDetailList`, params })
  },

	//更新订单状态
	updateOrderStatus: async (order_id: number, status: number) => {
    return await request.put({
      url: `/znerp/order/updateStatus`,
      params: {
        order_id,
        status
      }
    })
  },
}

