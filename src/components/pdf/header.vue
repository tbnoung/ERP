<template>
    <v-row no-gutters>
        <v-col cols="8" style="margin-top:10px">
          <!-- <div class="borderHeader borderLeft"> -->
              <v-row class="borderHeader">
                <v-col cols="3">
                  <span>ชื่อลูกค้า<br>เลขที่ผู้เสียภาษี<br>ที่อยู่<br><br><br>โทร</span>
                </v-col>
                <v-col cols="9">
                 <span>{{branch.name}}</span><br>
                  <span>{{branch.tex_number}}</span><br>
                  <span>บ้านเลขที่ {{branch.house_number}} หมู่บ้าน {{branch.village}} <br> เเขวง {{branch.sub_district}} เขต {{branch.district}} <br>จังหวัด {{branch.province}}<br> {{branch.tel}}</span>
                </v-col>
              </v-row>
          <!-- </div> -->
        </v-col>
        <v-col cols="4" style="margin-top:10px">
          <!-- <div class="borderHeader"> -->
           <v-row class="borderHeader">
                <v-col cols="6">
                  <span>วันที่สั่งซื้อ</span><br>
                  <span>วิธีการชำระ</span><br>
                  <span>ผู้ขาย</span><br>
                  <span>รายการสั่งซื้อที่</span>
                </v-col>
                <v-col cols="6">
                 <span>{{detail.date}}</span><br>
                  <span>{{detail.payment}}</span><br>
                  <span>{{detail.seller}}</span><br>
                  <span>{{detail.id_bill}}</span>
                </v-col>
              </v-row>
        </v-col>
    </v-row>
</template>
<script>
export default {
  computed: {
    detail () {
      return this.$store.state.PDF.detail_bill
    },
    branch () {
      return this.$store.state.PDF.branch
    }
  }
}
</script>
<style scoped>
.borderHeader {
  border: 1px solid #e8e8e8 ;
  margin: 1px;
  height: 145px;
}
</style>
