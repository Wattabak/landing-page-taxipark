<template>
  <main>
    <div id="initial-screen">
      <div class="overlay-first-picture"></div>
      <div class="first-picture-background-image"></div>
      <div class="content-in-overlay">
        <div class="text-advantages">
          <div>
            <img data-src="icons/five-icon.svg" class="lazyload" alt="icon" />
            <span>Регистрация за <span>5 минут</span></span>
          </div>
          <div>
            <img
              class="lazyload"
              data-src="icons/quick-money-icon.svg"
              alt="icon"
            />
            <span>Мгновенные выплаты</span>
          </div>
          <div>
            <img
              class="lazyload"
              data-src="icons/time-is-money.svg"
              alt="icon"
            />
            <span>Доход до 10 000 рублей в сутки</span>
          </div>
        </div>
        <CallbackForm
          button-text="Заказать обратный звонок"
          class="overlay-form"
        />
      </div>
    </div>
    <div id="partners-bar">
      <h1>Подключим Вас к крупнейшим агрегаторам</h1>
      <ul>
        <div>
          <li>
            <img
              class="lazyload"
              data-src="images/partners/yandex-taxi.png"
              alt="Яндекс.Такси"
            />
          </li>
          <li>
            <img
              class="lazyload"
              data-src="images/partners/citimobil.png"
              alt="СитиМобил"
            />
          </li>
        </div>
        <div>
          <li>
            <img
              class="lazyload"
              data-src="images/partners/gett.png"
              alt="GetT"
            />
          </li>
          <li>
            <img
              class="lazyload"
              data-src="images/partners/bolt.png"
              alt="Bolt"
            />
          </li>
        </div>
      </ul>
    </div>
    <div id="promos">
      <div>
        <div>
          <img class="lazyload" data-src="icons/ruble.svg" alt="" />
          <h2>Зарабатывайте до 10 000 ₽/день</h2>
        </div>
        <p>
          Первый таксопарк устанавливает лояльные проценты выплат, что позволит
          вам зарабатывать до 10 000 рубелй в день.
        </p>
      </div>
      <div>
        <div>
          <img class="lazyload" data-src="icons/taxi-icon.svg" alt="" />
          <h2>Работаем с крупнейшими агрегаторами</h2>
        </div>
        <p>
          Мы сотрудничаем с Яндекс.Такси, Bolt, СитиМобил и GetT. Мы сможем
          подключить Вас к любой из вышеперечисленных систем в считанные минуты.
        </p>
      </div>
      <div>
        <div>
          <img class="lazyload" data-src="icons/percent.svg" alt="" />
          <h2>Множество акций и специальных предложений</h2>
        </div>
        <p>
          В Первом Таксопарке мы предоставим Вам лучшие предложения заработка.
          Ознакомиться с несколькими из наших специальных предложений Вы можете
          ниже.
        </p>
      </div>
      <div>
        <div>
          <img class="lazyload" data-src="icons/momentary-payouts.svg" alt="" />
          <h2>Выводите средства мгновенно</h2>
        </div>
        <p>
          Деньги со счета можно выводить самостоятельно, мгновенно и на любые
          карты.
        </p>
      </div>
      <div>
        <div>
          <img class="lazyload" data-src="icons/yandex-gasstation.png" alt="" />
          <h2>Используйте Яндекс.Заправки</h2>
        </div>
        <p>
          Безналичный баланс в Таксометре можно потратить на полный бак в
          сервисе Яндекс.<span>Заправок</span>
        </p>
      </div>
      <div>
        <div>
          <img class="lazyload" data-src="icons/moscow_icon.svg" alt="" />
          <h2>Работаем в крупнейших городах России</h2>
        </div>
        <p>Первый Таксопарк работает на территории Москвы и Санкт-Петербурга</p>
      </div>
    </div>
    <div id="registration-form">
      <h1>Зарегистрируйтесь в Первом Таксопарке, заполнив форму ниже</h1>
      <div>
        <RegistrationForm />
      </div>
    </div>
    <div id="special-offers">
      <h1>Специальные предложения</h1>
      <h2>Сдайте ваш автомобиль в аренду и получайте пассивный заработок</h2>
      <div id="offer-1">
        <div class="offer-wrapper">
          <img
            class="lazyload"
            data-src="images/offers/1.svg"
            alt="Первый шаг"
          />
          <div>
            <p>
              Простаивает хороший автомобиль? Ищете источник пассивного
              заработка?
            </p>
            <img
              class="lazyload"
              data-src="images/offers/hyundai-solaris.png"
              srcset="
                images/offers/hyundai-solaris.png    171w,
                images/offers/hyundai-solaris-x2.png 256w
              "
              sizes="(max-width:1024px) 171px, 256px"
              alt="Ваш автомобиль"
            />
          </div>
        </div>
        <div class="offer-wrapper">
          <img
            class="lazyload"
            data-src="images/offers/2.svg"
            alt="Второй шаг"
          />
          <div>
            <p>
              Сдайте ваш автомобиль в аренду в Первый Таксопарк, мы подберем
              водителя.
            </p>
            <img
              class="lazyload"
              data-src="images/offers/solaris_taxi.png"
              srcset="
                images/offers/solaris_taxi.png    151w,
                images/offers/solaris_taxi-x2.png 256w
              "
              sizes="(max-width:1024px) 151px, 256px"
              alt="Ваш автомобиль такси"
            />
          </div>
        </div>
        <div class="offer-wrapper">
          <img
            class="lazyload"
            data-src="images/offers/3.svg"
            alt="Третий шаг"
          />
          <div>
            <p>
              Получайте деньги от аренды вашего автомобиля регулярно.
            </p>
            <img
              class="lazyload"
              data-src="images/offers/cash-money.png"
              srcset="
                images/offers/cash-money.png    112w,
                images/offers/cash-money-x2.png 256w
              "
              sizes="(max-width:1024px) 112px, 256px"
              alt="Деньги"
            />
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
            <img
              class="lazyload"
              data-src="images/offers/taxi-driver-1.png"
              alt="Водитель"
            />
            <p>Зарабатывает до <span>5000</span> ₽/день</p>
          </div>
          <div>
            <img class="lazyload" data-src="" alt="" />
            <span>1%=<span>50</span> ₽/день</span>
          </div>
        </div>
        <div>
          <div class="driver-income">
            <img
              class="lazyload"
              data-src="images/offers/taxi-driver-1.png"
              alt="Водитель"
            />
            <p>Зарабатывает до <span>4000</span> ₽/день</p>
          </div>
          <div>
            <img class="lazyload" data-src="" alt="" />
            <span>1%=<span>40</span> ₽/день</span>
          </div>
        </div>
        <div>
          <div class="driver-income">
            <img
              class="lazyload"
              data-src="images/offers/taxi-driver-1.png"
              alt="Водитель"
            />
            <p>Зарабатывает до <span>7000</span> ₽/день</p>
          </div>
          <div>
            <img class="lazyload" data-src="" alt="" />
            <span>1%=<span>70</span> ₽/день</span>
          </div>
        </div>
        <img
          class="lazyload"
          data-src="images/offers/man-showing-amount.png"
          alt="Сколько можно заработать"
        />
      </div>
    </div>

    <div id="callback-form">
      <h1>Закажите обратный звонок!</h1>
      <div>
        <div class="promo">
          <img class="lazyload" data-src="images/consultant-icon.png" alt="" />
          <p>
            Получите <span>бесплатную</span> консультацию от менеджера Первого
            Таксопарка. Наши сотрудники помогут оперативно оформить необходимые
            документы, и через <span>5 минут!</span> Вы начнёте зарабатывать!
          </p>
        </div>

        <div>
          <CallbackForm button-text="Заказать обратный звонок" :style="Blue" />
        </div>
      </div>
    </div>
    <div id="drivers-reviews">
      <h1>Отзывы наших водителей</h1>
      <div class="reviews">
        <div class="review">
          <img
            class="lazyload"
            data-src="images/driver-picture.png"
            alt="Фотография Водителя"
          />

          <h3>Алексей. В Таксопарке уже 2 года</h3>
          <p>
            Lorem ipsum dolor sit amet, Первый Таксопарк это очень круто,
            быстрые выплаты, зарегистрировался за 2 минуты онлайн, работаю уже 2
            года очень советую. Lorem ipsum dolor sit amet, Первый Таксопарк это
            очень круто, быстрые выплаты,
          </p>
        </div>
        <div class="review">
          <img
            class="lazyload"
            data-src="images/driver-picture.png"
            alt="Фотография Водителя"
          />

          <h3>Алексей. В Таксопарке уже 2 года</h3>
          <p>
            Lorem ipsum dolor sit amet, Первый Таксопарк это очень круто,
            быстрые выплаты, зарегистрировался за 2 минуты онлайн, работаю уже 2
            года очень советую. Lorem ipsum dolor sit amet, Первый Таксопарк это
            очень круто, быстрые выплаты.
          </p>
        </div>
        <div class="review">
          <img
            class="lazyload"
            data-src="images/driver-picture.png"
            alt="Фотография Водителя"
          />

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
    <confidentiality-aggreement />
    <opherta-aggreement />
  </main>
