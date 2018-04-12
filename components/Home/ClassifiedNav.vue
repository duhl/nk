<template>
  <section class="contain">
      <div class="main">
        <ul>
            <p><i class="iconfont icon-hangyedongtai"></i>行业分类</p>
            <li>全部</li>
            <li>互联网</li>
            <li>汽车</li>
            <li>游戏</li>
            <li>房产</li>
            <li>游戏</li>
            <li>手机</li>
            <li>快消品</li>
            <li>娱乐</li>
            <li>金融</li>
            <li>其他</li> 
        </ul>
        <ul>
            <p><i class="iconfont icon-duoqudaojicheng"></i>应用场景</p>
            <li>全部</li>
            <li>会议邀请</li>
            <li>企业招聘</li>
            <li>品牌推广</li>
            <li>周年庆典</li>
            <li>产品宣传</li>
            <li>活动营销</li>
            <li>其他</li>
        </ul>
        <ul>
            <p><i class="iconfont icon-chuangyicehua"></i>创意形式</p>
            <li>全部</li>
            <li>真人视频</li>
            <li>趣味动画</li>
            <li>解谜探索</li>
            <li>全景/VR</li>
            <li>互动游戏</li>
            <li>大闹手机</li>
            <li>答题闯关</li>
            <li>文艺逼格</li>
            <li>流行说唱</li>
            <li>其他</li>
        </ul>
        <ul>
            <p><i class="iconfont icon-zhuti"></i>主题</p>
            <li>全部</li>
            <li>新年</li>
            <li>春节</li>
            <li>情人节</li>
            <li>七夕</li>
            <li>教师节</li>
            <li>中秋节</li>
            <li>国庆节</li>
            <li>双旦</li>
            <li>电商节</li>
            <li>其他</li>   
        </ul>
      </div>
  </section>
</template>

<script>
</script>

<style lang="less" scoped>
.contain {
  width: 100%;
  padding: 15px 0;
  background: white;
  .main {
    width: 1000px;
    background: white;
    //   height: 300px;
    //   border: 1px solid red;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ul {
      width: 250px;
      border-left: 1px solid rgb(228, 228, 228);
      padding: 5px 10px;
      box-sizing: content-box;
      box-sizing: border-box;
      // display: flex;
      // justify-content: space-between;

      // flex-flow: row nowrap;
      // flex-wrap: wrap;
      p {
        display: block;
        width: 100%;
        height: 40px;
        // line-height: 40px;
        font-size: 16px;
        text-align: center;
        i {
          padding-right: 10px;
          font-size: 20px;
        }
      }
      li {
        width: 30%;
        height: 30px;
        line-height: 30px;
        display: inline-block;
        text-align: center;
        // border: 1px solid gray;
        border-radius: 5px;
        margin: 3px;
        box-sizing: border-box;
      }
      li:hover {
        background: #ff9900;
        cursor: pointer;
        color: white;
      }
      li.active {
      }
    }
    ul:last-child {
      border-right: 1px solid rgb(228, 228, 228);
    }
  }
}
</style>

