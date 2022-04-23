<template>
  <div class="detail">
    <nav-bar></nav-bar>
    <search-bar></search-bar>
    <div class="container">
      <div class="head">&lt;&lt;返回首页</div>
      <div class="content">
        <div class="top">
          <div class="fl">
            <img src="@/assets/images/detail.png" alt="">
          </div>
          <div class="fr">
            <div class="name">0次与10000次：如何创造全新的人生脚本</div>
            <div class="des">德国心理学家教你告别同样的坏感受、同样的错误、同样的创伤，拥有保护自己不受伤害的能力。探查我们内在的习惯性的应对方式，积极修正，创造新的人生脚本。</div>
            <div class="price">价格：<div class="num">￥29.90</div></div>
            <div class="number">
              <div class="title">库存量：9999</div>
            </div>
            <div class="place">发货地：<div class="locale">深圳</div></div>
            <div class="shop">
              <div class="item add-car">加入购物车</div>  
              <div class="item buy">立即购买</div>  
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="class"><div class="title">商品详情</div></div>
          <div class="main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem nesciunt accusamus possimus saepe quia, fugiat modi incidunt sint. Nostrum vitae delectus ratione cumque laudantium. Amet perspiciatis ex dolores a.</div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import navBar from '@/components/navBar'
  import searchBar from '@/components/searchBar'
  import footerBar from '@/components/footerBar'

  export default {
    components: {
      navBar,
      searchBar,
      footerBar
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 1200px;
    margin: 0 auto;
    .head {
      height: 41px;
      line-height: 41px;
      color: #757575;
      border-bottom: 2px solid #ff3127;
      cursor: pointer;
      &:hover {
        color: #ff3127;
      }
    }
    .content {
      .top {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid rgba(0,0,0,.1);
        .fl {
          padding-right: 50px;
          img {
            width: 380px;
            height: 380px;
            padding: 30px 0;
          }
        }
        .fr {
          padding: 30px 0;
          .name {
            font-size: 26px;
            font-weight: bold;
          }
          .des {
            width: 600px;
            font-size: 15px;
            color: #323232;
            margin: 15px 0;
          }
          .price {
            .price,
            .num {
              display: inline-block;
            }
            .num {
              font-size: 28px;
              font-weight: bold;
              color: #cf4112;
            }
          }
          .number {
            margin: 25px 0;
            .title,
            .num-group {
              display: inline-block;
            }
            .num-group {
              width: 150px;
              border: 1px solid #e0e0e0;
              .btn,
              .value {
                display: inline-block;
              }
              .btn {
                width: 34px;
                height: 35px;
                line-height: 35px;
                text-align: center;
                background: #fff;
                cursor: pointer;
              }
              .add {
                border-left: 1px solid #e0e0e0;
              }
              .cut {
                border-right: 1px solid #e0e0e0;
              }
              .value {
                width: 80px;
                font-size: 16px;
                text-align: center;
                border: none;
                outline: none;
              }
            }
          }
          .place {
            margin: 20px 0;
            .place,
            .locale {
              display: inline-block;
            }
          }
          .shop {
            .add-car,
            .buy {
              display: inline-block;
              cursor: pointer;
            }
            .item {
              width: 180px;
              height: 40px;
              line-height: 40px;
              text-align: center;
            }
            .add-car {
              color:#ff0036;
              background: #ffeded;
              border: 1px solid #ff0036;
              margin-right: 10px;
              &:hover {
                background: #ffd7d7;
              }
            }
            .buy {
              color: #ffffff;
              background: #ff2832;
              border: 1px solid #ff2832;
              &:hover {
                background: #f00000;
              }
            }
          }
        }
      }
      .bottom {
        min-height: 600px;
        .class {
          height: 41px;
          line-height: 41px;
          .title {
            position: relative;
            color: #757575;
            padding-left: 10px;
            &:before {
              content: '';
              position: absolute;
              top: 12px;
              left: 0;
              display: inline-block;
              background: #ff3127;
              width: 5px;
              height: 18px;
            }
          }
        }
      }
    }
  }
</style>