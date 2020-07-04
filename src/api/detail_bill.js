import axios from 'axios'
export default {
  async addDetailBill (val) {
    const addDetailBill = await axios.post(`${process.env.VUE_APP_API}/adddetailbill`, val)
    return addDetailBill.data.result
  },
  async getDetailBill (val) {
    console.log('---------', val)
    const getDetailBill = await axios.post(`${process.env.VUE_APP_API}/getdetailbill`, val)
    return getDetailBill.data.result
  }
}
