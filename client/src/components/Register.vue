<template>
  <div class="w3-container w3-padding-32" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Please Register</h3>


      <input v-model="name" class="w3-input" type="text" placeholder="Name" required name="Name">
      <input v-model="email" class="w3-input w3-section" type="email" placeholder="Email" required name="Email">
      <input v-model="password" class="w3-input w3-section" type="password" placeholder="Password" required name="password">
      <input v-model="address" class="w3-input w3-section" type="text" placeholder="Address" required name="address">
      <input v-model="phone" class="w3-input w3-section" type="text" placeholder="phone" required name="phone">
      <button v-on:click="register" class="w3-button w3-black w3-section" type="submit">
        <i class="fa fa-paper-plane"></i> Register
      </button>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      url: 'http://localhost:3000/api/'
    }
  },
  methods: {
    register () {
      let self = this
      this.$http.post(this.url + 'register', {
        name: this.name,
        password: this.password,
        address: this.address,
        email: this.email,
        phone: this.phone
      })
      .then((response) => {
        alert('register sukses')
        self.$router.push('/')
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
