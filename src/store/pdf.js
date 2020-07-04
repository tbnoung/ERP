import APIBill from '@/api/bill'
import APIDetailBill from '@/api/detail_bill'
import APIBranch from '@/api/branch'

const PDFAPI = {
  state: {
    detail_bill: null,
    branch: null,
    order_bill: null
  },
  mutations: {
    SetDetailOrder (state, val) {
      state.order_bill = val
      console.log(' state.order_bill', state.order_bill)
    },
    SetDetailBill (state, val) {
      state.detail_bill = val
      console.log(' state.detail_bill', state.detail_bill)
    },
    SetBranch (state, val) {
      state.branch = val
      console.log(' state.branch', state.branch)
    }
  },
  actions: {
    async getBillPDF (context, val) {
      const bill = await APIBill.getBillPDF(val)
      context.commit('SetDetailBill', bill)
      const branch = await APIBranch.Branch(val)
      context.commit('SetBranch', branch)
      const orderbill = await APIDetailBill.getDetailBill(val)
      context.commit('SetDetailOrder', orderbill)
    }
  }
}
export default PDFAPI
