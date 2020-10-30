<template>
  <div id="main">Hello World {{ name }}!</div>
</template>

<script>
export default {
  name: "hello-world",
  data: function () {
    return {
      name: "azad",
    };
  },
};
</script>

<style scoped>
#main {
  font-size: 25px;
}
</style>>