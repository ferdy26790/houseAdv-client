<template>
  <div id="app">
    <div class="w3-top">
      <div class="w3-bar w3-white w3-wide w3-padding w3-card">
        <a href="#/" class="w3-bar-item w3-button"><b>BENDERAKUNIN</b></a>
        <a href="#/house" class="w3-bar-item w3-button">House</a>
        <a v-if="user.loggedin === true" href="#/post" class="w3-bar-item w3-button">+advertising</a>
        <!-- Float links to the right. Hide them on small screens -->
        <div class="w3-right w3-hide-small">
          <div v-if="user.loggedin == false">
            <form id="signin" class="navbar-form navbar-right" role="form">
              <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input v-model="email" id="email" type="email" class="form-control" name="email" value="" placeholder="Email Address">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input v-model="password" id="password" type="password" class="form-control" name="password" value="" placeholder="Password">
              </div>

              <button v-on:click="login" class="btn btn-outline-dark">Login</button>
             </form>
          </div>

          <div v-else>
            <div class="dropdown show">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{user.name}}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      url: 'http://localhost:3000/api/',
      user:{
        name:'',
        loggedin: false
      }
    }
  },
  methods:{
    login(){
      let self = this
      this.$http.post(this.url + 'login', {
        email:this.email,
        password:this.password
      })
      .then((response) => {
        self.user.name = response.data.name
        self.user.loggedin = true
        localStorage.setItem('token', response.data.token)
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
.w3-top{
  overflow: visible;
}
</style>
