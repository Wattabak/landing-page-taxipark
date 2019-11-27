<script>
import axios from 'axios'

export default {
  methods: {
    submitForm() {
      this.status = 'pending'
      axios
        .post(
          'https://europe-west2-model-fastness-260110.cloudfunctions.net/form-submitco-1',
          this.formdata
        )
        .then((response) => {
          if (response.status === 200) {
            this.status = 'success'
          }
        })
        .catch((e) => {
          this.status = 'error'
          console.error()
        })
        .finally(() => {
          setTimeout(
            setTimeout(() => {
              this.status = ''
            }, 3000)
          )
        })
    }
  }
}
</script>
