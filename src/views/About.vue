<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="MergePDF()">Merge PDF</v-btn>
  </div>
</template>

<script>
const PDFDocument = require('pdf-lib')
const fs = require('fs')
export default {
  methods: {
    async MergePDF () {
      const cover = await PDFDocument.load(fs.readFileSync('../pdf/file1'))
      const content = await PDFDocument.load(fs.readFileSync('../pdf/file2'))
      const doc = await PDFDocument.create()
      const contentPage1 = await doc.copyPage(cover, cover.getPageIndices())
      for (const page of contentPage1) {
        doc.addPage(page)
      }
      const contentPage2 = await doc.copyPage(content, content.getPageIndices())
      for (const page of contentPage2) {
        doc.addPage(page)
      }
      fs.writeFileSync('@/pdf/Merge.pdf', await doc.save())
    }
  }

}
</script>
