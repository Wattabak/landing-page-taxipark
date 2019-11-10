<template>
  <main>
    <div id="initial-screen">
      <div class="overlay-first-picture"></div>
      <div class="first-picture-background-image"></div>
      <div class="content-in-overlay">
        <div class="text-advantages">
          <div>
            <img src="icons/five-icon.svg" alt="icon" />
            <span>Регистрация за <span>5 минут</span></span>
          </div>
          <div>
            <img src="icons/quick-money-icon.svg" alt="icon" />
            <span>Мгновенные выплаты</span>
          </div>
          <div>
            <img src="icons/time-is-money.svg" alt="icon" />
            <span>Доход до 10 000 рублей в сутки</span>
          </div>
        </div>
        <CallbackForm class="overlay-form" />
      </div>
    </div>
    <div id="partners-bar">
      <h1>Подключим Вас к крупнейшим агрегаторам</h1>
      <ul>
        <li>
          <img src="images/partners/yandex-taxi.png" alt="Яндекс.Такси" />
        </li>
        <li><img src="images/partners/citimobil.png" alt="GetT" /></li>
        <li><img src="images/partners/gett.png" alt="СитиМобил" /></li>
        <li><img src="images/partners/bolt.png" alt="Bolt" /></li>
      </ul>
    </div>
    <div id="promos">
      <div>
        <div>
          <img src="icons/yandex-gasstation.png" alt="" />
          <h2>Используйте Яндекс.Заправки</h2>
        </div>
        <p>
          Безналичный баланс в Таксометре можно потратить на полный бак в
          сервисе Яндекс.<span>Заправок</span>
        </p>
      </div>
      <div>
        <div>
          <img src="icons/moscow_icon.svg" alt="" />
          <h2>Работаем в крупнейших городах России</h2>
        </div>
        <p>Первый Таксопарк работает на территории Москвы и Санкт-Петербурга</p>
      </div>
      <div>
        <div>
          <img src="icons/five-years.svg" alt="" />
          <h2>Таксопарк работает уже 5 лет</h2>
        </div>
        <p>
          Первый Таксопарк находится на рынке уже более 5 лет, с нами работают
          столько то человек. Выплачено около стольких то денег...
        </p>
      </div>
      <div>
        <div>
          <img src="icons/momentary-payouts.svg" alt="" />
          <h2>Выводите средства мгновенно</h2>
        </div>
        <p>Деньги со счета можно выводить мгновенно без лишних вопросов</p>
      </div>
    </div>
    <div id="registration-form">
      <h1>Зарегистрируйтесь в Первом Таксопарке, заполнив форму ниже</h1>
      <RegistrationForm />
    </div>
    <div id="special-offers">
      <h1>Специальные предложения</h1>
      <h2>Сдайте ваш автомобиль в аренду и получайте пассивный заработок</h2>
      <div id="offer-1">
        <div class="offer-wrapper">
          <img src="images/offers/1.svg" alt="Первый шаг" />
          <div>
            <p>
              Простаивает хороший автомобиль? Ищете источник пассивного
              заработка?
            </p>
            <img src="images/offers/hyundai-solaris.png" alt="Ваш автомобиль" />
          </div>
        </div>
        <div class="offer-wrapper">
          <img src="images/offers/2.svg" alt="Второй шаг" />
          <div>
            <p>
              Сдайте ваш автомобиль в аренду в Первый Таксопарк, мы подберем
              водителя.
            </p>
            <img
              src="images/offers/solaris_taxi.png"
              alt="Ваш автомобиль такси"
            />
          </div>
        </div>
        <div class="offer-wrapper">
          <img src="images/offers/3.svg" alt="Третий шаг" />
          <div>
            <p>
              Получайте деньги с аренды автомобиля каждый месяц
            </p>
            <img src="images/offers/cash-money.png" alt="Деньги" />
          </div>
        </div>
      </div>
      <h2>
        Приведите нового сотрудника в Первый Таксопарк и получайте 1% его
        ежедневного заработка
      </h2>
      <div id="offer-2">
        <div>
          <div class="driver-income">
            <img src="images/offers/taxi-driver-1.png" alt="Водитель" />
            <p>Зарабатывает до <span>5000</span> ₽/день</p>
          </div>
          <div>
            <img src="" alt="" />
            <span>1%=<span>50</span> ₽/день</span>
          </div>
        </div>
        <div>
          <div class="driver-income">
            <img src="images/offers/taxi-driver-1.png" alt="Водитель" />
            <p>Зарабатывает до <span>4000</span> ₽/день</p>
          </div>
          <div>
            <img src="" alt="" />
            <span>1%=<span>40</span> ₽/день</span>
          </div>
        </div>
        <div>
          <div class="driver-income">
            <img src="images/offers/taxi-driver-1.png" alt="Водитель" />
            <p>Зарабатывает до <span>7000</span> ₽/день</p>
          </div>
          <div>
            <img src="" alt="" />
            <span>1%=<span>70</span> ₽/день</span>
          </div>
        </div>
        <img
          src="images/offers/man-showing-amount.png"
          alt="Сколько можно заработать"
        />
      </div>
    </div>
    <div id="callback-form">
      <h1>Закажите обратный звонок!</h1>
      <div class="promo">
        <img src="images/consultant-icon.png" alt="" />
        <p>
          Получите <span>бесплатную</span> консультацию от менеджера Первого
          Таксопарка. Наши сотрудники помогут оформить необходимые документы и
          начать зарабатывать за <span>5 минут!</span>
        </p>
      </div>
      <div>
        <CallbackForm :style="Blue" />
      </div>
    </div>
    <div id="drivers-reviews">
      <h1>Отзывы наших водителей</h1>
      <div class="reviews">
        <div class="review">
          <img src="images/driver-picture.png" alt="Фотография Водителя" />

          <h3>Алексей. В Таксопарке уже 2 года</h3>
          <p>
            Lorem ipsum dolor sit amet, Первый Таксопарк это очень круто,
            быстрые выплаты, зарегистрировался за 2 минуты онлайн, работаю уже 2
            года очень советую. Lorem ipsum dolor sit amet, Первый Таксопарк это
            очень круто, быстрые выплаты,
          </p>
        </div>
      </div>
    </div>
    <div id="contact-us">
      <h1>Свяжитесь с нами</h1>
      <div>
        <div>
          <!-- This block holds everything contactwise, phones, e-mails, everything that only represents data -->
          <div class="contact-data">
            <div class="text-group">
              <h2>Наш телефон</h2>
              <div class="icon-text">
                <img src="icons/phone-icon-white.svg" alt="icon" />
                <span>+7 (977) 975-90-12</span>
              </div>
            </div>
            <div class="text-group">
              <h2>Наш e-mail</h2>
              <div class="icon-text">
                <img src="icons/email-icon-white.svg" alt="" />
                <span>info@первыйтаксопарк.рф</span>
              </div>
            </div>
          </div>
          <!-- This block holds interactive contacts, i.e messengers -->
          <div class="interactive-contacts text-group">
            <h2>Мы в мессенджерах</h2>
            <div class="text-group">
              <img src="icons/whatsapp-button.svg" alt="Whatsapp" />
              <img src="icons/telegram-button.svg" alt="Telegram" />
              <img src="icons/messenger-button.svg" alt="Messenger" />
            </div>
          </div>
        </div>
        <div>
          <div class="interactive-buttons">
            <button class="yellow-callback">
              <img src="/icons/checkers.svg" alt="" />
              Заказать обратный звонок
              <img src="/icons/checkers.svg" alt="" />
            </button>
            <button class="yellow-callback">
              <img src="/icons/checkers.svg" alt="" />
              Оформиться в такоспарке
              <img src="/icons/checkers.svg" alt="" />
            </button>
          </div>
          <div class="adresses text-group">
            <h2>Города, в которых мы работаем:</h2>
            <div class="icon-text">
              <img src="icons/marker.svg" alt="" />
              <span>Москва</span>
            </div>
            <div class="icon-text">
              <img src="icons/marker.svg" alt="" />
              <span>Санкт-Петербург</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CallbackForm from './forms/Callback-Form.vue'
