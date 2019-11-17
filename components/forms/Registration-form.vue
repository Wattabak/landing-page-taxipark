<template>
  <form action="" enctype="multipart/form-data">
    <section v-if="currentStep == 1">
      <h2>Заполните форму, и начинайте зарабатывать!</h2>
      <div class="field">
        <label for="name">
          Ваше имя
        </label>
        <input
          id="name"
          v-model.trim="$v.formdata.name.$model"
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
      <div class="field">
        <label>
          Ваш номер телефона
        </label>
        <input
          v-model.trim="formdata.phone"
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
      <div class="field">
        <label>
          Адрес электронной почты
        </label>
        <input
          v-model.trim="formdata.email"
          type="mail"
          name="mail"
          placeholder="e-mail@yandex.ru"
        />
        <span v-if="!$v.formdata.email.email" class="error">
          Введите существующий адрес электронной почты!
        </span>
      </div>
      <div class="checkbox">
        <input
          id="acceptOpherta"
          v-model.trim="acceptOpherta"
          type="checkbox"
          name="acceptOpherta"
          required
        />
        <label for="acceptOpherta">
          Подтвердить соглашение <a>оферты</a>
        </label>
        <span v-if="!$v.acceptOpherta.required" class="error">
          Пожалуйста, прочитайте и примите соглашение оферты
        </span>
      </div>
      <div class="checkbox">
        <input
          id="loadPhotos"
          v-model="loadPhotos"
          type="checkbox"
          name="loadPhotos"
        />
        <label for="loadPhotos">
          Хотите загрузить фотографии необходимых документов прямо сейчас? (Вы
          сможете сделать это после нажатия кнопки <span>Регистрация</span>)
        </label>
      </div>
      <span>
        Нажимая на кнопку <span>Регистрация</span>, вы даете согласие на
        обработку персональных данных и соглашаетесь c
        <a>Политикой конфиденциальности</a>
      </span>
      <transition name="fade">
        <div v-if="status == 'success'" class="success">
          <img src="icons/checkmark.svg" alt="Успех" width="32px" />
          <span>Ваш запрос на регистрацию был успешно отправлен!</span>
          <span>Наши сотрудники свяжутся с Вами в ближайшее время.</span>
        </div>
      </transition>
      <button class="yellow-callback" @click.prevent="nextStep">
        <span v-if="status == 'pending'">Отправка...</span>
        <span v-else>Регистрация</span>
      </button>
    </section>
    <section v-if="currentStep == 2">
      <h2>Отправьте фотографии необходимых документов</h2>
      <h3>
        Для окончания регистрации Вам потребуется загрузить фотографии следующих
        документов:
      </h3>
      <ol>
        <li>Паспорт, основная страница (стр. 5)</li>
        <li>Паспорт, прописка (стр. 6)</li>
        <li>СТС</li>
        <li>ВУ, если ваш стаж больше 3 лет</li>
      </ol>
      <input
        id="fileLoader"
        type="file"
        name="photos"
        accept=".jpg, .png"
        multiple
        @change="onFileChange"
      />
      <span>*Загрузите 4 изображения. Подойдут форматы .jpg и .png</span>
      <h3>Загруженные файлы:</h3>
      <div class="uploaded-files">
        <img
          v-for="photo of formdata.loadedPhotos"
          :key="photo.url"
          :src="photo.url"
          alt="preview"
        />
      </div>

      <button class="yellow-callback" @click.prevent="validateAndSend">
        <span v-if="status == 'pending'">Отправка...</span>
        <span v-else>
          Отправить
        </span>
      </button>
    </section>
  </form>
</template>

<script>
import axios from 'axios'

import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      errors: [],
      formdata: {
        formType: 'registration',
        name: '',
        phone: '',
        email: '',
        loadedPhotos: []
      },
      acceptOpherta: false,
      loadPhotos: false,
      currentStep: 1,
      status: ''
    }
  },
  validations: {
    formdata: {
      name: {
        required,
        maxLength: maxLength(50),
        minLength: minLength(5)
      },
      phone: {
        required,
        minLength: minLength(7)
      },
      email: {
        email
      }
    },
    acceptOpherta: {
      required
    }
  },
  beforeMount() {
    window.addEventListener('beforeunload', this.leaving)
  },
  methods: {
    leaving: function leaving(event) {
      alert('unload')
      console.log('leaving')
      if (this.currentStep === 2) {
        this.submitForm()
      }
    },
    nextStep() {
      if (this.loadPhotos && !this.$v.$invalid) {
        this.currentStep += 1
      } else if (!this.$v.$invalid && !this.loadPhotos) {
        this.validateAndSend()
        console.log(this.form)
      } else {
        this.status = 'Invalid'
      }
    },
    onFileChange(e) {
      const files = e.target.files
      for (const file of files) {
        console.log(file)
        this.formdata.loadedPhotos.push({
          url: URL.createObjectURL(file),
          filename: file.name,
          content: file
        })
      }
    },
    validateAndSend() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.status = 'error'
      } else {
        // do your submit logic here
        this.submitForm()
      }
    },
    submitForm() {
      axios
        .post('api/form-submission', this.formdata)
        .then(
          ((this.status = 'success'),
          setTimeout(() => {
            this.status = ''
          }, 3000))
        )
        .catch()
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
form {
  cursor: text;
  * {
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
  }
  section {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
    margin: 0 15px;
    color: #172116;
    background: #ffffff;
    border: 3px solid #2b6ff2;
    border-radius: 25px;
    & > input {
      margin-bottom: 15px;
    }
  }
  h2 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 15px;
    /* dark bckgrd */
    color: #172116;
  }
  span {
    font-weight: bold;
    font-size: 8px;
    line-height: 9px;
    text-align: left;
    min-width: 205px;
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
      cursor: text;
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
  ol {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px;
    justify-content: center;
  }

  button {
    background: #2b6ff2;
    border-radius: 19px;
    span {
      color: #fff;
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin: 0;
    }
    padding: 5px;
    align-self: center;
    min-width: 175px;
    width: 65%;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s ease-in;
    &:hover {
      background: white;
      border: 3px solid #2b6ff2;
      span {
        color: black;
      }
    }
  }
  .uploaded-files {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    overflow-x: auto;
    flex-direction: row;
    img {
      height: 96px;
      margin-right: 15px;
    }
  }
  .error {
    color: #ed2e2e;
    font-size: 9px;
    text-align: left;
    align-self: flex-start;
    margin-bottom: 0;
  }
  .success {
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 22px;
    padding: 10px;
    margin: 0;
    background: rgb(28, 199, 0);
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    span {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
