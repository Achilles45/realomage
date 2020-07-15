<template>
  <div class="award">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>SEE OUR AWARDS AND MENTIONS</h3>
                  <small>Conviodelivery through hard work and excellence has become a reputable logistics company home and abroad and we have been on the media for it.</small>
              </div>
                   <div class="col-md-3"></div>
          </div>
          <div class="row pt-5">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                  <div class="row pt-3">
                      <div class="col-md-4">
                          <img src="../assets/images/convio-awards.jpg" class="img-fluid award__img" alt="">
                      </div>
                      <div class="col-md-8 pt-5">
                          <h5>15TH YEARS OF QUALITY SERVICE</h5>
                          <p>The company was recognize for all her hard work in these past decade and half in providing world class logistics solution to her customers. As we continue to grow more capacity and experience, we hope to serve you better and better.</p>
                      </div>
                  </div>
              </div>
              <div class="col-md-1"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.award{
    background: #F5F5F5;
    padding: 4rem 0;
    h3{
        font-weight: bold;
        color:#454545;
    }
    h5{
        font-weight: bold;
        color:#454545;
        padding-bottom: 1rem;
    }
    p{
        color: #545454;
        font-size: 1rem;
        line-height: 1.8;
    }
}

//MEDIA QUERIES
@media screen and (max-width: 600px) {
    .award__img{
        max-width: 250px;
        height: auto;
        padding-left: 3rem;
    }
}
</style>