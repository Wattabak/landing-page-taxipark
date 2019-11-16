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
          v-model.trim="formdata.name"
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
          v-model.trim="formdata.phone"
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
        <input
          v-model.trim="formdata.email"
          type="mail"
          name="mail"
          placeholder="e-mail@yandex.ru"
        />
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
      <button class="yellow-callback" @click.prevent="nextStep">
        Регистрация
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
        <img v-for="url of loadedPhotos" :key="url" :src="url" alt="preview" />
      </div>
      <button class="yellow-callback">
        Отправить
      </button>
    </section>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      errors: [],
      formdata: {
        apiUrl: 'localhost:3001/form-submission',
        name: '',
        phone: '',
        email: '',
        loadedPhotos: {}
      },
      acceptOpherta: false,
      loadPhotos: false,
      loadedPhotos: [],
      currentStep: 1,
      status: ''
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required
    },
    email: {
      required,
      email
    },
    acceptOpherta: {
      required
    }
  },
  methods: {
    onFileChange(e) {
      console.log(this.loadedPhotos)
      const files = e.target.files
      for (const file of files) {
        this.loadedPhotos.push(URL.createObjectURL(file))
        console.log(URL.createObjectURL(file))
      }
    },
    nextStep() {
      if (this.loadPhotos && this.acceptOpherta) {
        this.currentStep += 1
      } else if (this.acceptOpherta) {
        this.sendForm()
        console.log(this.form)
      } else {
        this.status = 'not_Valid'
      }
    },
    sendForm() {}
  }
}
</script>

<style lang="scss" scoped>
form {
  cursor: text;
  * {
    font-family: 'Ubuntu', sans-serif;
    font-style: normal;
  }
  section {
    display: flex;
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
    width: 65%;
    cursor: pointer;
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
}
</style>
