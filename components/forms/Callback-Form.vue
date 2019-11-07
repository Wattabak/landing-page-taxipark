<template>
  <div>
    <form action="" method="post">
      <label>
        Ваше имя
        <input id="name" type="text" name="phone" placeholder="Иванов Иван" />
      </label>
      <label>
        Ваш номер телефона
        <input
          type="tel"
          name="phone"
          placeholder="+7 "
          pattern="+[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
      </label>
      <button type="submit" class="yellow-callback">
        Заказать обратный звонок
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(34, 46, 32, 0.65);
  border-radius: 12px;
  padding: 15px;
  * {
    display: block;
    font-family: 'Ubuntu';
  }
}
.yellow-callback {
  background: #fff500;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20.0739px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #172116;
}
</style>
