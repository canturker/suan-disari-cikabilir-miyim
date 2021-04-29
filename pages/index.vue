<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>
          Şu an dışarı çıkabilir miyim? 🤔
        </h1>
        <div class="disari-form">
          <Input
            type="number"
            placeholder="Yaşınız"
            label="Yaşınız"
            v-model="age"
            :error="ageError"
            :message="ageErrorMessage"
            style="margin-bottom: 20px; margin-top: 20px;"
          />
        </div>
        <div class="disari-submit">
          <Button type="primary" @click="formClick">Kontrol Et</Button>
        </div>
        <div style="text-align:center;margin-top: 30px;">
          <a
            href="https://ty.gl/lysol_website_112020"
            style="text-align: center; margin: 0 auto"
          >
            <img
              class="banner-image"
              style="margin-bottom: 10px;"
              src="../assets/lysol.svg"
              alt=""
          /></a>
        </div>
        <div style=" margin-bottom: 25px; text-align: center;">
          <span style="text-align: center;">
            Dünyanın bir numaralı dezenfektanı
          </span>
        </div>
        <h5 style="text-align: center; margin-bottom: 5px;">
          <a href="https://www.linkedin.com/in/canturker/" target="_black">
            ACT
          </a>
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
            Lysol ortaklığı ile TEGV'e destekte bulunulmuştur.
          </a>
        </h5>
      </Column>
      <div class="credits"></div>
    </Row>
  </Container>
</template>

<script>
import {
  Button,
  Container,
  Row,
  Combobox,
  Column,
  Input,
  ButtonGroup
} from "kunodo";
import moment from "moment";
export default {
  components: { Button, Container, Row, Column, Combobox, Input, ButtonGroup },
  data() {
    return {
      workStatus: 2,
      age: "",
      ageCalculated: 0,
      ageError: false,
      ageErrorMessage: "",
      cityError: false,
      cityErrorMessage: "",
      selectedCity: ""
    };
  },
  methods: {
    formClick() {
      const now = new Date();
      if (!this.age) {
        this.ageError = true;
        this.ageErrorMessage =
          "Önemli olan ruhumuzun genç olması çekinmeyin 😇";
        return;
      }
      this.$router.push(`hayir`);
      // let isSaturday = now.getDay() === 6;
      // let isSunday = now.getDay() === 0;
      // let isHoursBetween19and5 = now.getHours() >= 19 || now.getHours() < 5;
      // if (
      //   isSaturday ||
      //   isSunday ||
      //   isHoursBetween19and5 ||
      //   this.ageCalculated === 65
      // ) {
      //   this.$router.push(`hayir`);
      // } else {
      //   this.$router.push(`evet`);
      // }
    },
    buttonGroupClick(e) {
      this.workStatus = e;
    }
  },
  watch: {
    age() {
      this.ageCalculated = "other";
      this.ageError = false;
      this.ageErrorMessage = "";
      if (this.age >= 65) {
        this.ageCalculated = 65;
      }
      if (this.age <= 20) {
        this.ageCalculated = 20;
      }
    },
    selectedCity(val) {
      this.cityError = false;
      this.cityErrorMessage = "";
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
}
.disari-form > label {
  margin-bottom: 15px !important;
}
.disari-submit {
  display: flex;
  justify-content: flex-end;
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
  width: 60px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 40px;
}
.banner-image-1 {
  height: 35px;
  text-align: center;
  margin-right: 10px;
}
.disari-santa {
  width: 60px;
}
.ku-c__combobox-option-container {
  top: 60px !important;
}
</style>
