<template>
  <div class="login">
    <div class="nav">
      <h1 style="color:#ff2832;font-size:40px;" @click="$router.push({ name:'home' })">SHOPPING</h1>
      </div>
    <div class="container">
      <div class="main">
        <div class="fl"><img src="~@/assets/images/login_propagate.png" alt=""></div>
        <div class="fr" v-if="isLogin">
          <div class="title">登录</div>
          <div class="content">
            <div class="item">
              <input type="text" placeholder="账号" v-model.trim="loginForm.loginName">
            </div>
            <div class="item">
              <input type="password" placeholder="密码" v-model.trim="loginForm.password">
            </div>
            <div class="item info">
              登录即同意 <a href="#">用户协议、隐私政策</a>
            </div>
            <div class="item">
              <button class="login-btn" @click="login">登录</button>
            </div>
            <div class="item">
              <span class="register" @click="isLogin = false">立即注册</span>
              <span class="forget">忘记密码</span>
            </div>
          </div>
        </div>
        <div class="fr" v-else>
          <div class="title">注册</div>
          <div class="content">
            <div class="item">
              <input type="text" placeholder="账号" v-model="registerForm.loginName">
            </div>
            <div class="item">
              <input type="text" placeholder="昵称" v-model="registerForm.nickName">
            </div>
            <div class="item">
              <input type="password" placeholder="密码" v-model="registerForm.password">
            </div>
            <div class="item info">
              登录即同意 <a href="#">用户协议、隐私政策</a>
            </div>
            <div class="item">
              <button class="login-btn" @click="register">注册</button>
            </div>
            <div class="item">
              <span class="forget" @click="isLogin = true">去登录</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <img src="~@/assets/images/footer.png" alt="">
      </div>
      </div>
  </div>
</template>

<script>
import api from '@/api/index';
  export default {
    data() {
      return {
        isLogin: true,
        loginForm: {
          loginName: '',
          password: ''
        },
        registerForm: {
          loginName: '',
          nickName: '',
          password: ''
        }
      }
    },
    watch: {
      isLogin () {
        this.loginForm = {};
        this.registerForm = {};
      }
    },
    methods: {
      // 登录
      login () {
        if (!this.loginForm.loginName || !this.loginForm.password) {
          this.$message.warning('请输入账号和密码');
          return;
        }
        api.login(this.loginForm).then(res => {
          if (res.data) {
            const { id, nickName } = res.data
            window.localStorage.setItem('token', id)
            window.localStorage.setItem('nickName', nickName)
            this.$message.success('登录成功');
            this.$router.replace({ name: 'home' })
          } else {
            this.$message.error('账号或者密码错误');
          }
        }).catch(err => {
          this.$message.error(err);
        })
      },
      // 注册
      register () {
        if (!this.registerForm.loginName || !this.registerForm.password || !this.registerForm.nickName) {
          this.$message.warning('请输入账号、昵称和密码');
          return;
        }
        api.register(this.registerForm).then(res => {
          if (res.code == '200') {
            this.$message.success('注册成功');
          } else if (res.code == '20001') {
            this.$message.error('账号已存在');
          } else {
            this.$message.error('注册失败');
          }
        }).catch(err => {
          this.$message.error(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    .nav {
      width: 1200px;
      margin: 0 auto;
      padding-top: 40px;
      // line-height: 100px;
    }
    .container {
      width: 1200px;
      margin: 0 auto;
      .main {
        height: 500px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 80px;
        .fl {
            margin-left: -10px;
          img {
            width: 680px;
            height: 530px;
            border-radius: 30px;
          }
        }
        .fr {
          width: 420px;
          min-height: 400px;
          border-radius: 10px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, .1);
          margin-left: 80px;
          .title {
            height: 100px;
            line-height: 100px;
            font-size: 20px;
            color: #333;
            font-weight: bold;
            text-align: center;
          }
          .content {
            // margin: 10px;
            text-align: center;
            .item {
              margin-bottom: 20px;
              input {
                width: 340px;
                height: 50px;
                font-size: 16px;
                background: #f9f9f9;
                border: 0;
                padding-left: 10px;
              }
              .login-btn {
                width: 340px;
                height: 50px;
                font-size: 18px;
                text-align: center;
                color: #fff;
                background-image: linear-gradient(90deg,#fe5447,#f3344a);
                border: 0;
                border-radius: 5px;
                box-shadow: 0 3px 8px 1px rgb(235 28 49 / 22%);
                cursor: pointer;
              }
              .register,
              .forget {
                width: 100px;
                display: inline-block;
                font-size: 13px;
                color: #626262;
                text-decoration: none;
                cursor: pointer;
              }
              .register {
                position: relative;
              }
              .register:after {
                content: '';
                display: inline-block;
                width: 1px;
                height: 12px;
                background: rgba(0, 0, 0, .2);
                position: absolute;
                top: 3px;
                right: 0;
              }
            }
            .info {
              font-size: 13px;
              color: #908e8f;
              a {
                color: #151515;
                text-decoration: none;
              }
            }
          }
        }
      }
      .footer {
        margin-top: 20px;
        padding: 50px 0 50px 170px;
      }
    }

  }
</style>