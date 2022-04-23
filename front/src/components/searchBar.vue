<template>
  <div class="search-bar">
    <div class="container">
      <div class="wrap">
        <div class="logo" @click="goHome">
          <h1 style="color:#ff2832;font-size:40px;">SHOPPING</h1>
        </div>
        <div class="search">
          <input class="search-input" placeholder="关键词" type="text" v-model="key">
          <div class="search-btn" @click="goSearch(key)">
            <span class="iconfont icon-sousuo"></span>
          </div>
        </div>
        <div class="car" @click="gotoCart">
          <span class="iconfont icon-gouwuche"></span>
          <div class="car-title">购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: ''
      }
    },
    methods: {
      goHome() {
        this.$router.push({name: 'home'});
      },
      goSearch(key) {
        if (key) {
          this.$router.push({name: 'search', query: {key}});
        } else {
          this.$router.push({name: 'home'});
        }
      },
      gotoCart() {
        this.$router.push('/myCart');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    background: #fff;
    padding-top: 30px;
    padding-bottom: 5px;
    .container {
      width: 1200px;
      margin: 0 auto;
      .wrap {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        .logo {
          width: 300px;
          margin-left: -30px;
          cursor: pointer;
          img {
            width: 190px;
            height: 55px;
          }
        }
        .search {
          width: 630px;
          input,
          .search-btn {
            float: left;
          }
          input {
            width: 500px;
            height: 40px;
            border: 2px solid #ff2832;
            padding-left: 10px;
            outline: none;
          }
          .search-btn {
            width: 45px;
            height: 44px;
            text-align: center;
            background: #ff2832;
            cursor: pointer;
            .icon-sousuo {
              line-height: 44px;
              font-size: 25px;
              color: #ffffff;
            }
          }
        }
        .car {
          width: 110px;
          height: 40px;
          line-height: 40px;
          text-decoration: none;
          color: #ffffff;
          background: #ff2832;
          border: 2px solid #ff2832;
          &:hover {
            color: #ff2832;
            background: #f6f6f6;
            border: 2px solid #dcdcdc;
            transition: all 0.5s;
          }
          .icon-gouwuche,
          .car-title {
            float: left;
          }
          .icon-gouwuche {
            font-size: 22px;
            margin-left: 8px;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>