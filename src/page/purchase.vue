<template>
  <div class="ma-5">
    <v-row no-gutters align="start" justify="center">
      <v-col cols="12">
      <h1>รายการสั่งซื้อ</h1>
      </v-col>
      <v-col cols="8">
        <a-button type="primary" @click="OpenModal"><a-icon type="plus-circle" /> เพิ่มรายการสั่งซื้อ</a-button>
      </v-col>
      <v-col cols="4">
        <v-row justify="end" no-gutters>
          <v-col cols="12">
          <a-input-search placeholder="Search ID Order" enter-button />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="py-2"><Table/></v-col>
      <DialogPurchase/>
      <DialogOrder/>
    </v-row>
  </div>
</template>
<script>
import DialogPurchase from '@/components/purchase/dialog_purchase'
import DialogOrder from '@/components/purchase/dialog_listorder'
import Table from '@/components/purchase/table'
export default {
  components: {
    Table,
    DialogPurchase,
    DialogOrder
  },
  data () {
    return {
    }
  },
  methods: {
    async OpenModal () {
      console.log('กดเพิ่มรายการสั่งซื้อ')
      await this.$store.dispatch('getBranch')
      await this.$store.commit('changeDialog_purchase')
    }
  }
}
</script>
<style>
.border{
  border: 1px solid gray;
}
.Left{
  padding-left: 0px
}
</style>
