<template>
  <div>
    <a-table :columns="columns" :data-source="data" bordered rowKey="id_bill" size="small">
    <template slot="id_bill" slot-scope="text">{{ text }}</template>
    <template slot="detail" slot-scope="record">
      <!-- <v-btn color="success" @click="Detail(record)">Detail</v-btn> -->
      <v-row align="center" justify="center">
          <a-button  icon="read" @click="Detail(record)"></a-button>
          <a-button class="ml-3"  icon="edit"  @click="Edit(record)"></a-button>
        </v-row>
    </template>
    <template slot="footer">Footer</template>
  </a-table>
  </div>
</template>
<script>
export default {
  computed: {
    data () {
      console.log('object', this.$store.state.Module.table_purchase)
      return this.$store.state.Module.table_purchase
    }
  },
  data () {
    return {
      columns: [
        { title: 'รายการสั่งซื้อ', dataIndex: 'id_bill', scopedSlots: { customRender: 'id_bill' } },
        { title: 'วันที่สั่งซื้อ', dataIndex: 'date' },
        { title: 'ผู้ซื้อ', dataIndex: 'purchaser' },
        { title: 'ผู้ขาย', dataIndex: 'seller' },
        { title: 'ราคาสุทธิ', dataIndex: 'net_price' },
        { title: 'รายละเอียด', scopedSlots: { customRender: 'detail' } }
      ]
    }
  },
  created () {
    this.$store.dispatch('getBill')
  },
  methods: {
    Detail (val) {
      console.log('--------------', val)
      this.$cookies.set('data', { bill: val })
      // await this.$store.dispatch('getBillPDF', val)
      // this.$router.push('/pdf')
      window.open(process.env.VUE_APP_URL, '_blank')
    },
    Edit (val) {
      this.$router.push('edit')
    }
  }
}
</script>
