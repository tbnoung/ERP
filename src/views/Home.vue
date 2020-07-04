<template>
    <div id="app">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app>
                <v-list height="180">
                    <v-layout align-center justify-center row wrap>
                    <v-flex xs12 class="centerdiv">
                        <v-avatar size="120">
                        <img :src="picture" />
                        </v-avatar>
                    </v-flex>
                    <v-flex xs12 class="centerdiv mt-3">
                        <span class="headline">{{username}} </span>
                    </v-flex>
                    </v-layout>
                </v-list>
                <v-divider></v-divider>
                  <a-menu style="width: 256px" mode="vertical" v-for="item in items"   :key="item.key"  :selectedKeys="[0]" >
                    <a-menu-item  @click="SelectMenu(item)" v-if="!item.child">
                      <a-icon type="mail"/>
                      {{item.text}}
                    </a-menu-item>
                    <a-sub-menu v-else>
                      <span slot="title"><a-icon type="appstore" /><span>{{item.text}}</span></span>
                      <a-menu-item v-for="child in item.child" :key="child.key" @click="SelectMenu(child)" >
                        {{child.name}}
                      </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </v-navigation-drawer>
            <v-app-bar app color="grey lighten-1" dark>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Demo ERP</v-toolbar-title>
            </v-app-bar>
            <v-content><router-view></router-view></v-content>
        </v-app>
    </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: true,
      picture: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      username: 'Tbnoung',
      items: [
        { icon: 'mdi-chart-timeline-variant', text: 'Purchase', path: '/' },
        { icon: 'mdi-chart-timeline-variant', text: 'Sales', path: '/seller' },
        { icon: 'mdi-chart-timeline-variant', text: 'ระบบสินค้าคงคลัง', path: '/stock' }
        // { icon: 'mdi-chart-timeline-variant', text: 'ระบบบัญชีและการเงิน' },
        // { icon: 'mdi-chart-timeline-variant', text: 'ระบบบริหารบุคลากร', child: [{ name: 'Tbnoung' }] }
      ],
      items2: [
        { picture: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/42333009_1815786098537531_1367063441499488256_o.jpg?_nc_cat=104&_nc_oc=AQm52Xecyc6ErCo0cv2IkgNRc0NCUylIqcVDWJnsXSSAINTtyVuCi1Qu5EDW_AcEhAU&_nc_ht=scontent.fbkk22-1.fna&oh=bcf31fa730effb2d8e14a356285cd9e3&oe=5DD21295', text: 'Tbnoung' }
      ]
    }
  },
  methods: {
    SelectMenu (val) {
      console.log('-----;l;l;l', this.$router.currentRoute.path)
      if (val.path !== this.$router.currentRoute.path) {
        this.$router.push(val.path)
      }
    }
  }
}
</script>
<style scoped>
.centerdiv {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
