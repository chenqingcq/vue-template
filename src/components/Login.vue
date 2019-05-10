<template>
  <div class="login-container">登录</div>
</template>

<script>
import { loginCompany } from "@/api/userInfo";
export default {
  name: "Login",
  data() {
    return {

    };
  },
  mounted() {
    // loginCompany({
    //   userAccount: "robin",
    //   passWord: this.$md5("robin")
    // }).then(res => {
    //   console.log(res);
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
