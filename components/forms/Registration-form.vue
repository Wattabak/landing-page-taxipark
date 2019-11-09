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
  div {
    margin: 10px 0;
    display: flex;
    &.checkbox {
      flex-direction: row;
    }
    &.field {
      flex-direction: column;
    }
  }

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    /* dark bckgrd */
    color: #172116;
  }
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
  }
}
</style>
<script>
export default {}
</script>
