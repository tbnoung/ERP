<template>
  <div>
    <v-dialog v-model="modal" width="650"  persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>สินค้าใน stock</v-card-title>
        <v-card-text>
          <v-col cols="12" v-if="data !== ''">
              <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
              <v-data-table :headers="headers" :items="data" :search="search" height="250" class="mt-2" hide-default-footer fixed-header :items-per-page="1000">
                <template v-slot:item.select="{ item }">
                  <v-btn color="success" @click="SelectOrder(item)">Add</v-btn>
                </template>
              </v-data-table>
            </v-col>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="CloseDialog">ยืนยัน</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'รหัสสินค้า',
          align: 'start',
          value: 'id_stock'
        },
        { text: 'ชื่อสินค้า', value: 'name' },
        { text: 'ราคา', value: 'price' },
        { text: '', value: 'select' }
      ]
    }
  },
  // created () {
  //   this.$store.dispatch('getOrder')
  // },
  methods: {
    async CloseDialog () {
      await this.$store.commit('changeDialog_listorder')
    },
    SelectOrder (val) {
      val.qty = 1
      console.log('ข้อมูลที่ถูกเลือก', val)
      this.$store.dispatch('PushDataTableOrder', val)
    }
  },
  computed: {
    modal () {
      return this.$store.state.Module.dialog_listorder
    },
    data () {
      return this.$store.state.Module.data_listorder
    }
  }
}
</script>
