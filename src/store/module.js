import APIBill from '@/api/bill'
import APIBranch from '@/api/branch'
import APIBranchStock from '@/api/branch_stock'
import APIDetailBill from '@/api/detail_bill'
import APIStock from '@/api/stock'
import moment from 'moment'
const Module = {
  state: {
    sumary: 0,
    data_listorder: '',
    dialog_purchase: false,
    dialog_listorder: false,
    table_purchase: [],
    table_order: [],
    table_stock: [],
    name_purchase: '',
    name_seller: 'Tbnoung',
    address: {
      house_number: '-',
      village: '-',
      sub_district: '-',
      district: '-',
      province: '-',
      tel: '-'
    },
    ItemSelect: ''
  },
  mutations: {
    changeDialog_purchase (state) {
      state.dialog_purchase = !state.dialog_purchase
    },
    changeDialog_listorder (state) {
      state.dialog_listorder = !state.dialog_listorder
    },
    SetSumary (state, val) {
      state.sumary = val
    },
    SetDataListOrder (state, val) {
      state.data_listorder = val
    },
    SetBranch (state, val) {
      state.ItemSelect = val
    },
    SetDataTableStock (state, val) {
      state.table_stock = val
    },
    PushDataTableOrder (state, val) {
      state.table_order = val
    },
    PushDataTablePurchase (state, val) {
      state.table_purchase = val
    },
    ResetAddress (state, val) {
      state.address = val
      state.name_purchase = ''
    },
    SetAddress (state, val) {
      state.address = state.ItemSelect[val]
      state.name_purchase = state.ItemSelect[val].name
    }
  },
  actions: {
    async GetStock (context) {
      const data = await APIStock.Stock()
      context.commit('SetDataTableStock', data)
    },
    async CheckStock (context) {
      const dataOrder = context.state.table_order
      const status = { value: false }
      for (let index = 0; index < dataOrder.length; index++) {
        const data = await APIStock.getStock(dataOrder[index])
        if (data.quality < dataOrder[index].quality) {
          status.value = true
          status.name = data.name
          break
        }
        console.log('Check stock', data)
      }
      if (status.value === true) {
        console.log('Check status', status)
      } else {
        context.dispatch('Addbill')
      }
    },
    async getBranchStock (context, val) {
      const data = await APIBranchStock.getBranchStock(val)
      context.commit('SetDataListOrder', data)
    },
    async getBranch (context) {
      const data = await APIBranch.getBranch()
      context.commit('SetBranch', data)
    },
    async getOrder (context) {
      // const data = await APIBranch.getBranch()
      // console.log('getBranch', data)
    },
    async getBill (context) {
      const data = await APIBill.getBill()
      context.commit('PushDataTablePurchase', data.result)
    },
    SetAddress (context) {
      const data = {
        house_number: '-',
        village: '-',
        sub_district: '-',
        district: '-',
        province: '-',
        tel: '-'
      }
      context.commit('ResetAddress', data)
    },
    Sumary (context) {
      console.log('เข้า Summary')
      const data = context.state.table_order
      let sumary = 0
      for (let index = 0; index < data.length; index++) {
        sumary += data[index].sumary
      }
      context.commit('SetSumary', sumary)
    },
    PlusDataTableOrder (context, val) {
      const dataOrder = context.state.table_order
      console.log('object', dataOrder)
      const SelectIndex = (element) => element.name === val.name
      const index = dataOrder.findIndex(SelectIndex)
      dataOrder[index].quality += 1
      dataOrder[index].sumary = dataOrder[index].quality * dataOrder[index].price
      context.commit('PushDataTableOrder', dataOrder)
      context.dispatch('Sumary')
    },
    InsertQuality (context, val) {
      console.log('vallllll', val)
      const dataOrder = context.state.table_order
      const SelectIndex = (element) => element.name === val.name
      const index = dataOrder.findIndex(SelectIndex)
      dataOrder[index].quality = val.quality
      dataOrder[index].sumary = dataOrder[index].quality * dataOrder[index].price
      context.commit('PushDataTableOrder', dataOrder)
      context.dispatch('Sumary')
    },
    MinusDataTableOrder (context, val) {
      const dataOrder = context.state.table_order
      const SelectIndex = (element) => element.name === val.name
      const index = dataOrder.findIndex(SelectIndex)
      dataOrder[index].quality -= 1
      dataOrder[index].sumary = dataOrder[index].quality * dataOrder[index].price
      context.commit('PushDataTableOrder', dataOrder)
      context.dispatch('Sumary')
    },
    PushDataTableOrder (context, val) {
      console.log('ข้อมูลที่เลือก', val)
      const dataTableOrder = context.state.table_order
      const dataSearch = dataTableOrder.filter(data => data.name === val.name)
      console.log(dataSearch)
      if (dataSearch.length === 0) {
        dataTableOrder.push({
          order: dataTableOrder.length + 1,
          quality: val.qty,
          name: val.name,
          discount: val.discount,
          price: val.price,
          sumary: val.qty * parseInt(val.price)
        })
        context.dispatch('Sumary')
        context.commit('PushDataTableOrder', dataTableOrder)
      } else {
        context.dispatch('PlusDataTableOrder', val)
      }
    },
    async Addbill (context) {
      moment.locale('th')
      const data = {}
      data.purchaser = context.state.name_purchase
      data.net_price = context.state.sumary
      data.seller = context.state.name_seller
      data.date = moment().format('L')
      const addBill = await APIBill.addBill(data)
      context.dispatch('AddDetail', addBill.id_bill)
      context.dispatch('getBill')
    },
    async AddDetail (context, val) {
      const dataOrder = context.state.table_order
      const stock = await APIStock.Stock()
      console.log('stock', stock)
      const data = {}
      for (let index = 0; index < dataOrder.length; index++) {
        const updateStock = {}
        data.id_bill = val
        data.name = dataOrder[index].name
        data.quality = dataOrder[index].quality
        data.price = dataOrder[index].price
        data.discount = dataOrder[index].discount
        data.sumary = dataOrder[index].sumary
        const dataSearch = stock.filter(stock => stock.name === dataOrder[index].name)
        updateStock.quality = dataSearch[0].quality - dataOrder[index].quality
        updateStock.id_stock = dataSearch[0].id_stock
        await APIStock.UpdateStock(updateStock)
        await APIDetailBill.addDetailBill(data)
      }
      context.commit('PushDataTableOrder', [])
      context.commit('SetDataListOrder', '')
      context.commit('SetBranch', '')
      context.commit('changeDialog_purchase')
    }
  }
}
export default Module
