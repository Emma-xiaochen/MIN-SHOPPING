<template>
  <div class="search">
    <nav-bar></nav-bar>
    <search-bar></search-bar>
    <div class="container">
      <div class="head">搜索结果：</div>
      <div class="list">
        <template v-if="listData.length">
          <div class="item" @click="goDetail" v-for="(item, index) in listData" :key="index">
            <img :src="item.src" alt="图片无法查看"  class="item-img">
            <div class="item-title">{{ item.title }}</div>
            <div class="item-author">{{ item.author }}</div>
            <div class="item-price">{{ item.price | numberToString }}</div>
          </div>
        </template>
        <template v-else>
          <div>搜索不到相关商品</div>
        </template>
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
    data() {
      return {
        listData: [
          {
            src: require('@/assets/images/wen1.png'),
            title: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            src: require('@/assets/images/wen2.png'),
            title: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            src: require('@/assets/images/wen3.png'),
            title: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            src: require('@/assets/images/wen4.png'),
            title: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          },
          {
            src: require('@/assets/images/wen1.png'),
            title: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            src: require('@/assets/images/wen2.png'),
            title: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            src: require('@/assets/images/wen3.png'),
            title: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            src: require('@/assets/images/wen4.png'),
            title: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          },
          {
            src: require('@/assets/images/wen1.png'),
            title: '人间清醒',
            author: '梁晓声',
            price: 28.00
          },
          {
            src: require('@/assets/images/wen2.png'),
            title: '花香拦路',
            author: '张丽钧',
            price: 33.60
          },
          {
            src: require('@/assets/images/wen3.png'),
            title: '你听懂了没有',
            author: '戴建业·果麦文化',
            price: 34.00
          },
          {
            src: require('@/assets/images/wen4.png'),
            title: '老舍：人间这出戏',
            author: '老舍',
            price: 22.50
          }
        ]
      }
    },
    filters: {
      numberToString(value) {
        if(!value) return '';
        return `￥${value.toFixed(2)}`;
      }
    },
    mounted(){
      console.log('this.$route.query.key:', this.$route.query.key)
    },
    methods: {
      goDetail() {
        this.$router.push({ name: 'goodsDetail' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    .container {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 10px;
      .head {
        height: 41px;
        line-height: 41px;
        color: #757575;
        border-bottom: 2px solid #ff2832;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 20px;
        .item {
          width: 285px;
          height: 400px;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 0 10px rgba(0, 0, 0, .1);
          transition: all 0.5s;
          padding-top: 15px;
          margin-bottom: 15px;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.2)
          }
          .item-title {
            color: #000000;
          }
          .item-img {
            width: 200px;
            height: 200px;
            margin: 40px 0;
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
</style>