<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>💣💣💣💣💣💣💣</h1>
        <h1>Hey maşallah!</h1>
        <h1>Covid yıkamaz seni!</h1>
        <h1 class="reversed-text">💣💣💣💣💣💣💣</h1>
      </Column>
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
</style>