import RegistrationForm from './forms/Registration-Form.vue'

export default {
  components: {
    CallbackForm,
    RegistrationForm
  },
  data() {
    return {
      Blue: {
        backgroundColor: '#2B6FF2'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yellow-callback {
  background: #fff500;
  width: 100%;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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

  img {
    width: 9px;
    height: 6px;
  }
}
h1 {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding: 20px 15px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
  width: 100%;
}
#initial-screen {
  position: relative;
  height: 100vh;
  .content-in-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }
  .overlay-form {
    width: 75%;
  }
}
.overlay-first-picture {
  background: rgba(37, 154, 154, 0.72);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.first-picture-background-image {
  background-image: url('/images/taxi-driver-background-blur.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}
.content-in-overlay {
  width: 100vw;
  height: 100%;
  justify-content: left;
  align-items: center;
  position: absolute;
  top: 0;
  display: flex;
}
.text-advantages {
  align-self: flex-start;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 0 15px 0;
    span {
      color: #fff;
      margin-left: 15px;
      font-size: 15.5px;
      max-width: 150px;
      text-align: left;
      span {
        margin: 0;
        font-family: inherit;
        color: #fff500;
      }
    }
  }
}
#partners-bar {
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    li {
      padding: 10px;
    }
  }
}
#promos {
  background-color: #fcf206;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    h2 {
      font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      text-align: left;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      max-width: 158px;
      span {
        font-weight: 100;
      }
    }
    p {
      text-align: left;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      max-width: 305px;
    }
  }
}

#special-offers {
  background-color: #ed2e2e;
  color: #fff;
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
  #offer-1 {
    .offer-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 15px;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        p {
          text-align: left;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #fff;
        }
        img {
        }
      }
    }
  }
  #offer-2 {
    position: relative;
    padding: 15px;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-items: flex-end;
    }
    & > img {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .driver-income {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      p {
        max-width: 120px;
        span {
          color: #fcf206;
        }
      }
    }
  }
}
#callback-form {
  div {
    padding: 15px;
    &.promo {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        margin-right: 15px;
      }
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    span {
      color: #ed2e2e;
    }
  }
}
#drivers-reviews {
  .review {
    position: relative;
    margin: 15px;
    padding: 15px 29px;
    background: #fbf8c3;
    border-radius: 0px 0px 15px 15px;
    img {
      position: absolute;
      top: -32px;
      left: 0;
    }
    h3 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      text-align: left;
      margin-left: 50px;
      margin-bottom: 10px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      text-align: justify;
    }
  }
}
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
</style>
