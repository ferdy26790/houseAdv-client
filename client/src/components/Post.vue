<template>
  <div class="panel panel-default">
    <div class="panel-heading">Posting Adds</div>
    <div class="panel-body">
        <div class="form-group">
          <div class="col-sm-12">
            <label class="col-sm-2"> Title : </label>
            <div class="col-sm-4">
              <input v-model="title" type="text" class="form-control" />
            </div>
          </div>
          <label class="col-sm-2"> Picture : </label>
          <div class="col-sm-10">
            <div v-if="!image">
              <h4>Select an image</h4>
              <input id="image" type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img :src="image" />
              <button @click="removeImage">Remove image</button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <label class="col-sm-2"> Deskripsi :</label>
            <div class="col-sm-4">
              <textarea v-model="description" class="form-control" />
            </div>
          </div>
          <div class="col-sm-12">
            <label class="col-sm-2"> Price :</label>
            <div class="col-sm-4">
              <input v-model="price" type="number" class="form-control" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <button v-on:click="addHouse">Add</button>
          <div class="col-sm-10">
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'Post',
  data(){
    return {
      msg: 'ini post',
      url: 'http://localhost:3000/api/',
    }
  },
  methods: {
    addHouse () {
      let self = this
      let formData = new FormData()
      formData.append('image', document.getElementById('image').files[0])
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('price', this.price)
      this.$http.post(this.url + 'users/addHouse', formData, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        self.$router.push('/house')
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style media="screen">
.panel-body {
  padding: 15px;
  margin-top: 5%;
}
</style>
