<template>
  <div class="footer">
    <div class="footer-container">
      <div class="head">
        <div class="fl">
          <div class="title">关于我们</div>
          <div class="case des">软件开发专注于为买卖双方交易提供的互联网平台，足不出户即可购买到你所喜欢的商品。打造良好的买卖平台，卖家可以在网站上登出其想出售商品的信息，买家可以从中选择并购买自己需要的物品。</div>
        </div>
        <div class="fr">
          <div class="title">联系我们</div>
          <div class="case">咨询电话：13652384768</div>
          <div class="case">商务合作：yangyichenmin@qq.com</div>
          <div class="case">联系我们：yangyichenmin@qq.com</div>
        </div>
      </div>
      <div class="main">
        <div class="title">友情链接</div>
        <div class="item">
          <div class="case">后台管理系统</div>
          <div class="case">SHOPPING网</div>
          <div class="case">问题反馈</div>
          <div class="case">github地址</div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">微信</div>
        <img src="@/assets/images/code.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
 .footer {
    background: #ffffff;
    border-top: 2px solid #ff2832;
    .footer-container {
      width: 1200px;
      margin: 0 auto;
      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding-bottom: 20px;
        .fl {
          width: 850px;
          color: #616161;
          .title {
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .des {
            font-size: 14px;
            line-height: 30px;
          }
        }
        .fr {
          color: #616161;
          .title {
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          .case {
            line-height: 30px;
            font-size: 14px;
          }
        }
      }
      .main {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        line-height: 30px;
        color: #616161;
        padding: 10px 0;
        .title {
          font-size: 18px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 400px;
          .case {
            font-size: 14px;
            cursor: pointer;
            &:hover {
              color: #ff2832;
            }
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
        .title {
          font-size: 18px;
          color: #616161;
          margin-top: 10px;
        }
        img {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          margin-left: 20px;
        }
      }
    }
  }
</style>