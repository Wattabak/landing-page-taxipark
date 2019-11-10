<template>
  <form action="">
    <h2>Заполните форму, и начинайте зарабатывать!</h2>
    <div class="field">
      <label>
        Ваше ФИО
      </label>
      <input
        id="name"
        type="text"
        name="phone"
        placeholder="Иванов Иван"
        requried
      />
    </div>
    <div class="field">
      <label>
        Ваш номер телефона
      </label>
      <input
        type="tel"
        name="phone"
        placeholder="+7 "
        pattern="+[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
    </div>
    <div class="field">
      <label>
        Адрес электронной почты
      </label>
      <input type="mail" name="mail" placeholder="e-mail@yandex.ru" required />
    </div>
    <div class="checkbox">
      <input
        type="checkbox"
        name="mail"
        placeholder="e-mail@yandex.ru"
        required
      />
      <label> Подтвердить соглашение <a>оферты</a> </label>
    </div>
    <div class="checkbox">
      <input
        type="checkbox"
        name="mail"
        placeholder="e-mail@yandex.ru"
        required
      />
      <label>
        Хотите загрузить фотографии необходимых документов прямо сейчас? (Вы
        сможете сделать это после нажатия кнопки <span>Регистрация</span>)
      </label>
    </div>
    <span>
      Нажимая на кнопку <span>Регистрация</span>, вы даете согласие на обработку
      персональных данных и соглашаетесь c <a>Политикой конфиденциальности</a>
    </span>
    <button type="submit" class="yellow-callback">
      Регистрация
    </button>
  </form>
</template>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  margin: 0 15px;
  color: #172116;
  background: #ffffff;
  border: 3px solid #2b6ff2;
  border-radius: 25px;
  h2 {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 15px;
    /* dark bckgrd */
    color: #172116;
  }
  span {
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 9px;
    text-align: left;
    max-width: 205px;
    align-self: center;
    margin: 10px 0;
    span {
      color: #fff500;
      display: inline;
    }
    a {
      display: inline;
      color: #2daaf0;
    }
  }
  div {
    margin: 10px 0;
    width: 100%;
    display: flex;
    label {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      span {
        color: #2daaf0;
      }
      a {
        color: #0500e2;
      }
    }
    input {
      padding: 10px 5px 5px 0;
      background-color: transparent;
      border: 0;
      border-bottom: solid 2px #172116;
      &::placeholder {
        color: #172116;
      }
      // &::placeholder {
      //   color:#fff;
      // }
    }
    &.checkbox {
      flex-direction: row;
    }
    &.field {
      flex-direction: column;
    }
  }

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    text-align: center;

    color: #3d3a3a;

    span {
      color: #2daaf0;
    }
    a {
      color: #0500e2;
    }
  }
  button {
    background: #2b6ff2;
    border-radius: 19px;
    color: #fff;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    padding: 5px;
    align-self: center;
    min-width: 175px;
  }
}
</style>
<script>
export default {}
</script>
