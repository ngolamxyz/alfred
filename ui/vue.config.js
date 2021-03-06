module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: 'http://localhost:8000'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "vue-select/src/scss/vue-select.scss";
          @import "@/assets/css/tiny-date-picker.min";
          @import "@/assets/css/components/date-picker.scss";
          @import "@/assets/css/variables.scss";
          @import "@/assets/css/mixins.scss";
          @import "@/assets/css/base.scss";
          @import "@/assets/css/utilities.scss";
          @import "@/assets/css/typography.scss";
          @import "@/assets/css/functions.scss";
          @import "@/assets/css/layout.scss";
          @import "@/assets/css/components/form.scss";
          @import "@/assets/css/components/button.scss";
          @import "@/assets/css/components/alert.scss";
          @import "@/assets/css/components/icons.scss";
        `
      }
    }
  }
}
