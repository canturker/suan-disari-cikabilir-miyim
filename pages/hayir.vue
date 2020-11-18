<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>🥺🥺🥺🥺🥺🥺🥺🥺</h1>
        <h1>Malesef şu an dışarı çıkamazsın</h1>
        <h1 class="reversed-text">🥺🥺🥺🥺🥺🥺🥺🥺</h1>
      </Column>
      <div class="credits">
        <h5>
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
      </div>
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
</style>
