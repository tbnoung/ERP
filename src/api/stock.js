import axios from 'axios'
export default {
  async getStock (val) {
    const getBranchStock = await axios.post(`${process.env.VUE_APP_API}/stock`, val)
    return getBranchStock.data.result[0]
  },
  async UpdateStock (val) {
    const getBranchStock = await axios.patch(`${process.env.VUE_APP_API}/stock`, val)
    return getBranchStock.data.result
  },
  async Stock (val) {
    const getBranchStock = await axios.get(`${process.env.VUE_APP_API}/stock`, val)
    return getBranchStock.data.result
  }
}
