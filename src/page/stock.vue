<template>
  <div class="ma-5">
    <h1>สินค้าใน Stock ทั้งหมด</h1>
    <a-table :columns="columns" :data-source="data" bordered rowKey="id_stock" size="small">
          <template slot="detail" >
            <v-row align="center" justify="start">
          <a-button class="ml-3"  icon="edit" ></a-button>
        </v-row>
        </template>
    </a-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        { title: 'รหัสสินค้า', dataIndex: 'id_stock', scopedSlots: { customRender: 'id_bill' } },
        { title: 'ชื่อสินค้า', dataIndex: 'name' },
        { title: 'จำนวน', dataIndex: 'quality' },
        { title: 'จัดการ', scopedSlots: { customRender: 'detail' } }
      ]
    }
  },
  created () {
    this.$store.dispatch('GetStock')
  },
  computed: {
    data () {
      return this.$store.state.Module.table_stock
    }
  }
}
</script>
