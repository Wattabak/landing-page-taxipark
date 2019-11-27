<template>
  <form method="POST" @submit.prevent="onSubmit">
    <div :class="{ 'inputGroup-error': $v.formdata.name.$error }">
      <label>
        Ваше имя
      </label>
      <input
        id="name"
        v-model.lazy="$v.formdata.name.$model"
        type="text"
        name="name"
        placeholder="Иванов Иван"
        required
      />
      <span v-if="!$v.formdata.name.required" class="error">
        Пожалуйста, введите ваше Имя!
      </span>
      <span v-if="!$v.formdata.name.minLength" class="error">
        Имя должно содержать до
        {{ $v.formdata.name.$params.minLength.min }} знаков.
      </span>
    </div>
    <div :class="{ 'inputGroup-error': $v.formdata.phone.$error }">
      <label>
        Ваш номер телефона
      </label>
      <input
        v-model.lazy="$v.formdata.phone.$model"
        type="tel"
        name="phone"
        placeholder="+7 "
        pattern="+[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
      <span v-if="!$v.formdata.phone.required" class="error">
        Пожалуйста, введите ваш номер телефона!
      </span>
      <span v-if="!$v.formdata.phone.minLength" class="error">
        Номер телефона не может содержать меньше
        {{ $v.formdata.name.$params.minLength.min }} знаков.
      </span>
    </div>
    <span>
      Нажимая на кнопку <span>Заказать</span>, вы даете согласие на обработку
      персональных данных и соглашаетесь c
      <a @click.prevent="$modal.show('confidentiality')"
        >Политикой конфиденциальности</a
      >
    </span>
    <transition name="fade">
      <div v-if="status == 'success'" class="success">
        <img class="lazyload" data-src="icons/checkmark.svg" alt="Успех" />
        <h3>Заявка успешно отправлена!</h3>
        <span>Первый таксопарк свяжется с Вами в ближайшее время!</span>
      </div>
    </transition>
    <button
      type="submit"
      class="yellow-callback"
      :disabled="status === 'pending'"
    >
      <span v-if="status == 'pending'">Отправка...</span>
      <span v-else>{{ buttonText }}</span>
    </button>
  </form>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
import minLength from 'vuelidate/lib/validators/minLength'
import SubmitForm from './formSubmitMixin'

export default {
  mixins: [SubmitForm],

  props: {
    buttonText: {
      type: String,
      default: 'Заказать обратный звонок'
    }
  },
  // Assign a unique id to each component
  data: () => ({
    formdata: {
      formType: 'callback',
      name: '',
      phone: ''
    },
    status: ''
  }),
  validations: {
    formdata: {
      name: {
        required,
        maxLength: maxLength(50),
        minLength: minLength(2)
      },
      phone: {
        required,
        maxLength: maxLength(20),
        minLength: minLength(7)
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.status = 'error'
      } else {
        this.submitForm()
      }
    }
  }
}
</script>
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
  cursor: text;

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
    cursor: text;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
  button {
    span {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin: 0;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .inputGroup-error {
    animation-name: shakeError;
    animation-fill-mode: forwards;
    animation-duration: 0.6s;
    animation-timing-function: ease-in-out;
    color: red !important;
    input {
      border-color: red;
    }
  }

  input {
    padding: 5px 5px 5px 0;
    background-color: transparent;
    color: white;
    border: 0;
    width: 100%;
    border-bottom: solid 2px white;
    transition: all 0.2s ease-in-out;
    &:focus {
      border-color: #fff500;
      outline: 0;
      background-color: transparent;
      box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.336);
    }
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
  .error {
    color: #fff500;
    font-size: 9px;
  }
  .success {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(28, 199, 0);
    justify-content: center;
    img {
      width: 64px;
    }
  }
}
.yellow-callback {
  left: 0px;
  padding: 5px 0;
  bottom: -5px;
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  margin-bottom: 0px;
}
</style>
