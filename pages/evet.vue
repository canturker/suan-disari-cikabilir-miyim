<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4" class="text-center">
        <h5 style="margin-bottom: 20px;">#SevdiklerimiKorumakİcinBen</h5>
        <h1>🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️</h1>
        <h1>Hurrraahhh!</h1>
        <h1 class="reversed-text">🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️</h1>
        <h5>
          Maske . Mesafe . Lysol
        </h5>
        <h5 style="display: flex; justify-content: center; margin-top: 10px;">
          <a href="https://ty.gl/lysol_website_112020"
            ><img src="../assets/lysol.svg" class="banner-image-1" alt=""
          /></a>
          yoksa
          <a
            href="https://ty.gl/lysol_website_112020"
            style="margin-left: 5px;"
          >
            hemen al</a
          >
        </h5>
        <h5 style="text-align: center; margin-bottom: 5px; margin-top: 50px;">
          <a href="https://www.linkedin.com/in/canturker/" target="_black"
            >ACT</a
          >
          ve
          <a
            href="https://www.linkedin.com/in/oguzhankarabulut/"
            target="_blank"
            >OK</a
          >
          tarafından 😂😂😂😂 eşliğinde yapılmıştır
        </h5>
        <h5 style="margin-bottom: 10px;text-align: center;">
          <a href="https://cdn.adverport.com/sertifika.png" target="_blank">
            Dünyanın bir numaralı dezenfektanı Lysol ortaklığı ile TEGV'e
            destekte bulunulmuştur.
          </a>
        </h5>
      </Column>
      <div class="credits"></div>
    </Row>
  </Container>
</template>

<script>
import { Button, Container, Row, Column, Input, ButtonGroup } from "kunodo";
export default {
  components: { Button, Container, Row, Column, Input, ButtonGroup },
  data() {
    return {
      workStatus: 2,
      age: ""
    };
  },
  methods: {
    formClick() {
      this.$router.push("evet");
      console.log(this.workStatus, this.age);
    },
    buttonGroupClick(e) {
      this.workStatus = e;
    }
  }
};
</script>

<style>
.disari-container {
  height: 100vh;
}
.disari-row {
  height: 100%;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 20px;
  text-align: center;
}
.reversed-text {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.credits {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.text-center {
  text-align: center;
}
.banner-image {
  width: 50px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
.banner-image-1 {
  height: 50px;
  text-align: center;
  margin-right: 10px;
}
</style>
