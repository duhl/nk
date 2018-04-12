<template>
  <section>
      <header-box/>
      <theme/>
      <classified-nav/>
      <product-list :data-list="dataList"/>
      <footer-box/>
  </section>
</template>

<script>
import HeaderBox from "~/components/HeaderBox.vue";
import Theme from "~/components/Home/Theme.vue";
import ClassifiedNav from "~/components/Home/ClassifiedNav.vue";
import ProductList from "~/components/home/ProductList.vue";
import FooterBox from "~/components/FooterBox.vue";
import dataProductlist from "~/static/data/home/product_list.js";

export default {
  data() {
    return {};
  },
  components: {
    HeaderBox,
    FooterBox,
    Theme,
    ClassifiedNav,
    ProductList
  },
  computed: {
    dataList() {
      return dataProductlist.data;
    }
  },
  mounted() {
    console.log(this.dataList);
  },
  methods: {}
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
