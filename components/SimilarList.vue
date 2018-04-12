<template>
  <div class="contain">
      <ul class="similar">
        <li>相似推荐</li>
      </ul>
      <div class="list-con">
          <ul v-for="item in dataList" :key="item.id">
              <li><img :src="item.theme" alt=""></li>
              <li class="tit">{{item.name}}</li>
              <li class="price">{{item.price}}</li>
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
  padding: 10px 30px 0px 30px;
  .similar {
    width: 1000px;
    margin: 0 auto;
    line-height: 30px;
    font-size: 18px;
    margin-bottom: 10px;
    padding-left: 3px;
  }
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
