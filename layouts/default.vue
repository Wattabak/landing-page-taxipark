<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import lazySizes from 'lazysizes'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

lazySizes.init()

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap'
      }
    ]
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
/* @font-face {
  font-family: Ubuntu;
  src: url(Ubuntu);
} */
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap');
/* @font-face {
  font-family: 'Ubuntu';
  src: url('/assets/fonts/Ubuntu/Ubuntu-Regular.ttf') format('ttf');
} */
/* @font-face {
 font-family: 'Ubuntu';
 src: url('./fonts/Ubuntu-Bold.ttf');
 font-weight: bold;
 font-style: normal;
} */

* {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

html {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding: 20px 15px;
}
.button-normal {
  cursor: pointer;
  background: #2b6ff2;
  border: none;
  color: #fff;
  padding: 5px;
  border: 3px solid transparent;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20.0739px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 10.1399px;
  line-height: 12px;
  text-align: center;
  transition: all 0.2s ease-in;
  &:hover {
    background: #fff;
    color: #000;
    border: 3px solid #2b6ff2;
  }
}

.yellow-callback {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: #fff500;
  width: 100%;
  border: none;
  padding: 3px 0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20.0739px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 10.1399px;
  line-height: 12px;
  text-align: center;
  color: #172116;
  margin-bottom: 5px;
  border: 3px solid #fff500;
  transition: all 0.2s ease-in;
  &:hover {
    background: rgb(34, 46, 32);
    color: #fff500;
  }

  img {
    width: 9px;
    height: 6px;
  }
}

@keyframes shakeError {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 21px !important;
  }
  h2 {
    font-size: 18px !important;
  }
  p,
  label {
    font-size: 16px !important;
  }
  input::placeholder {
    font-size: 15px;
  }
  form span {
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
