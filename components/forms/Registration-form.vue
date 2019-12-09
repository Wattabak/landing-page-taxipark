<template>
  <form action="" enctype="multipart/form-data">
    <section v-if="currentStep == 1">
      <h2>Заполните форму, и начинайте зарабатывать!</h2>
      <div
        :class="{ 'inputGroup-error': $v.formdata.name.$error }"
        class="field"
      >
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
      <div
        :class="{ 'inputGroup-error': $v.formdata.phone.$error }"
        class="field"
      >
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
          {{ $v.formdata.phone.$params.minLength.min }} знаков.
        </span>
      </div>
      <div
        class="field"
        :class="{ 'inputGroup-error': $v.formdata.email.$error }"
      >
        <label>
          Адрес электронной почты
        </label>
        <input
          v-model.trim.lazy="formdata.email"
          type="mail"
          name="mail"
          placeholder="e-mail@yandex.ru"
        />
        <span v-if="!$v.formdata.email.email" class="error">
          Введите существующий адрес электронной почты!
        </span>
      </div>
      <div
        :class="{ 'inputGroup-error': $v.formdata.acceptOpherta.$error }"
        class="checkbox"
      >
        <input
          id="acceptOpherta"
          v-model.trim="formdata.acceptOpherta"
          type="checkbox"
          name="acceptOpherta"
          required
        />
        <label for="acceptOpherta">
          Подтвердить соглашение
          <a @click.prevent="$modal.show('opherta')">оферты</a>
        </label>
      </div>
      <span
        v-if="!$v.formdata.acceptOpherta.required"
        class="error"
        style="margin-top: -5px;"
      >
        Пожалуйста, прочитайте и примите соглашение оферты
      </span>
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
        <a @click.prevent="$modal.show('confidentiality')"
          >Политикой конфиденциальности</a
        >
      </span>
      <transition name="fade">
        <div v-if="status == 'success'" class="success">
          <img
            class="lazyload"
            data-src="icons/checkmark.svg"
            alt="Успех"
            width="32px"
          />
          <span>Ваш запрос на регистрацию был успешно отправлен!</span>
          <span>Наши сотрудники свяжутся с Вами в ближайшее время.</span>
        </div>
      </transition>
      <button
        :disabled="status === 'pending'"
        :class="{ 'inputGroup-error': $v.$invalid }"
        class="yellow-callback"
        @click.prevent="nextStep"
      >
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
        <li>Паспорт, основная страница (стр. 5) (1 фотография);</li>
        <li>Паспорт, прописка (стр. 6) (1 фотография);</li>
        <li>СТС, c 2 сторон (2 фотографии);</li>
        <li>ВУ, если ваш стаж больше 3 лет, c 2 сторон (2 фотографии);</li>
        <li>Ваша фотография (подойдет селфи) (1 фотография);</li>
        <li>Страховка (1 фотография).</li>
      </ol>
      <input
        id="fileLoader"
        type="file"
        name="photos"
        accept=".jpg, .png"
        multiple
        @change="onFileChange"
      />
      <span>*Загрузите 8 изображений. Подойдут форматы .jpg и .png</span>
      <h3>Загруженные файлы:</h3>
      <div class="uploaded-files">
        <div
          v-for="photo of formdata.loadedPhotos"
          :key="photo.url"
          class="photoPreview"
        >
          <img class="lazyload" :data-src="photo.url" alt="preview" />
          <a @click.prevent="deleteFile(photo.url)">
            <img class="lazyload" data-src="icons/close-cross.png" alt="icon" />
          </a>
        </div>
      </div>
      <transition name="fade">
        <div v-if="status == 'success'" class="success">
          <img
            class="lazyload"
            data-src="icons/checkmark.svg"
            alt="Успех"
            width="32px"
          />
          <span>Ваш запрос на регистрацию был успешно отправлен!</span>
          <span>Наши сотрудники свяжутся с Вами в ближайшее время.</span>
        </div>
      </transition>

      <button
        :class="{ 'inputGroup-error': $v.$invalid }"
        class="yellow-callback"
        :disabled="status === 'pending'"
        @click.prevent="validateAndSend"
      >
        <span v-if="status == 'pending'">Отправка...</span>
        <span v-else>
          Отправить
        </span>
      </button>
    </section>
  </form>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
  sameAs
} from 'vuelidate/lib/validators'
import SubmitForm from './formSubmitMixin'

export default {
  mixins: [SubmitForm],
  data() {
    return {
      errors: [],
      formdata: {
        formType: 'registration',
        name: '',
        phone: '',
        email: '',
        acceptOpherta: false,
        loadedPhotos: []
      },
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
        minLength: minLength(2)
      },
      phone: {
        required,
        minLength: minLength(7)
      },
      email: {
        email
      },
      acceptOpherta: {
        required: sameAs(() => true)
      }
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
    deleteFile(key) {
      const loaded = this.formdata.loadedPhotos.filter((v) => v.url !== key)
      this.formdata.loadedPhotos = loaded
    },
    onFileChange(e) {
      const files = e.target.files
      for (const file of files) {
        const reader = new FileReader()
        const formdata = this.formdata
        reader.onloadend = () => {
          formdata.loadedPhotos.push({
            url: URL.createObjectURL(file),
            filename: file.name,
            content: reader.result
          })
          console.log(reader.result)
        }
        reader.readAsDataURL(file)
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
      margin-bottom: 5px;
      cursor: text;
      font-weight: bold;
      font-size: 14px;
      width: 100%;
      line-height: 16px;
      text-align: left;
      span {
        color: #2daaf0;
      }
      a {
        color: #0500e2;
        cursor: pointer;
      }
    }
    input {
      padding: 10px 5px 5px 0;
      background-color: transparent;
      border: 0;
      border-bottom: solid 2px #172116;

      &[type='checkbox'] {
        margin-right: 5px;
        position: relative;
        width: 16px;
        height: 16px;
        cursor: pointer;
        &:after {
          content: '✔';
          display: none;
          position: absolute;
          left: 2px;
          top: -1px;
          width: 16px;
          height: 16px;
          background: transparent;
        }
        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          background: white;
          border: 1px solid black;
        }
        &:checked {
          &:after {
            content: '✔';
            display: block;
          }
        }
      }
      &:focus {
        border-color: #0500e2;
        outline: 0;
        background-color: transparent;
        box-shadow: 0 0 0 0.2rem rgba(26, 0, 239, 0.28);
      }
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
      cursor: pointer;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px;
    justify-content: center;
    li {
      line-height: 23px;
    }
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
    .photoPreview {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-right: 15px;
      position: relative;
      width: initial;
      & > img {
        height: 96px;
      }
      & > a {
        margin: 0;
        cursor: pointer;
        padding: 0;
        height: 16px;
        width: 16px;
        position: absolute;
        top: -8px;
        right: -8px;
        > img {
          height: 16px;
          width: 16px;
        }
      }
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
  .confidentiality {
    color: #000;
    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      h1 {
        text-align: left;
        flex-grow: 2;
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
      }
      button {
        width: initial;
      }
    }

    div {
      padding: 15px;
      display: block;
    }
  }
  .v--modal-overlay[data-modal='confid'],
  .v--modal-overlay[data-modal='popupOpherta'] {
    background: rgba(0, 0, 0, 0.5);
    margin: 0;
  }
}
</style>
