<template>
  <div id="houses">
    <div class="w3-content w3-padding" style="max-width:1564px">
      <div class="w3-container w3-padding-32" id="house">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">House</h3>
      </div>

      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <p>{{house.title}}</p>
            <img :src="house.img"  style="width:100%">
          </div>
          <p>deskripsi :{{house.description}}</p>
          <p>harga : {{house.price}}</p>
          <p>penjual : {{house.user.name}}</p>
          <p>no telfon : {{house.user.phone}}</p>
          <gmap-map
    :center="center"
    :zoom="7"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      house: null,
      url: 'http://localhost:3000/api/',
      center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
    }
  },
  created () {
    this.fetchDataHouse()
    console.log(this.markers);
  },
  methods: {
    fetchDataHouse () {
      this.$http.get(this.url + `users/detailHouse/${this.$route.params.id}`)
      .then((response) => {
        console.log(response.data.data);
        this.house = response.data.data
      }).catch((err) => {
        console.log(err);
      })
    }
  }

}
</script>

<style lang="css">
</style>
