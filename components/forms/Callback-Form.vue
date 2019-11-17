<template>
  <form method="POST" @submit.prevent="onSubmit">
    <div>
      <label>
        Ваше имя
      </label>
      <input
        id="name"
        v-model.trim="$v.formData.name.$model"
        type="text"
        name="name"
        placeholder="Иванов Иван"
        required
      />
      <span v-if="!$v.formData.name.required" class="error">
        Пожалуйста, введите ваше Имя!
      </span>
      <span v-if="!$v.formData.name.minLength" class="error">
        Имя должно содержать до
        {{ $v.formData.name.$params.minLength.min }} знаков.
      </span>
    </div>
    <div>
      <label>
        Ваш номер телефона
      </label>
      <input
        v-model.trim="$v.formData.phone.$model"
        type="tel"
        name="phone"
        placeholder="+7 "
        pattern="+[0-9]{1} ([0-9]{3}) [0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
      <span v-if="!$v.formData.phone.required" class="error">
        Пожалуйста, введите ваш номер телефона!
      </span>
      <span v-if="!$v.formData.phone.minLength" class="error">
        Номер телефона не может содержать меньше
        {{ $v.formData.name.$params.minLength.min }} знаков.
      </span>
    </div>
    <span>
      Нажимая на кнопку <span>Заказать</span>, вы даете согласие на обработку
      персональных данных и соглашаетесь c <a>Политикой конфиденциальности</a>
    </span>
    <transition name="fade">
      <div v-if="status == 'success'" class="success">
        <img src="icons/checkmark.svg" alt="Успех" />
        <h3>Заявка успешно отправлена!</h3>
        <span>Первый таксопарк свяжется с Вами в ближайшее время!</span>
      </div>
    </transition>
    <button
      type="submit"
      class="yellow-callback"
      :disabled="status === 'PENDING'"
    >
      {{ buttonText }}
    </button>
  </form>
</template>
<script>
import axios from 'axios'
import { required, maxLength } from 'vuelidate/lib/validators'
import minLength from 'vuelidate/lib/validators/minLength'

export default {
  props: {
    buttonText: {
      type: String,
      default: 'Заказать обратный звонок'
    }
  },
  // Assign a unique id to each component
  data: () => ({
    formData: {
      formType: 'callback',
      name: '',
      phone: ''
    },
    status: ''
  }),
  validations: {
    formData: {
      name: {
        required,
        maxLength: maxLength(50),
        minLength: minLength(5)
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
        // do your submit logic here
        axios
          .post('api/form-submission', this.formData)
          .then(
            ((this.status = 'success'),
            setTimeout(
              setTimeout(() => {
                this.status = ''
              }, 3000)
            ))
          )
          .catch()
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

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
