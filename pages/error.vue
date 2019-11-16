<template>
  <div class="container">
    <div class="error">
      <span>404</span>
      <h1>Что-то пошло не так. Сайт недоступен</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: grey;
  height: 100vh;
  align-items: center;
  justify-content: center;
  span {
    font-size: 54px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
}
.error {
  margin-top: 12vh;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
}
</style>
