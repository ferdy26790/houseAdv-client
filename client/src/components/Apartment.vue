<template>
  <div class="apartments">
    <div class="w3-content w3-padding" style="max-width:1564px">
      <div class="w3-container w3-padding-32">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Apartment</h3>
      </div>
      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Peacefull Aprtment</div>
            <img src="../assets/img/apartment_thumbnail1.png" alt="House" style="width:100%">
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Town Apartment</div>
            <img src="../assets/img/apartment_thumbnail2.jpg" alt="House" style="width:100%">
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Renovated</div>
            <img src="../assets/img/apartment_thumbnail3.jpg" alt="House" style="width:100%">
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Modern Apartment</div>
            <img src="../assets/img/apartment_thumbnail4.jpg" alt="House" style="width:100%">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Apartment',
  data(){
    return {
      msg: 'ini Apartment'
    }
  }
}
</script>
