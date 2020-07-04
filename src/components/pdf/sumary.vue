<template>
    <v-row no-gutters>
        <v-col cols="7" style="margin-top:5px">
          <v-row style="margin:1px">
            <v-col cols="12" style="border:1px solid #e8e8e8;padding:5px">
               <span>หนึ่งพันบาทถ้วน</span>
            </v-col>
            <v-col cols="12" style="padding:5px">
              <span style="font-size:10px">ถ้าชื่อที่อยู่ไม่ถูกต้อง โปรดเเจ้งภายใน 7 วันหลังจากวันที่เปิดบิล มิฉะนั้นจะถือว่าสมบูรณ์</span>
            </v-col>
            <v-col cols="2" style="padding:5px;margin-top:0px">
              <span style="font-size:12px">ชำระโดย : </span>
            </v-col>
             <v-col cols="10" style="padding:5px;margin-top:0px">
               <form>
                  <input type="checkbox">
                  <label style="font-size:12px"> เงินสด</label><br>
                  <input type="checkbox">
                  <label style="font-size:12px"> เช็คธนาคาร.................................เลขที่..............................</label>
                  <label style="padding-left:18px;font-size:12px"> สาขา.......................................ลงวันที่...............................</label>
                </form>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5" style="margin-top:5px">
          <v-row style="margin:1px">
            <v-col cols="12" style="border:1px solid #e8e8e8;padding:5px;padding-top:40px">
               <span style="float:left">รวมเป็นเงิน</span>
               <span style="float:right">{{detail.net_price}}</span><br>
               <span style="float:left">ภาษีมูลค่าเพิ่ม 0.00%</span>
               <span style="float:right">-</span><br>
            </v-col>
            <v-col cols="12" style="border:1px solid #e8e8e8;padding:5px;margin-top:5px">
               <span style="float:left">ยอดเงินสุทธิ</span>
               <span style="float:right">{{detail.net_price}}</span>
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
    }
  }
}
</script>
