<template>
  <div>
    <header-box/>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>吉祥物案例市场</el-breadcrumb-item>
        <el-breadcrumb-item>{{theData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intro-box">
      <div class="leftcon">
        <template>
          <el-carousel height="500px" :interval="5000" arrow="always">
            <el-carousel-item v-for="item in theData.detail.focus" :key="item">
              <!-- <h3>{{ item }}</h3> -->
              <img :src="item.preview" alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="rightcon">
        <ul class="item-tit">
          <li class="tit">{{theData.detail.info.title}}</li>
          <li>{{`项目甲方：${theData.detail.info.customer}`}}</li>
          <li>{{`服务估价：￥${theData.detail.info.price}元`}}</li>
          <li class="btn">
            <el-button type="primary">我要制作</el-button>
          </li>
        </ul>
        <ul class="item-intro">
          <li class="tit">案例描述</li>
          <li class="context">
            {{theData.detail.info.intro}}
          </li>
        </ul>
      </div>
    </div>
    <div class="about-bar">
      相关视频
    </div>
    <div class="video-box">
      <video id="my-video" classname="video-js vjs-default-skin" controls="controls" autoplay="" preload="auto" loop width="" height="450"> <source :src="theData.detail.video" type="video/mp4"></video>
    </div>

    <similar-list :data-list="dataList">

    </similar-list>
    <footer-box/>
  </div>
</template>
<script>
import HeaderBox from "~/components/HeaderBox.vue";
import FooterBox from "~/components/FooterBox.vue";
import SimilarList from "~/components/SimilarList.vue";
import dataProductlist from "~/static/data/home/product_list.js";
export default {
  data() {
    return {
      theData: null
    };
  },
  // props:{
  //   theData:{
  //     type:
  //   }
  // },
  components: {
    HeaderBox,
    FooterBox,
    SimilarList
  },
  computed: {
    dataList() {
      return dataProductlist.data;
    },
    currentId() {
      return this.$route.params.id;
    }
  },
  created() {
    console.log(this.dataList);
    this.dataList.forEach(item => {
      if (item.id == this.$route.params.id) {
        this.theData = item;
      }
    });
    console.log(this.theData);
  }
};
</script>
<style lang="less" scoped>
.breadcrumb {
  width: 1000px;
  margin: 30px auto;
}
.intro-box {
  width: 1000px;
  height: 500px;
  margin: 20px auto 30px;
  background: white;
  border-radius: 4px;
  .leftcon {
    width: 750px;
    float: left;
  }
  .rightcon {
    float: right;
    padding: 15px;
    width: 250px;
    height: 100%;
    border-left: 1px solid #e1e1e1;
    .item-tit {
      li {
        font-size: 14px;
        margin: 10px 0;
      }
      li.tit {
        margin-top: 0;
        font-size: 22px;
      }
      li.btn {
        margin-top: 20px;
        button {
          padding: 12px 80px;
        }
      }
    }
    .item-intro {
      margin-top: 30px;
      .tit {
        font-size: 16px;
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 10px;
        margin-bottom: 15px;
      }
      .context {
        height: 235px;
        overflow: auto;
      }
    }
  }
}
.about-bar {
  width: 1000px;
  margin: 0 auto;
  line-height: 30px;
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 3px;
}
.video-box {
  width: 1000px;
  height: 500px;
  margin: 10px auto 20px;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
