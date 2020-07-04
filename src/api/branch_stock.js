import axios from 'axios'
export default {
  async getBranchStock (val) {
    const getBranchStock = await axios.post(`${process.env.VUE_APP_API}/getbranchstock`, val)
    return getBranchStock.data.result
  }
}
