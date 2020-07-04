import axios from 'axios'
export default {
  async getBranch () {
    const getBranch = await axios.get(`${process.env.VUE_APP_API}/getbranch`)
    return getBranch.data.result
  },
  async Branch (val) {
    console.log('object', val)
    const getBranch = await axios.post(`${process.env.VUE_APP_API}/getbranch`, val)
    return getBranch.data.result[0]
  }
}
