<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>💣💣💣💣💣💣💣</h1>
        <h1>Hey maşallah!</h1>
        <h1>Covid yıkamaz seni!</h1>
        <h1 class="reversed-text">💣💣💣💣💣💣💣</h1>
        <h3></h3>
        <h5 style="margin-bottom: 10px;text-align: center;">
          <a href="https://www.buyilapuanim.com" target="_blank">
            2020'ye kaç puan verirsin?
          </a>
        </h5>
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
}
</style>
