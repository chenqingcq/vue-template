<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/css/normal.less";
html,
body {
  font-family: "PingFangSC-Regular Avenir", Helvetica, Arial, sans-serif;
}
</style>
