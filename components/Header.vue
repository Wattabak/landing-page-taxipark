<template>
  <header>
    <div class="head-class">
      <img
        src="/logo_final_with_text.svg"
        alt="Логотип"
        class="main-logo"
        srcset=""
      />
      <div class="contact-data">
        <div class="phone-text">
          <img src="/icons/phone-icon.svg" alt="phone-icon" />
          <span>+7 (977) 975-90-12</span>
        </div>
        <div class="chat-with-us-block">
          <div style="margin-right:10px">
            <a>
              <img src="/icons/whatsapp.svg" alt="Whatsapp logo" />
            </a>
            <a>
              <img src="/icons/telegram.svg" alt="Telegram logo" />
            </a>
            <a>
              <img src="/icons/messenger.svg" alt="Mesenger logo" />
            </a>
          </div>
          <span style="text-decoration:underline;font-weight:400;">
            Пишите нам
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 999;
}
.head-class {
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 66px;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-logo {
  height: 90%;
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
    a img {
      min-height: 17px;
    }
  }
}
</style>
