<template>
  <div class="main 1shadow">
    <section class="header-box">
      <div class="logo"></div>
      <div class="nav">
        <ul>
          <li class="active">
            <!-- <nuxt-link :to="{name:'index'}"> -->
            吉祥物案例市场
            <!-- </nuxt-link> -->
          </li>
          <li>品牌IP定制开发</li>
          <li>品牌营销视频</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  background-color: white;
  .header-box {
    width: 1000px;
    height: 80px;
    margin: 0 auto;

    .logo {
      float: left;
      width: 100px;
      height: 80px;
      background: url("~static/images/global/logo.png") no-repeat;
      background-size: contain;
    }
    .nav {
      float: right;
      display: block;
      width: calc(100% - 120px);
      li {
        display: inline-block;
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
        cursor: pointer;
        font-size: 16px;
      }

      li.active {
        // background: #f2fafb;
        // background: #6a7779;
        color: #ff6600;
      }
      li:hover {
        // background: #f2fafb;
        background: #666;
        color: white;
      }
    }
  }
}
.main.shadow {
  box-shadow: 0px 3px 9px 0px rgb(194, 194, 194);
}
</style>
