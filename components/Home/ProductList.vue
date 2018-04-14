<template>
  <div class="contain">
    <div class="list-con">
      <ul v-for="item in dataList" :key="item.id">
        <a :href="`/detail/${item.id}`" :id="item.id">
          <li><img :src="item.thumbnail" alt=""></li>
          <li class="tit">{{item.name}}{{item.id}}</li>
          <li class="price">{{item.price}}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    // dataList: {
    //   type: Object,
    //   default: null
    // },
    dataList: {
      type: null,
      default() {
        return null;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.contain {
  width: 100%;
  padding: 30px 30px 0px 30px;
  .list-con {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    ul {
      position: relative;
      width: 225px;
      border-radius: 4px;
      border: 3px solid transparent;
      overflow: hidden;
      background: white;
      padding-bottom: 10px;
      margin-bottom: 35px;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.5s;
      li {
        padding: 0;
        img {
          width: 100%;
        }
      }
      li.tit {
        padding: 0 10px;
        line-height: 25px;
      }
      li.price {
        padding: 0 10px;
        line-height: 25px;
        color: #02c2ec;
      }
    }
    ul:hover {
      border: 3px solid rgb(148, 227, 230);
      transform: scale(1.02);
      transition: all 0.3s;
    }
  }
}
</style>
