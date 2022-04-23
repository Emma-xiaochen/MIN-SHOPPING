<template>
  <div class="my-cart">
    <div class="top">
      <nav-bar></nav-bar>
      <div class="theme">
        <div class="container">
          <h1 style="color:#ff2832;font-size:40px;" @click="goHome">SHOPPING</h1>
          <div class="title">我的购物车</div>
          <div class="tip">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
        </div>
      </div>
    </div>
    <div class="wrap">
        <div class="container">
          <div class="cart-goods">
            <div class="head">
              <div class="col col-click">
                <input type="checkbox"> 全选
              </div>
              <div class="col col-img">&nbsp;</div>
              <div class="col col-name">商品名字</div>
              <div class="col col-price">单价</div>
              <div class="col col-num">数量</div>
              <div class="col col-total">小计</div>
              <div class="col col-operate">操作</div>
            </div>
            <div class="goods-list">
              <div class="list-item">
                <div class="col col-click">
                  <input type="checkbox">
                </div>
                <div class="col col-img">
                  <img src="@/assets/images/wen1.png" alt="">
                </div>
                <div class="col col-name">人间清醒（茅盾文学奖获得者梁晓声2021全新力作)</div>
                <div class="col col-price">49.80元</div>
                <div class="col col-num">
                  <button class="btn cut">-</button>
                  <input type="text" value="1">
                  <button class="btn add">+</button>
                </div>
                <div class="col col-total">49.9元</div>
                <div class="col col-operate">
                  <span class="iconfont icon-delete"></span>
                </div>
              </div>
              <div class="list-item">
                <div class="col col-click">
                  <input type="checkbox">
                </div>
                <div class="col col-img">
                  <img src="@/assets/images/wen1.png" alt="">
                </div>
                <div class="col col-name">人间清醒（茅盾文学奖获得者梁晓声2021全新力作)</div>
                <div class="col col-price">49.80元</div>
                <div class="col col-num">
                  <button class="btn cut">-</button>
                  <input type="text" value="1">
                  <button class="btn add">+</button>
                </div>
                <div class="col col-total">49.9元</div>
                <div class="col col-operate">
                  <span class="iconfont icon-delete"></span>
                </div>
              </div>
              <div class="list-item">
                <div class="col col-click">
                  <input type="checkbox">
                </div>
                <div class="col col-img">
                  <img src="@/assets/images/wen1.png" alt="">
                </div>
                <div class="col col-name">人间清醒（茅盾文学奖获得者梁晓声2021全新力作)</div>
                <div class="col col-price">49.80元</div>
                <div class="col col-num">
                  <button class="btn cut">-</button>
                  <input type="text" value="1">
                  <button class="btn add">+</button>
                </div>
                <div class="col col-total">49.9元</div>
                <div class="col col-operate">
                  <span class="iconfont icon-delete"></span>
                </div>
              </div>
              <div class="list-item">
                <div class="col col-click">
                  <input type="checkbox">
                </div>
                <div class="col col-img">
                  <img src="@/assets/images/wen1.png" alt="">
                </div>
                <div class="col col-name">人间清醒（茅盾文学奖获得者梁晓声2021全新力作)</div>
                <div class="col col-price">49.80元</div>
                <div class="col col-num">
                  <button class="btn cut">-</button>
                  <input type="text" value="1">
                  <button class="btn add">+</button>
                </div>
                <div class="col col-total">49.9元</div>
                <div class="col col-operate">
                  <span class="iconfont icon-delete"></span>
                </div>
              </div>
              <div class="list-item">
                <div class="col col-click">
                  <input type="checkbox">
                </div>
                <div class="col col-img">
                  <img src="@/assets/images/wen1.png" alt="">
                </div>
                <div class="col col-name">人间清醒（茅盾文学奖获得者梁晓声2021全新力作)</div>
                <div class="col col-price">49.80元</div>
                <div class="col col-num">
                  <button class="btn cut">-</button>
                  <input type="text" value="1">
                  <button class="btn add">+</button>
                </div>
                <div class="col col-total">49.9元</div>
                <div class="col col-operate">
                  <span class="iconfont icon-delete"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="check-out">
              <div class="fl">
                <div class="continue" @click="goHome">继续购物</div>
                <div class="count">
                  共<div class="num">5</div>件商品，已选择<div class="num">4</div>件
                </div>
              </div>
              <div class="fr">
                <div class="settlement">合计：<div class="money">11896.06</div>元</div>
                <div class="btn">去结算</div>
              </div>
            </div>
        </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import navBar from '@/components/navBar'
  import footerBar from '@/components/footerBar'

  export default {
    components: { navBar, footerBar },
    methods: {
      goHome() {
        console.log(1);
        this.$router.push({name: 'home'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('~@/assets/iconfont/iconfont.css');

  .my-cart {
    background: #f5f5f5;
    .top {
        border-bottom: 2px solid #ff3127;
        .theme {
          height: 59px;
          background: #ffffff;
          padding-top: 30px;
          padding-bottom: 20px;
          .container {
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            width: 1200px;
            margin: 0 auto;
            img {
              width: 190px;
              height: 55px;
            }
            .title {
              font-size: 28px;
              color: #424242;
              margin-left: 45px;
            }
            .tip {
              font-size: 12px;
              color: #757575;
              margin-left: 15px;
            }
          }
        }
    }
    .wrap {
      padding: 35px 0;
      .container {
        width: 1200px;
        margin: 0 auto;
        .cart-goods {
          background: #ffffff;
          .head {
            height: 70px;
            line-height: 70px;
            color: #424242;
            padding-left: 20px;
            .col {
              float: left;
            }
            .col-click {
              width: 110px;
            }
            .col-img {
              width: 120px;
              padding-right: 40px;
            }
            .col-name {
              width: 320px;
            }
            .col-price {
              width: 140px;
              text-align: center;
              padding-right: 18px;
            }
            .col-num {
              width: 170px;
              text-align: center;
            }
            .col-total {
              width: 100px;
              text-align: right;
              padding-right: 80px;
            }
            .col-operate {
              width: 80px;
              text-align: center;
            }
          }
          .goods-list {
            color: #424242;
            .list-item {
              display: table;
              padding: 15px 0px 15px 20px;
              border-top: 1px solid rgba(0, 0, 0, .1);
              .col {
                float: left;
                height: 86px;
                line-height: 86px;
              }
              .col-click {
                width: 110px;
              }
              .col-img {
                width: 120px;
                padding-right: 40px;
                img {
                  width: 80px;
                  height: 80px;
                }
              }
              .col-name {
                width: 320px;
                font-size: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .col-price {
                width: 140px;
                text-align: center;
                padding-right: 18px;
              }
              .col-num {
                width: 170px;
                font-size: 16px;
                text-align: center;
                .cut,
                input,
                .add {
                  display: inline-block;
                  font-size: 16px;
                  border: 0;
                }
                .btn {
                  width: 35px;
                  height: 35px;
                  background: #fff;
                  border: 1px solid #e0e0e0;
                  cursor: pointer;
                }
                input {
                  width: 72px;
                  height: 33px;
                  text-align: center;
                  border-top: 1px solid #e0e0e0;
                  border-bottom: 1px solid #e0e0e0;
                  &:focus {
                    outline: none;
                  }
                }
               }
              .col-total {
                width: 100px;
                font-weight: bold;
                color: #cf4112;
                text-align: right;
                padding-right: 80px;
              }
              .col-operate {
                width: 80px;
                text-align: center;
                .icon-delete {
                  font-size: 12px;
                  &:hover {
                    border-radius: 100%;
                    color: #ffffff;
                    background: red;
                    padding: 5px;                    
                  }
                }
              }
            }
          }
        }
        .check-out {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          left: 0;
          bottom: 0;
          height: 50px;
          line-height: 50px;
          color: #424242;
          background: #ffffff;
          margin-top: 20px;
          .fl {
            .continue,
            .count,
            .num {
              display: inline-block;
              text-align: center;
            }
            .continue {
              width: 100px;
              cursor: pointer;
              &:hover {
                color: #ff2832;
              }
            }
            .count {
              padding-left: 15px;
              position: relative;
              &:before {
                content: '';
                display: inline-block;
                position: absolute;
                top: 18px;
                left: 0px;
                width: 1px;
                height: 15px;
                background: rgba(0, 0, 0, .2);
              }
              .num {
                width: 20px;
                color: #cf4112;
              }
            }
          }
          .fr {
            .settlement,
            .money,
            .btn {
              display: inline-block;
            }
            .settlement {
                color: #cf4112;
            }
            .money {
              font-size: 30px;
            }
            .btn {
              width: 200px;
              height: 50px;
              line-height: 55px;
              font-size: 18px;
              text-align: center;
              color: #ffffff;
              background: #ff2832;
              margin-left: 50px;
              cursor: pointer;
              &:hover {
                background: #ff2832;
              }
            }
          }
        }
      }
    }
    .clearf {
      &:before {
        content: '';
        clear: both;
        display: block;
      }
      &:after {
        content: '';
        clear: both;
        display: block;
      }
    }
  }
</style>