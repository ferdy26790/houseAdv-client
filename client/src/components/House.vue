<template>
  <div id="houses">
    <div class="w3-content w3-padding" style="max-width:1564px">
      <div class="w3-container w3-padding-32" id="house">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">House</h3>
      </div>

      <div class="w3-row-padding">
        <div v-for="house in houses.data" class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">{{house.title}}</div>
            <img :src="house.img" alt="House" style="width:100%">
          </div>
          <button v-on:click="toDetail(house._id)" type="button" name="button"> see details </button>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name:'House',
  data(){
    return {
      msg: 'ini house',
      houses: [],
      url: 'http://localhost:3000/api/'
    }
  },
  created () {
    this.fetchDataHouses()
  },
  methods: {
    fetchDataHouses () {
      this.$http.get(this.url + 'users/getAllHouse')
      .then((response) => {
        console.log(response.data);
        this.houses = response.data
      }).catch((err) => {
        console.log(err);
      })
    },
    toDetail (id) {
      this.$router.push(`/house/${id}`)
    }
  }
}
</script>

<style lang="css">
</style>
