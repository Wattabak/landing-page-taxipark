<template>
  <main>
    <div id="initial-screen">
      <div class="overlay-first-picture"></div>
      <div class="first-picture-background-image"></div>
      <div class="content-in-overlay">
        <div class="text-advantages">
          <div>
            <img src="/icons/five-icon.svg" alt="icon" />
            <span>Регистрация за <span>5 минут</span></span>
          </div>
          <div>
            <img src="/icons/quick-money-icon.svg" alt="icon" />
            <span>Мгновенные выплаты</span>
          </div>
          <div>
            <img src="/icons/time-is-money.svg" alt="icon" />
            <span>Доход до 10 000 рублей в сутки</span>
          </div>
        </div>
        <CallbackForm />
      </div>
    </div>
    <div id="partners-bar">
      <h1>Подключим Вас к крупнейшим агрегаторам</h1>
      <ul>
        <li><img src="" alt="Яндекс.Такси" /></li>
        <li><img src="" alt="GetT" /></li>
        <li><img src="" alt="СитиМобил" /></li>
        <li><img src="" alt="Bolt" /></li>
      </ul>
    </div>
    <div id="promos">
      <div>
        <img src="/icons/yandex-gasstation.png" alt="" />
        <h2>Используйте Яндекс.Заправки</h2>
        <p>
          Безналичный баланс в Таксометре можно потратить на полный бак в
          сервисе Яндекс.<span>Заправок</span>
        </p>
      </div>
      <div>
        <img src="/icons/moscow_icon.svg" alt="" />
        <h2>Работаем в крупнейших городах России</h2>
        <p>Первый Таксопарк работает на территории Москвы и Санкт-Петербурга</p>
      </div>
      <div>
        <img src="/icons/five-years.svg" alt="" />
        <h2>Таксопарк работает уже 5 лет</h2>
        <p>
          Первый Таксопарк находится на рынке уже более 5 лет, с нами работают
          столько то человек. Выплачено около стольких то денег...
        </p>
      </div>
      <div>
        <img src="/icons/momentary-payouts.svg" alt="" />
        <h2>Выводите средства мгновенно</h2>
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
      <div></div>
      <h2>
        Приведите нового сотрудника в Первый Таксопарк и получайте 1% его
        ежедневного заработка
      </h2>
    </div>
    <div id="callback-form">
      <h1>Закажите обратный звонок!</h1>
      <div>
        <img src="" alt="" />
        <p>
          Получите бесплатную консультацию от менеджера Первого Таксопарка. Наши
          сотрудники помогут оформить необходимые документы и начать
          зарабатывать за 5 минут!
        </p>
      </div>
      <CallbackForm />
    </div>
    <div id="drivers-reviews">
      <h1>Отзывы наших водителей</h1>
      <div class="reviews">
        <div class="review">
          <img src="" alt="Фотография Водителя" />
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
        <div></div>
        <div></div>
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
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
}
#initial-screen {
  position: relative;
  height: 100vh;
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
  padding: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 0 15px 0;
    span {
      color: #fff;
      margin-left: 15px;
      font-size: 15.5px;
      span {
        margin: 0;
        font-family: inherit;
        color: #fff500;
      }
    }
  }
}
#promos {
  background-color: #fcf206;
  h2 {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    span {
      font-weight: 100;
    }
  }
}
h1 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#special-offers {
  background-color: #ed2e2e;
}
#contact-us {
  background-color: #222e20;
  color: #fff;
}
</style>
