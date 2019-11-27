<template>
  <header>
    <nav class="head-class">
      <img
        data-src="icons/menu-button.svg"
        class="lazyload open_menu-mobile"
        @click="toggleMenuShown"
      />
      <a href="/#initial-screen" class="main-logo">
        <img
          class="lazyload"
          data-src="logo_final_with_text.png"
          alt="Логотип"
          srcset=""
        />
      </a>
      <ul :class="{ shown: menuVisibleMobile }">
        <li><a href="#partners-bar">Партнеры</a></li>
        <li><a href="#promos">Преимущества</a></li>
        <li><a href="#special-offers">Специальные предложения</a></li>
        <li><a href="#drivers-reviews">Отзывы</a></li>
      </ul>
      <div class="contact-data">
        <div class="phone-text">
          <img
            class="lazyload"
            data-src="icons/phone-icon.svg"
            alt="phone-icon"
          />
          <span>+7 (977) 975-90-12</span>
        </div>
        <div class="chat-with-us-block">
          <div style="margin-right:10px">
            <a href="https://wa.me/79779759012" target="_blank">
              <img
                class="lazyload"
                data-src="icons/whatsapp.svg"
                alt="Whatsapp logo"
              />
            </a>
            <a href="tg://resolve?domain=Onetaxopark" target="_blank">
              <img
                class="lazyload"
                data-src="icons/telegram.svg"
                alt="Telegram logo"
              />
            </a>
            <a href="viber://add?number=%2B79779759012" target="_blank">
              <img class="lazyload" data-src="icons/viber.svg" alt="Viber" />
            </a>
          </div>
          <span style="text-decoration:underline;font-weight:400;">
            Пишите нам
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data: () => ({
    menuVisibleMobile: false
  }),
  methods: {
    toggleMenuShown() {
      this.menuVisibleMobile = !this.menuVisibleMobile
    },
    hideMenuShown() {
      if (this.menuVisibleMobile) {
        this.menuVisibleMobile = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 999;
}
img.open_menu-mobile {
  display: block;
  flex-grow: 1;
}

ul {
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: hidden;
  list-style-type: none;
  background-color: #fff;
  left: 0;
  opacity: 0;
  top: 0;
  z-index: 0;
  padding: 5px;
  margin: 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in;
  li {
    padding: 5px;
    a {
      color: #000;
      text-decoration: none;
      font-weight: bold;
      font-family: 'Ubuntu', sans-serif;
    }
    &:hover,
    &:focus {
      text-decoration: underline !important;
    }
  }
  &.shown {
    opacity: 1;
    top: 12vh;
    z-index: 9999;
    visibility: visible;
  }
}
@media (max-width: 374px) {
  header {
    .main-logo img {
      width: 128px;
    }
    * {
      font-size: 12px;
    }
    .open_menu-mobile {
      height: 20px !important;
    }
    .chat-with-us-block {
      a img {
        height: 16px !important;
      }
    }
  }
}
@media (min-width: 786px) {
  ul {
    display: flex;
    visibility: visible;
    flex-direction: row;
    align-items: center;
    flex-grow: 3;
    opacity: 1;
    position: relative;
    visibility: visible;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    li {
      margin-left: 5px;
      font-size: 14px;
      padding: 5px;
    }
  }
  img.open_menu-mobile {
    display: none;
  }
}
.head-class {
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: nowrap;
  min-height: 66px;
  height: 10vh;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-logo {
  flex-grow: 2;
  img {
    max-width: 136px;
    width: 136px;
  }
}

.contact-data {
  display: flex;
  flex-direction: column;
  .phone-text {
    margin-bottom: 5px;
  }
  .chat-with-us-block {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: row;
    }
    a img {
      min-height: 17px;
    }
  }
}
</style>
