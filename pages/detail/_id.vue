<template>
    <div>
        <header-box/>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>吉祥物案例市场</el-breadcrumb-item>
                <el-breadcrumb-item>{{currentId}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="intro-box">
            <div class="leftcon">
                <template>
                    <el-carousel height="500px" :interval="5000" arrow="always">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
            <div class="rightcon">
                <ul class="item-tit">
                    <li class="tit">海尔兄弟形象升级</li>
                    <li>项目甲方：海尔文化集团</li>
                    <li>服务估价：￥100000元</li>
                    <li class="btn">
                        <el-button type="primary">我要制作</el-button>
                    </li>
                </ul>
                <ul class="item-intro">
                    <li class="tit">案例描述</li>
                    <li class="context">
                        生命里，一些缱绻，无论素净，还是喧哗，都已经被岁月赋予了清喜的味道，一些闲词，或清新，或淡雅，总会在某一个回眸的时刻醉了流年，濡湿了柔软的心，冥冥之中，我们沿着呼唤的风声，终于在堆满落花的秋里，再次重逢，念在天涯，心在咫尺，我相信，一米阳光，才是我们最好的距离。
                    </li>
                </ul>
            </div>
        </div>
        <div class="video-box">
            <video id="my-video" classname="video-js vjs-default-skin" controls="" autoplay="" preload="auto" loop width="" height="450"> <source src="//gossv.vcg.com/videos/mts_videos/medium/VCG42655246088.mp4" type="video/mp4"></video>
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
    return {};
  },
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
  }
};
</script>
<style lang="less" scoped>
.breadcrumb {
  width: 1000px;
  margin: 20px auto;
}
.intro-box {
  width: 1000px;
  height: 500px;
  margin: 20px auto;
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
.video-box {
  width: 1000px;
  height: 500px;
  margin: 20px auto;
  background: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.similar {
  width: 1000px;
  margin: 0 auto;
}
</style>
