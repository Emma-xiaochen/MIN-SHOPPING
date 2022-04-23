<template>
  <div class="search">
    <nav-bar></nav-bar>
    <search-bar></search-bar>
    <div class="container">
      <div class="head">搜索结果：</div>
      <div class="list">
        <template v-if="listData.length">
          <div class="item" @click="goDetail(item.id)" v-for="(item, index) in listData" :key="index">
            <img :src="item.productImg1" alt="图片无法查看"  class="item-img">
            <div class="item-title">{{ item.productName }}</div>
            <div class="item-money">库存量：{{ item.productCounts }}</div>
            <div class="item-price">{{ item.productPrice | numberToString }}</div>
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
  import api from '@/api/index'

  export default {
    components: {
      navBar,
      searchBar,
      footerBar
    },
    data() {
      return {
        listData: [],
        key: ''
      }
    },
    filters: {
      numberToString(value) {
        if(!value) return '';
        return `￥${value.toFixed(2)}`;
      }
    },
    watch: {
      // 搜索 在搜索页触发的
      '$route.query.key' (newValue, oldValue) {
        api.getProductList({
          currentPage: 1, 
          pageSize: 30, 
          productName: newValue
        }).then((res) => {
          this.listData = res.data.data;
        })
      }
    },
    mounted(){
      // 搜索 发起根据搜索key查询商品
      const key = this.$route.query.key;
      api.getProductList({
         currentPage: 1, 
        pageSize: 30, 
        productName: key
      }).then((res) => {
        this.listData = res.data.data;
      })
    },
    methods: {
      goDetail(id) {
        this.$router.push({ name: 'goodsDetail', query: {id}});
      },
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    .container {
      width: 1200px;
      min-height: 600px;
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
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0 10px;
          }
          .item-img {
            width: 200px;
            height: 200px;
            margin: 40px 0;
          }
          .item-money {
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