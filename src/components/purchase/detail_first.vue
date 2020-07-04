<template>
  <div>
    <v-row no-gutters>
      <v-col cols="2">
        <span>ผู้ขาย </span>
      </v-col>
      <v-col cols="10" class="pl-3">
        <span>Tbnoung</span>
      </v-col>
      <v-col cols="2" class="pt-2"><span>ผู้ซื้อ </span></v-col>
      <v-col cols="10" class="pl-3">
        <a-select show-search :filter-option="filterOption" style="width: 200px" @change="handleChange">
          <a-select-option v-for="(item,index) in items" :key="index">
            {{item.name}}
          </a-select-option>
        </a-select>
      </v-col>
      <v-col cols="12">
        <span>ที่อยู่จัดส่ง </span>
        <span class="pl-3">บ้านเลขที่ {{address.house_number}} หมู่บ้าน {{address.village}}</span><br>
        <span class="padLeft">เเขวง {{address.sub_district}}</span><br>
        <span class="padLeft">เขต {{address.district}}</span><br>
        <span class="padLeft">จังหวัด {{address.province}}</span><br>
        <span>เบอร์โทร </span>
        <span class="pl-5">{{address.tel}}</span><br>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    items () {
      return this.$store.state.Module.ItemSelect
    },
    address () {
      return this.$store.state.Module.address
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
      console.log('id_branch', this.items[value].id_branch)
      this.$cookies.set('data', { id_branch: this.items[value].id_branch })
      this.$store.commit('SetAddress', value)
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>
<style>
.padLeft {
  padding-left: 75px
}
</style>
