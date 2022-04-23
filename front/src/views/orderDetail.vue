<template>
  <div class="order-detail">
    <nav-bar></nav-bar>
    <search-bar></search-bar>
    <div class="container">
      <div class="list">
        <div class="title">订单详情<div class="tip">请谨防钓鱼链接或诈骗电话</div></div>
        <div class="id">订单号：5210610416800542</div>
        <div class="status">已收货</div>
        <div class="process-list">
          <div class="list-head">
            <div class="list-item order">下单</div>
            <div class="list-item">付款</div>
            <div class="list-item">配货</div>
            <div class="list-item">出库</div>
            <div class="list-item trade">交易成功</div>
          </div>
          <div class="list-bottom">
            <div class="time">12月1日 16:41</div>
            <div class="time">12月1日 16:41</div>
            <div class="time">12月1日 16:41</div>
            <div class="time">12月1日 16:41</div>
            <div class="time">12月1日 16:41</div>
          </div>
        </div>
        <div class="company">物流公司：顺丰快递 <div class="odd-numbers">运单号：SF1980875266152</div></div>
        <div class="goods">
          <img src="@/assets/images/wen1.png" alt="">
          <div class="des">
            <div class="name">商品名称：人间清醒·梁晓声</div>
            <div class="num">数量：1</div>
            <div class="total">价格：29.99元</div>
          </div>
        </div>
        <div class="info">
          <div class="head">收货信息</div>
          <div class="item">
            <div class="name spe">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</div>
            <div class="value">陈敏</div>
          </div>
          <div class="item">
            <div class="name">联系电话：</div>
            <div class="value">13652384768</div>
          </div>
          <div class="item">
            <div class="name">收货地址：</div>
            <div class="value">广东 广州市 白云区 江高镇 江高镇大田村学苑路1号</div>
          </div>
        </div>
        <div class="actual">
          <div class="actual-group">
            <div class="item">实际金额：</div>
            <div div class="item money"><div class="num">29.99</div>元</div>
          </div>
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
    components: { navBar, searchBar, footerBar }
  }
</script>

<style lang="scss" scoped>
  .order-detail {
    background: #f5f5f5;
    .container {
      width: 1200px;
      margin: 0 auto;
      .list {
        color: #757575;
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 36px 48px;
        .title {
          height: 68px;
          line-height: 68px;
          font-size: 28px;
          .title,
          .tip {
            display: inline-block;
          }
          .tip {
            font-size: 13px;
            margin-left: 10px;
          }
        }
        .id {
          color: #000000;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          padding-bottom: 20px;
        }
        .status {
          font-size: 18px;
          color: #b0b0b0;
          padding: 20px 0;
        }
        .process-list {
          .list-head {
            .list-item {
              display: inline-block;
              width: 220px;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              text-align: center;
              color: #ffffff;
              background: #83c44e;
            }
            .order {
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
            }
            .trade {
              border-top-right-radius: 10px;
              border-bottom-right-radius: 10px;
            }
          }
          .list-bottom {
            margin-top: 10px;
            .time {
              display: inline-block;
              width: 220px;
              height: 20px;
              font-size: 12px;
              text-align: center;
            }
          }
        }
        .company {
          font-size: 14px;
          padding: 5px 0;
          margin: 10px 0;
          border-bottom: 1px solid #cfeeab;
          .company,
          .odd-numbers {
            display: inline-block;
          }
          .odd-numbers {
            margin-left: 10px;
          }
        }
        .goods {
          position: relative;
          padding: 20px 0;
          line-height: 25px;
          font-size: 13px;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          img,
          .des {
            display: inline-block;
          }
          img {
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
          .des {
            position: absolute;
            top: 40%;
            left: 12%;
            .num,
            .total {
              display: inline-block;
            }
            .total {
              margin-left: 20px;
            }
          }
        }
        .info {
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          padding: 20px 0;
          .head {
            color: #000;
            font-size: 18px;
            margin-bottom: 15px;
          }
          .item {
            font-size: 14px;
            .name,
            .value {
              display: inline-block;
            }
          }
        }
        .actual {
          margin-top: 30px;
          .item,
          .num {
            display: inline-block;
          }
          .actual-group {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .money {
              color: #cf4112;
              .num {
                font-size: 28px;
              }
            }
          }
        }
      }
    }
  }
</style>