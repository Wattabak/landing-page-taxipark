<template>
  <form action="" method="post">
    <div>
      <label>
        Ваше имя
      </label>

      <input
        id="name"
        type="text"
        name="phone"
        placeholder="Иванов Иван"
        required
      />
    </div>
    <div>
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
    <span>
      Нажимая на кнопку <span>Заказать</span>, вы даете согласие на обработку
      персональных данных и соглашаетесь c <a>Политикой конфиденциальности</a>
    </span>
    <button type="submit" class="yellow-callback">
      Заказать обратный звонок
    </button>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(34, 46, 32, 0.65);
  color: #fff;
  border-radius: 12px;
  padding: 15px 15px 45px 15px;
  position: relative;

  * {
    display: block;
    margin-bottom: 5px;
    font-family: 'Ubuntu';
  }
  div {
    width: 100%;
  }
  label {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
  input {
    padding: 5px 5px 5px 0;
    background-color: transparent;
    color: white;
    border: 0;
    width: 100%;
    border-bottom: solid 2px white;
    &::placeholder {
      color: #fff;
    }
    // &::placeholder {
    //   color:#fff;
    // }
  }
  span {
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 8px;
    line-height: 9px;
    text-align: left;
    span {
      color: #fff500;
      display: inline;
    }
    a {
      display: inline;
      color: #2daaf0;
    }
  }
}
.yellow-callback {
  background: #fff500;
  width: 100%;
  left: 0px;
  border: none;
  padding: 5px 0;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20.0739px;
  font-family: 'Ubuntu';
  font-style: normal;
  bottom: -1px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  text-align: center;
  color: #172116;
  margin-bottom: 0px;
  &::before {
    content: url('/icons/checkers.svg');
    left: 15px;
  }
  &::after {
    content: url('/icons/checkers.svg');
    right: 15px;
  }
}
</style>
