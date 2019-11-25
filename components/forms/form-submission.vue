<script>
import axios from 'axios'

export default {
  methods: {
    submitForm() {
      axios
        .post(
          'https://europe-west2-model-fastness-260110.cloudfunctions.net/form-submitco-1',
          this.formdata
        )
        .then((response) => {
          if (response.status === 200) {
            this.status = 'success'
            setTimeout(
              setTimeout(() => {
                this.status = ''
              }, 3000)
            )
          } else {
            this.status = 'pending'
          }
        })
        .catch((e) => {
          console.error()
        })
    }
  }
}
</script>