</template>

<script>
import CallbackForm from './forms/Callback-Form.vue'
import RegistrationForm from './forms/Registration-Form.vue'
import ConfidentialityAggreement from './ConfidentialityAggreement'
import OphertaAggreement from './OphertaAggreement'

export default {
  components: {
    CallbackForm,
    RegistrationForm,
    ConfidentialityAggreement,
    OphertaAggreement
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
main {
  width: 100%;
}
.v--modal-overlay {
  background: rgba(0, 0, 0, 0.5);
}
#initial-screen {
  position: relative;
  height: 100vh;
  .overlay-first-picture {
    background: rgba(37, 154, 154, 0.72);
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .first-picture-background-image {
    background-image: url('/images/Smiling-Taxi-driver-Stock-Photo-blur-smaller.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .content-in-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 12vh;
    width: 100vw;
    height: 100%;
    justify-content: left;
    align-items: center;
    position: absolute;
    top: 0;
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
  }
  .overlay-form {
    width: 75%;
    max-width: 360px;
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
    div {
      display: flex;
      flex-direction: row;
    }
    li {
      padding: 10px;
    }
  }
}
#promos {
  background-color: #fcf206;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
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

#registration-form {
  margin-bottom: 20px;
  div {
    width: 100%;
    max-width: 468px;
    margin: 0 auto;
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
    padding: 0 15px;
  }
  #offer-1 {
    justify-items: center;
    display: grid;
    grid-gap: 15px;
    margin: 15px;
    .offer-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
        p {
          max-width: 295px;
          text-align: left;
          font-family: Ubuntu;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          margin-bottom: 10px;
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
      left: -30px;
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
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
  }
  div.promo {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 15px;
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    max-width: 460px;
    span {
      color: #ed2e2e;
    }
  }
}
#drivers-reviews {
  .reviews {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    .review {
      flex: 0 0 auto;
    }
  }
  .review {
    position: relative;
    margin: 15px;
    margin-top: 50px;
    padding: 15px 29px;
    background: #fbf8c3;
    border-radius: 0px 0px 15px 15px;
    max-width: 450px;
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

@media (min-width: 468px) {
  #initial-screen {
    .content-in-overlay {
      flex-direction: row;
      justify-content: center;
      .text-advantages {
        align-self: center;
      }
    }
  }
  #registration-form {
    div {
      width: 75%;
    }
  }
}

@media (min-width: 768px) {
  #promos {
    grid-template-columns: repeat(2, 1fr);
  }
  #offer-2 {
    width: 75%;
    margin: 0 auto;
    & > img {
      left: 0 !important;
    }
  }
  #callback-form > div {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  #initial-screen {
    div.text-advantages {
      div {
        img {
          width: 64px;
        }
        span {
          font-size: 18px !important;
        }
      }
    }
  }

  #promos {
    grid-template-columns: repeat(3, 1fr);
  }

  #offer-1 {
    grid-template-columns: 1fr;
    margin: 15px auto !important;
    width: 45%;
    grid-template-rows: repeat(3, 1fr);
    div {
      &:nth-child(1),
      &:nth-child(3) {
        justify-self: flex-start;
      }
      &:nth-child(2) {
        justify-self: flex-end;
      }
    }
  }
  #offer-2 {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  #drivers-reviews {
    .reviews {
      justify-content: center;
    }
  }
}
</style>
