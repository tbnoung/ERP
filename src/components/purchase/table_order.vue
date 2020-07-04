<template>
  <div>
    <a-table :columns="columns" :data-source="data" bordered :pagination="false" :scroll="{ y: 200 }" size="small" rowKey="order">
    <template slot="quality" slot-scope="record">
      <v-row align="center" justify="center">
          <a-button   icon="minus" @click="minus(record)" size="small"/>
            <a-input  class="mx-1" v-model="record.quality"  style="width:45px;text-align:center" size="small" @change="inSertquality(record)"/>
          <a-button  icon="plus" @click="plus(record)" size="small"/>
      </v-row>
    </template>
  </a-table>
  </div>
</template>
<script>
export default {
  computed: {
    data () {
      return this.$store.state.Module.table_order
    }
  },
  data () {
    return {
      columns: [
        {
          title: 'รายการสั่งซื้อ',
          dataIndex: 'order',
          scopedSlots: { customRender: 'order' },
          width: 100
        },
        {
          title: 'name',
          dataIndex: 'name',
          width: 150
        },
        {
          title: 'quality',
          scopedSlots: { customRender: 'quality' },
          width: 130
        },
        {
          title: 'price',
          dataIndex: 'price'
        },
        {
          title: 'discount',
          dataIndex: 'discount'
        },
        {
          title: 'sumary',
          dataIndex: 'sumary'
        }
      ]
    }
  },
  methods: {
    inSertquality (val) {
      this.$store.dispatch('InsertQuality', val)
    },
    plus (val) {
      this.$store.dispatch('PlusDataTableOrder', val)
    },
    minus (val) {
      this.$store.dispatch('MinusDataTableOrder', val)
    }
  }
}
</script>
