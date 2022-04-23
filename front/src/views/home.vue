<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="container">
      <search-bar></search-bar>
      <div class="recommend">
        <div class="nav-title">
          <div class="title-head">猜</div>
          <div class="title">你喜欢</div>
        </div>
        <div class="list">
         <div class="list-container">
            <div class="list-item" @click="goDetail" v-for="(item, index) in likeList" :key="index">
              <img class="item-img" :src="item.productImg1" alt="">
              <div class="item-title">{{item.productName}}</div>
              <div class="item-star">
                <span class="iconfont icon-star" v-for="(s,index) in item.star" :key="index"></span>
              </div>
              <div class="item-price">{{ item.productPrice | numberToString }}</div>
            </div>
         </div>
        </div>
      </div>
      <div class="classify">
        <div class="head">
          <div class="sort">人文社科</div>
          <div class="more">查看更多<span class="iconfont icon-youjiantou"></span></div>
        </div>
        <div class="main">
          <div class="side">
            <img src="~@/assets/images/wenxue.png" alt="" @click="goDetail">
          </div>
          <div class="produce">
            <div class="item" @click="goDetail" v-for="(item, index) in socialScienceList" :key="index">
              <img class="item-img" :src="item.productImg1" alt="">
              <div class="item-title">{{ item.productName }}</div>
              <div class="item-author">库存量：{{ item.productCounts }}</div>
              <div class="item-price">{{ numberToString(item.productPrice) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="classify">
        <div class="head">
          <div class="sort">历史</div>
          <div class="more">查看更多<span class="iconfont icon-youjiantou"></span></div>
        </div>
        <div class="main">
          <div class="side">
            <img src="~@/assets/images/wenxue.png" alt="" @click="goDetail">
          </div>
          <div class="produce">
            <div class="item" @click="goDetail" v-for="(item, index) in historyList" :key="index">
              <img class="item-img" :src="item.productImg1" alt="">
              <div class="item-title">{{ item.productName }}</div>
              <div class="item-author">库存量：{{ item.productCounts }}</div>
              <div class="item-price">{{ numberToString(item.productPrice) }}</div>
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
  import api from '@/api/index';
  export default {
    components: {
      navBar,
      searchBar,
      footerBar
    },
    data() {
      return {
        likeList: [
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
          {
            productImg1: require('@/assets/images/book.png'),
            productName: '0次与10000次:如何创造全新的人生',
            star: 5,
            productPrice: 29.90
          },
        ],
        socialScienceList: [
          {
            productImg1: require('@/assets/images/wen1.png'),
            productName: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            productImg1: require('@/assets/images/wen2.png'),
            productName: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            productImg1: require('@/assets/images/wen3.png'),
            productName: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            productImg1: require('@/assets/images/wen4.png'),
            productName: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          },
          {
            productImg1: require('@/assets/images/wen1.png'),
            productName: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            productImg1: require('@/assets/images/wen2.png'),
            productName: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            productImg1: require('@/assets/images/wen3.png'),
            productName: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            productImg1: require('@/assets/images/wen4.png'),
            productName: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          }
        ],
        historyList:[
          {
            productImg1: require('@/assets/images/wen1.png'),
            productName: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            productImg1: require('@/assets/images/wen2.png'),
            productName: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            productImg1: require('@/assets/images/wen3.png'),
            productName: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            productImg1: require('@/assets/images/wen4.png'),
            productName: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          },
          {
            productImg1: require('@/assets/images/wen1.png'),
            productName: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            productImg1: require('@/assets/images/wen2.png'),
            productName: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            productImg1: require('@/assets/images/wen3.png'),
            productName: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            productImg1: require('@/assets/images/wen4.png'),
            productName: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          }
        ]
      }
    },
    computed: {
      numberToString() {
        return (price) => {
          if(!price) return '';
          return price.toFixed(2);
        }
      }
    },
    filters: {
      numberToString(value) {
        if(!value) return '';
        return `￥${value.toFixed(2)}`;
      }
    },
    mounted () {
      api.getProductList({
        currentPage: 1,
        pageSize: 30
      }).then(res => {
        console.log('res:', res)
        // if (res.data.length) {
        //   this.likeList = res.data.map(item => {
        //     // 随机星星
        //     let stars = parseInt(Math.random()*10 + 1);
        //     item.star = stars >= 5 ? 5 : stars;
        //     return item;
        //   })
        //   this.socialScienceList = res.data.filter(i => i.productType === '人文社科')
        //   this.historyList = res.data.filter(i => i.productType === '历史')
        // }
      })
    },
    methods: {
      gotoCart() {
        this.$router.push('/myCart');
      },
      goDetail() {
        this.$router.push({name: 'goodsDetail'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('~@/assets/iconfont/iconfont.css');

  .home {
    .container {
      width: 1200px;
      margin: 0 auto;
      .recommend {
        margin-bottom: 20px;
        .nav-title {
          height: 51px;
          border-bottom: 1px solid #ffc0cb;
          margin-bottom: 10px;
          .title-head,
          .title {
            display: inline-block;
          }
          .title-head {
            width: 45px;
            height: 45px;
            line-height: 45px;
            font-size: 25px;
            text-align: center;
            color: #ffffff;
            border-radius: 100%;
            background: #ffc0cb;
            margin-right: 5px;
          }
          .title {
            font-size: 20px;
            color: #ffc0cb;
          }
        }
        .list {
          .list-container {
            display: flex;
            flex-wrap: wrap;
            width: 1050px;
            margin: 0 auto;
            .list-item {
              width: 200px;
              height: 240px;
              text-align: center;
              text-decoration: none;
              padding-top: 15px;
              margin-right: 10px;
              margin-bottom: 10px;
              cursor: pointer;
              .item-title {
                width: 105px;
                color: #000000;
                margin: 0 auto;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 13px;
              }
              .item-star {
                color: #c4c4c4;
              }
              .item-price {
                font-weight: bold;
                color: #cf4112;
              }
            }
          }
        }
      }
      .classify {
        margin-bottom: 20px;
        .head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 51px;
          color: #6e6e6e;
          .sort {
            font-size: 22px;
          }
          .more {
            font-size: 16px;
            margin-right: 5px;
            .icon-youjiantou {
              font-size: 25px;
              vertical-align: sub;
            }
            &:hover {
              color: #ff2832;
            }
          }
        }
        .main {
          display: flex;
          .side {
            img {
              width: 230px;
              height: 630px;
              margin-right: 10px;
              cursor: pointer;
            }
          }
          .produce {
            display: flex;
            flex-wrap: wrap;
            .item {
              width: 230px;
              height: 335px;
              text-align: center;
              text-decoration: none;
              box-shadow: 0 0 10px rgba(0, 0, 0, .1);
              transition: all 0.5s;
              padding-top: 15px;
              margin-right: 10px;
              margin-bottom: 10px;
              cursor: pointer;
              &:hover {
                box-shadow: 0 0 40px rgba(0, 0, 0, 0.2)
              }
              .item-title {
                color: #000000;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .item-img {
                margin: 20px 0;
              }
              .item-author {
                font-size: 13px;
                color: #6e6e6e;
                margin: 5px 0;
              }
              .item-price {
                font-weight: bold;
                color: #cf4112;
              }
            }
          }
        }
      }
    }
    .footer {
      img {
        width: 100%;
        min-width: 1200px;
      }
    }
  }
  
  .item-img {
    width: 100%;
    height: 200px;
  }
</style>