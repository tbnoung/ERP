
<template>
  <div v-if="order_bill !== null">
    <v-btn color="green darken-1" dark absolute bottom right fixed fab style="margin-bottom: 65px;" @click="printpo" v-if="printvisible">
      <v-icon>mdi-printer</v-icon>
    </v-btn>
    <div class="page" v-for="page in Math.ceil(order.length / 13)" :key="page">
      <v-row no-gutters>
        <v-col cols="8">
          <span>บริษัท ABBBB </span><br>
          <span>จันทร์ - ศุกร์ เวลา 08.00 - 12.00 เเละ 13.00 - 17.00</span><br>
          <span>โทรศัพท์ : 0274555555 หรือ 0874511111</span>
        </v-col>
        <v-col cols="4">
          <span style="float:right">ใบสั่งซื้อสินค้า</span><br>
          <span style="float:right">หน้าที่ {{page}} จาก {{pageALl}}</span><br>
        </v-col>
        <v-col cols="12">
          <PDFHeader/>
        </v-col>
        <v-col cols="12" style="height:555px;border:1px solid #e8e8e8;margin-top:10px;border-radius:5px">
          <a-table size="small" :pagination="disable" bordered :columns="headers" :data-source="pagearray(page,order)" rowKey="id">
        </a-table>
        </v-col>
        <v-col cols="12">
          <PDFSumary/>
        </v-col>
        <v-col>
          <PDFFooter/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import PDFHeader from '@/components/pdf/header'
import PDFFooter from '@/components/pdf/footer'
import PDFSumary from '@/components/pdf/sumary'
export default {
  components: {
    PDFHeader,
    PDFFooter,
    PDFSumary
  },
  data () {
    return {
      pageALl: 0,
      disable: false,
      printvisible: true,
      headers: [
        {
          title: <span style="font-size:10px">รหัสสินค้า<br/>Code</span>,
          dataIndex: 'id',
          width: 50,
          align: 'center'
        },
        {
          title: <span style="font-size:10px;padding-left:110px">รายละเอียด<br/><span style="font-size:10px;padding-left:108px">Description</span></span>,
          align: 'left',
          dataIndex: 'name',
          width: 200,
          scopedSlots: { customRender: 'name' }
        },
        {
          title: <span style="font-size:10px">จำนวน<br/>Qty</span>,
          dataIndex: 'quality',
          width: 50,
          align: 'center'
        },
        {
          title: <span style="font-size:10px">ราคาต่อหน่วย<br/>Unit</span>,
          dataIndex: 'price',
          width: 60,
          align: 'center'
        },
        {
          title: <span style="font-size:10px">ส่วนลด<br/>Discount</span>,
          dataIndex: 'discount',
          width: 50,
          align: 'center'
        },
        {
          title: <span style="font-size:10px">จำนวนเงิน<br/>Amount</span>,
          dataIndex: 'sumary',
          width: 50,
          align: 'center',
          scopedSlots: { customRender: 'sumary' }
        }
      ]
    }
  },
  computed: {
    order_bill () {
      console.log('this.$store.state.PDF.detail_bill', this.$store.state.PDF.order_bill)
      return this.$store.state.PDF.order_bill
    },
    order () {
      return this.$store.state.PDF.order_bill
    }
  },
  created () {
    const data = this.$cookies.get('data')
    console.log('llllllll', data)
    this.$store.dispatch('getBillPDF', data.bill)
  },
  methods: {
    printpo () {
      setTimeout(() => {
        window.print()
      }, 500)
      this.printvisible = false
      setTimeout(() => {
        this.printvisible = true
      }, 2000)
    },
    pagearray (page, array) {
      console.log('arr', array)
      this.pageALl = Math.ceil(array.length / 13)
      const arr = []
      const startitemindex = (page * 13) - 13
      for (let index = 0; index < 13; index++) {
        arr.push(array[startitemindex + index])
      }
      return arr.filter(v => !!v)
    }
  }
}
</script>

<style scoped>
.tt {
  text-align: left !important;
}
.aa {
  text-align: left !important;
}
.bb {
  padding-top: 0px !important;
}
.page {
  width: 21cm;
  height: 29.7cm;
  padding: 1cm;
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
@page {
  size: A4;
  margin: 0;
}
@media print {
  .page {
    margin: 0;
    box-shadow: 0;
  }
  * {
    -webkit-print-color-adjust: exact;
  }
}
</style>
