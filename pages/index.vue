<template>
  <div>
    <div class="container">
      <Main />
    </div>
  </div>
</template>

<script>
import Main from '~/components/Main.vue'

export default {
  head() {
    return {
      title: 'Первый таксопарк',
      meta: [
        {
          name: 'keywords',
          content:
            'Таксопарк, Первый Таксопарк, работа таксист, таксист, такси,'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Устраивайтесь работать в Первый Таксопарк! Заработок до 10 000 рублей, мгновенные выплаты, специальные предложения и многое другое.'
        }
      ]
    }
  },
  components: {
    Main
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
