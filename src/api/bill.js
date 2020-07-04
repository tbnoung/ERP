import axios from 'axios'
export default {
  async getBill () {
    const getBill = await axios.get(`${process.env.VUE_APP_API}/bill`)
    console.log(getBill)
    return getBill.data
  },
  async addBill (val) {
    const addBill = await axios.post(`${process.env.VUE_APP_API}/addbill`, val)
    return addBill.data
  },
  async getBillPDF (val) {
    const addBill = await axios.post(`${process.env.VUE_APP_API}/getbill`, val)
    return addBill.data.result[0]
  }
}
