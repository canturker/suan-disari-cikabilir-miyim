<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>Şu an dışarı çıkabilir miyim? 🤔</h1>
        <div class="disari-form">
          <Input
            type="number"
            placeholder="Yaşınız"
            v-model="age"
            style="margin-bottom: 20px;"
          />
          <div style="margin-bottom: 10px">Çalışıyor musun?</div>
          <ButtonGroup
            v-model="workStatus"
            @change="buttonGroupClick"
            mandatory
            :items="[
              { id: 1, content: 'Evet 🚀', prefixIcon: '', suffixIcon: '' },
              { id: 2, content: 'Hayır 😩', prefixIcon: '', suffixIcon: '' }
            ]"
          />
        </div>
        <div class="disari-submit">
          <Button type="primary" @click="formClick">Kontrol Et</Button>
        </div>
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
import moment from "moment";
export default {
  components: { Button, Container, Row, Column, Input, ButtonGroup },
  data() {
    return {
      workStatus: 2,
      age: "",
      ageCalculated: 0,
      json: {
        weekend: {
          65: {
            1: {
              outside: "10-20"
            },
            2: {
              outside: "10-13"
            }
          },
          20: {
            1: {
              outside: "10-20"
            },
            2: {
              outside: "13-16"
            }
          },
          other: {
            1: {
              outside: "10-20"
            },
            2: {
              outside: "10-20"
            }
          }
        },
        weekday: {
          65: {
            1: {
              outside: "yes"
            },
            2: {
              outside: "10-13"
            }
          },
          20: {
            1: {
              outside: "yes"
            },
            2: {
              outside: "13-16"
            }
          },
          other: {
            1: {
              outside: "yes"
            },
            2: {
              outside: "yes"
            }
          }
        }
      }
    };
  },
  methods: {
    formClick() {
      const now = new Date();
      woopra.identify({
        age: this.age,
        workStatus: this.workStatus === 1 ? "Evet" : "Hayır"
      });
      let isWeekend = now.getDay() === 6 || now.getDay() === 0;
      let isHoursBetween10and20 = now.getHours() >= 10 && now.getHours() < 20;
      let isHoursBetween10and13 = now.getHours() >= 10 && now.getHours() < 13;
      let isHoursBetween13and16 = now.getHours() >= 13 && now.getHours() < 16;
      if (parseInt(this.age) >= 100) {
        this.$router.push("covid");
      } else {
        if (isWeekend) {
          this.$router.push("hayir");
          return false;
        } else {
          if (now.getHours() > 20 || now.getHours() < 5) {
            this.$router.push("hayir");
            return false;
          } else {
            if (this.ageCalculated === "other") {
              this.$router.push("evet");
              return false;
            } else if (
              this.ageCalculated === 65 &&
              isHoursBetween10and13 &&
              this.workStatus === 2
            ) {
              this.$router.push("evet");
              return false;
            } else if (this.ageCalculated === 65 && this.workStatus === 1) {
              this.$router.push("evet");
              return false;
            } else if (
              this.ageCalculated === 20 &&
              isHoursBetween13and16 &&
              this.workStatus === 2
            ) {
              this.$router.push("evet");
              return false;
            } else if (this.ageCalculated === 20 && this.workStatus === 1) {
              this.$router.push("evet");
              return false;
            } else {
              this.$router.push("hayir");
              return false;
            }
          }
        }
      }
    },
    buttonGroupClick(e) {
      this.workStatus = e;
    }
  },
  watch: {
    age() {
      this.ageCalculated = "other";
      if (this.age >= 65) {
        this.ageCalculated = 65;
      }
      if (this.age <= 20) {
        this.ageCalculated = 20;
      }
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
</style>
