<template>
  <div>
    <div id="contact-us">
      <h1>Свяжитесь с нами</h1>
      <div>
        <div>
          <!-- This block holds everything contactwise, phones, e-mails, everything that only represents data -->
          <div class="contact-data">
            <div class="text-group">
              <h2>Наш телефон</h2>
              <div class="icon-text">
                <img
                  class="lazyload"
                  data-class="lazyload"
                  data-src="icons/phone-icon-white.svg"
                  alt="icon"
                />
                <span>+7 (977) 975-90-12</span>
              </div>
            </div>
            <div class="text-group">
              <h2>Наш e-mail</h2>
              <div class="icon-text">
                <img
                  class="lazyload"
                  data-class="lazyload"
                  data-src="icons/email-icon-white.svg"
                  alt=""
                />
                <span>info@первыйтаксопарк.рф</span>
              </div>
            </div>
          </div>
          <!-- This block holds interactive contacts, i.e messengers -->
          <div class="interactive-contacts text-group">
            <h2>Мы в мессенджерах</h2>
            <div class="text-group">
              <a href="https://wa.me/89779759012" target="_blank">
                <img
                  class="lazyload"
                  data-class="lazyload"
                  data-src="icons/whatsapp-button.svg"
                  alt="Whatsapp"
                />
              </a>
              <a href="tg://resolve?domain=Onetaxopark" target="_blank">
                <img
                  class="lazyload"
                  data-src="icons/telegram-button.svg"
                  alt="Telegram"
                />
              </a>
              <img
                class="lazyload"
                data-src="icons/messenger-button.svg"
                alt="Messenger"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="interactive-buttons">
            <a href="/#callback-form" class="yellow-callback">
              <img class="lazyload" data-src="/icons/checkers.svg" alt="" />
              Заказать обратный звонок
              <img class="lazyload" data-src="/icons/checkers.svg" alt="" />
            </a>
            <a href="/#registration-form" class="yellow-callback">
              <img class="lazyload" data-src="/icons/checkers.svg" alt="" />
              Оформиться в такоспарке
              <img class="lazyload" data-src="/icons/checkers.svg" alt="" />
            </a>
          </div>
          <div class="adresses text-group">
            <h2>Города, в которых мы работаем:</h2>
            <div class="icon-text">
              <img class="lazyload" data-src="icons/marker.svg" alt="" />
              <span>Москва</span>
            </div>
            <div class="icon-text">
              <img class="lazyload" data-src="icons/marker.svg" alt="" />
              <span>Санкт-Петербург</span>
            </div>
          </div>
          <div class="icon-text">
            <img class="lazyload" data-src="icons/youtube.svg" alt="" />
            <a href="https://www.youtube.com/channel/UCQMsE8OwjpynLt7wPCl4b7g"
              >Наш канал на youtube</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <ul>
        <li>Политика конфиденциальности</li>
        <li @click="scrollToTop">Наверх</li>
        <li>© Первый Таксопарк 2019</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style lang="scss" scoped>
#contact-us {
  background-color: #222e20;
  color: #fff;
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    text-align: left;
  }

  & > div {
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-evenly;
    .text-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-items: flex-start;
      & > h2 {
        margin-bottom: 5px;
      }
      & > img {
        margin-bottom: 5px;
      }
    }
    .icon-text {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 5px;
      a {
        color: #fff;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
      }
      img {
        margin-right: 10px;
      }
      span {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
}
.yellow-callback {
  text-decoration: none;
}

div.container {
  padding: 15px;
  width: 100%;
  color: #fff;
  background-color: #152014;
  ul {
    width: 100%;
    padding-left: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    li {
      cursor: pointer;
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 6.7947px;
      line-height: 8px;
    }
  }
}
@media (min-width: 1024px) {
  #contact-us {
    a,
    h2,
    span {
      margin-bottom: 7px !important;
    }
    .yellow-callback {
      font-size: 14px;
    }
  }
  .icon-text {
    span {
      font-size: 14px !important;
    }
  }
  .container {
    li {
      font-size: 10px !important;
    }
  }
}
</style>
