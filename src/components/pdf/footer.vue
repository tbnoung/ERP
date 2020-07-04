<template>
    <v-row no-gutters>
        <v-col cols="3" style="margin-top:5px" v-for="(list,index) in lists" :key="index">
          <v-row style="margin:1px">
            <v-col cols="12" class="box">
              <p class="boxtitle">{{list.title}}</p>
              <p class="boxdate">วันที่ ....... / ...... / .......</p>
            </v-col>
          </v-row>
        </v-col>
    </v-row>
</template>
<script>
export default {
  data () {
    return {
      lists: [
        {
          title: 'ผู้รับสินค้า'
        },
        {
          title: 'ผู้ส่งสินค้า'
        },
        {
          title: 'ผู้รับเงิน'
        },
        {
          title: 'ผู้ตรวจสอบ'
        }
      ]
    }
  }
}
</script>
<style>
.box {
    border:1px solid #e8e8e8;
    padding:5px;
    margin-top:5px;
    height:120px;
    border-radius:5px
}
.boxtitle {
    text-align:center;
    border-bottom:1px solid #e8e8e8;
    padding-bottom:5px
}
.boxdate {
    font-size:10px;
    text-align:center;
    padding-top:50px
}
</style>
