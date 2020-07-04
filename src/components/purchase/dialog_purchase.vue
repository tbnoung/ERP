<template>
  <div>
    <v-dialog v-model="modal" width="700" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>สร้างรายการสั่งซื้อ</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="7" class="border mt-3">
              <DetailFirst/>
            </v-col>
            <v-col cols="12" sm="5" class="border mt-3">
              <DetailSecond/>
            </v-col>
            <v-col cols="12" class="Left">
              <a-button type="primary" @click="OpenDialogOrder"><a-icon type="plus-circle" /> เพิ่มรายการสินค้า</a-button>
            </v-col>
            <v-col cols="12" class="border">
              <TableListOrder/>
            </v-col>
            <v-col cols="12">
              <v-row align="start" justify="end">
                <v-col cols="6" class="border" >
                  <v-row no-gutters>
                    <v-col cols="6"> ราคาสุทธิ</v-col>
                    <v-col cols="6">
                      <p class="text-end mb-0">{{sumary}}</p>
                      </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="CloseDialog">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import DetailFirst from '@/components/purchase/detail_first'
import DetailSecond from '@/components/purchase/detail_second'
import TableListOrder from '@/components/purchase/table_order'
export default {
  components: {
    DetailFirst,
    DetailSecond,
    TableListOrder
  },
  methods: {
    async CloseDialog () {
      await this.$store.dispatch('CheckStock')
    },
    async OpenDialogOrder () {
      var data = this.$cookies.get('data')
      console.log('object', data.id_branch)
      await this.$store.dispatch('getBranchStock', data)
      await this.$store.commit('changeDialog_listorder')
    }
  },
  computed: {
    modal () {
      return this.$store.state.Module.dialog_purchase
    },
    sumary () {
      return this.$store.state.Module.sumary
    }
  }
}
</script>
