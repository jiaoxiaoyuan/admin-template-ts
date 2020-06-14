<template>
  <div class="login-container">
    <div class="login-logo-bysj"></div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-form
          ref="loginForm"
          :rules="rules"
          :model="loginForm"
          class="login-form"
          label-position="left"
          label-width="0px"
        >
          <div class="title">
            hello !
          </div>
          <div class="title-tips">欢迎来到{{ title }}！</div>

          <el-form-item prop="username" class="login-form-admin">
            <el-input
              v-model="loginForm.username"
              size="medium"
              auto-complete="off"
              placeholder="请输入用户名"
            >
              <i slot="prefix" class="loginicn iconfont icon-yonghuming" />
            </el-input>
          </el-form-item>

          <el-form-item prop="password" class="login-form-pass">
            <el-input
              v-model="loginForm.password"
              size="medium"
              type="password"
              show-password
              placeholder="请输入正确密码"
              auto-complete="off"
              @keyup.enter.native="submitForm()"
            >
              <i slot="prefix" class="loginicn iconfont icon-mimacopy" />
            </el-input>
          </el-form-item>

          <!-- 登录button -->
          <el-form-item>
            <el-button
              :loading="loading"
              class="login-btn"
              type="primary"
              style="width: 100%;"
              @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import md5 from "md5";
export default {
  name: "Login",
  data() {
    return {
      nodeEnv: process.env.NODE_ENV,
      title: process.env.VUE_APP_TITLE,
      loginForm: {
        username: "杨志君",
        password: "huapu9555",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "用户名长度在 2 到 10 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度在 5 到 12 个字符", trigger: "blur" },
        ],
      },
      loading: false,
      redirect: undefined,
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          // const params = {
          //   client_id: "platManagement",
          //   client_secret: "user123",
          //   grant_type: "password",
          //   password: md5(this.rules.password),
          //   username: this.rules.username,
          // };
          const params = {
            pwd: 123456,
            username: "admin",
            autoLogin: true,
          };
          this.$axios
            .post("/api/users/login", params)
            .then((res) => {
              this.loading = false;
              console.log(res.data);
              // 存储token
              localStorage.setItem("tsToken", res.data.token);

              // 存储到vuex中
              this.$store.commit("SAVE_USERINFO", res.data);

              // 登录成功 跳转 /
              this.$router.push("/");

              this.$message.success("登录成功");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  min-height: 600px;
  background: url("~@/assets/login_images/background.jpg") center center fixed no-repeat;
  background-size: cover;

  .title {
    height: 50px;
    font-size: 54px;
    font-weight: 500;
    color: rgba(14, 18, 26, 1);
  }

  .title-tips {
    height: 24px;
    margin-top: 29px;
    font-size: 26px;
    font-weight: 400;
    color: rgba(14, 18, 26, 1);
  }

  .login-btn {
    display: inherit;
    width: 220px;
    height: 60px;
    margin-top: 5px;
    border: 0;

    &:hover {
      opacity: 0.9;
    }
  }

  .login-logo-bysj {
    position: absolute;
    top: 45px;
    left: 45px;

    img {
      width: 180px;
    }
  }

  .login-form {
    position: relative;
    max-width: 100%;
    margin: 22vh 10% 10%;
    overflow: hidden;

    .forget-password {
      width: 100%;
      margin-top: 40px;
      text-align: left;

      .forget-pass {
        width: 129px;
        height: 19px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(92, 102, 240, 1);
      }
    }
  }

  .tips {
    margin-bottom: 10px;
    font-size: $base-font-size-default;
    color: $base-color-white;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      font-size: 34px;
      font-weight: bold;
      color: $base-color-blue;
      text-align: center;
    }
  }

  ::v-deep {
    .el-form-item {
      padding-right: 0;
      margin: 20px 0;
      color: #454545;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 2px;

      &__content {
        min-height: $base-input-height;
        line-height: $base-input-height;
      }

      &__error {
        position: absolute;
        top: 100%;
        left: 18px;
        font-size: $base-font-size-small;
        line-height: 18px;
        color: $base-color-red;
      }
    }

    .el-input {
      box-sizing: border-box;

      input {
        height: 58px;
        padding-left: 45px;
        font-size: $base-font-size-default;
        line-height: 58px;
        color: $base-font-color;
        background: #f6f4fc;
        border: 0;
        caret-color: $base-font-color;
      }
    }
    .el-input__prefix {
      left: 10px !important;
    }
    .el-icon-view:before {
      content: "\e6ce";
      font-size: 20px;
    }
    .el-input--medium .el-input__icon {
      line-height: 58px;
      margin-right: 10px;
    }
  }
  .loginicn {
    color: rgba(153, 204, 255, 1);
    line-height: 58px;
    font-size: 20px;
  }
}
</style>
