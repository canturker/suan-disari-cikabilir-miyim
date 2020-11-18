<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>Şu an dışarı çıkabilir miyim? 🤔</h1>
        <div class="disari-form">
          <Input
            type="text"
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
      </Column>
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
      let isWeekend =
        now.getDay() === 6 ||
        now.getDay() === 0 ||
        (now.getDay() === 5 && now.getHours() >= 20);
      let isHoursBetween10and20 = now.getHours() >= 10 && now.getHours() < 20;
      let isHoursBetween10and13 = now.getHours() >= 10 && now.getHours() < 13;
      let isHoursBetween13and16 = now.getHours() >= 13 && now.getHours() < 16;
      if (isWeekend) {
        if (
          this.json.weekend[this.ageCalculated][this.workStatus].outside ===
            "10-20" &&
          isHoursBetween10and20
        ) {
          this.$router.push("evet");
          return false;
        }
        if (
          this.json.weekend[this.ageCalculated][this.workStatus].outside ===
            "10-13" &&
          isHoursBetween10and13
        ) {
          this.$router.push("evet");
          return false;
        }
        if (
          this.json.weekend[this.ageCalculated][this.workStatus].outside ===
            "13-16" &&
          isHoursBetween13and16
        ) {
          this.$router.push("evet");
          return false;
        }
        this.$router.push("hayir");
      } else {
        if (
          this.json.weekday[this.ageCalculated][this.workStatus].outside ===
          "yes"
        ) {
          this.$router.push("evet");
          return false;
        } else {
          if (
            this.json.weekday[this.ageCalculated][this.workStatus].outside ===
              "10-20" &&
            isHoursBetween10and20
          ) {
            this.$router.push("evet");
            return false;
          }
          if (
            this.json.weekday[this.ageCalculated][this.workStatus].outside ===
              "10-13" &&
            isHoursBetween10and13
          ) {
            console.log("10-13 evet");
            this.$router.push("evet");
            return false;
          }
          if (
            this.json.weekday[this.ageCalculated][this.workStatus].outside ===
              "13-16" &&
            isHoursBetween13and16
          ) {
            this.$router.push("evet");
            return false;
          }
          this.$router.push("hayir");
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
</style>
