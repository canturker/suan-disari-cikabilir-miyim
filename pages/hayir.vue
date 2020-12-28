<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4" class="text-center">
        <h1>🥺🥺🥺🥺🥺🥺🥺🥺</h1>
        <h1>Malesef şu an dışarı çıkamazsın</h1>
        <h1 class="reversed-text">🥺🥺🥺🥺🥺🥺🥺🥺</h1>
        <h5 style="text-align: center; margin-bottom: 5px; margin-top: 70px;">
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
          <a href="https://www.buyilapuanim.com" target="_blank">
            2020'ye kaç puan verirsin?
          </a>
        </h5>
        <h5 style="margin-bottom: 10px;text-align: center;">
          <a href="https://cdn.adverport.com/sertifika.png" target="_blank">
            Lysol ortaklığı ile TEGV'e destekte bulunulmuştur.
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
  components: { Button, Container, Row, Column, Input, ButtonGroup }
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
