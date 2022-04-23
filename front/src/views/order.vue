<template>
  <div class="order">
    <nav-bar></nav-bar>
    <search-bar></search-bar>
    <div class="container">
      <div class="list">
        <div class="title">我的订单 <div class="tip">请谨防钓鱼链接或诈骗电话</div></div>
        <div class="tab">
          <div class="item spe">全部订单</div>
          <div class="item spe">待支付</div>
          <div class="item spe">待收货</div>
          <div class="item spe">待评价</div>
          <div class="item spe">我的收藏</div>
          <div class="item">退还/售后</div>
        </div>
        <div class="list-item">
          <div class="head">
            <div class="item">
              <div class="status">已收货</div>
            </div>
            <div class="item info">
              <div class="id">订单号：5210610416800542</div>
              <div class="time">2021年12月1日 11:53</div>
              <div class="price">实际金额：<div class="num">29.99</div> 元</div>
            </div>
          </div>
          <div class="goods">
            <img src="@/assets/images/wen1.png" alt="">
            <div class="des">
              <div class="name">人间清醒·梁晓声</div>
              <div class="total">数量：1</div>
            </div>
            <div class="btn-group">
              <div class="btn detail" @click="goOrderDetail">订单详情</div>
              <div class="btn assess">评价订单</div>
            </div>
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
    components: {
      navBar,
      searchBar,
      footerBar
    },
    methods: {
      goOrderDetail() {
        this.$router.push({ name: 'orderDetail' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .order {
    background: #f5f5f5;
    .container {
      width: 1200px;
      margin: 0 auto;
      padding-bottom: 15px;
      .list {
        color: #757575;
        background: #ffffff;
        margin-top: 20px;
        margin-bottom: 10px;
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
          }
        }
        .tab {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          padding-bottom: 30px;
          .item {
            padding-right: 10px;
          }
          .spe {
            border-right: 1px solid rgba(0, 0, 0, .1);
          }
        }
        .list-item {
          border: 1px solid rgba(0, 0, 0, .1);
          margin-bottom: 20px;
          .head {
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            .item {
              position: relative;
              .status {
                font-size: 18px;
                color: #b0b0b0;
                padding: 25px 30px 1px;
              }
              .id,
              .time,
              .price {
                display: inline-block;
                font-size: 14px;
              }
              .id {
                margin-right: 10px;
              }
              .price {
                position: absolute;
                top: 0;
                right: 48px;
                .price,
                .num {
                  display: inline-block;
                }
                .num {
                  font-size: 28px;
                  color: #000000;
                }
              }
            }
            .info {
              padding: 10px 30px 20px;
            }
          }
          .goods {
            position: relative;
            padding: 30px;
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
              .name {
                font-size: 15px;
              }
              .total {
                font-size: 14px;
              }
            }
            .btn-group {
              float: right;
              font-size: 13px;
              .btn {
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;
              }
              .detail {
                border: 1px solid #b0b0b0;
              }
              .assess {
                color: #ff2832;
                border: 1px solid #ff2832;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>