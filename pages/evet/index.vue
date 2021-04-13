<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column
        lg="6"
        md="6"
        sm="4"
        class="text-center"
        style="padding-top: 100px; padding-bottom: 100px;"
      >
        <h5 style="margin-bottom: 20px;">#SevdiklerimiKorumakİcinBen</h5>
        <h1>🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️</h1>
        <h1>Hurrraahhh!</h1>
        <h1 class="reversed-text">🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️</h1>
        <h5>
          Tedbirli ol, Güvende ol, Lysol!
        </h5>
        <h5 style="display: flex; justify-content: center; margin-top: 10px;">
          <a href="https://ty.gl/lysol_website_112020"
            ><img src="../../assets/lysol.svg" class="banner-image-1" alt=""
          /></a>
          yoksa
          <a
            href="https://ty.gl/lysol_website_112020"
            style="margin-left: 5px;"
          >
            hemen al</a
          >
        </h5>
        <div>
          <Table>
            <tbody>
              <tr
                v-for="feature in features[$route.params.risk]"
                :key="feature.name"
              >
                <td style="text-align: left">{{ feature.name }}</td>
                <td style="text-align: left">
                  <b :class="`text-${feature.color}`">{{ feature.value }}</b>
                </td>
              </tr>
            </tbody>
          </Table>
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
        <h5 style="margin-top: 10px;text-align: center;">
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
  Column,
  Input,
  Table,
  ButtonGroup
} from "kunodo";
export default {
  components: { Button, Container, Row, Column, Input, Table, ButtonGroup },
  data() {
    return {
      features: {
        1: [
          {
            name: "Okul Öncesi 🐣",
            value: "Açık",
            color: "green"
          },
          {
            name: "İlkokul 🐥",
            value: "Açık",
            color: "green"
          },
          {
            name: "8. ve 12. sınıflar 📝",
            value: "Açık",
            color: "green"
          },
          {
            name: "Ortaokul 🐓",
            value: "Açık",
            color: "green"
          },
          {
            name: "Lise 🧍‍♀️🧍",
            value: "Açık",
            color: "green"
          },
          {
            name: "Restoran/Kafe 🍔🥘",
            value: "07:00 - 19:00, 50% kapasite",
            color: "green"
          },
          {
            name: "Halısaha/Yüzme Havuzu ⚽️🏊‍♀️",
            value: "07:00 - 19:00",
            color: "green"
          }
        ],
        2: [
          {
            name: "Okul Öncesi 🐣",
            value: "Açık",
            color: "green"
          },
          {
            name: "İlkokul 🐥",
            value: "Açık",
            color: "green"
          },
          {
            name: "8. ve 12. sınıflar 📝",
            value: "Açık",
            color: "green"
          },
          {
            name: "Ortaokul 🐓",
            value: "Açık",
            color: "green"
          },
          {
            name: "Lise 🧍‍♀️🧍",
            value: "Açık",
            color: "green"
          },
          {
            name: "Restoran/Kafe 🍔🥘",
            value: "07:00 - 19:00, 50% kapasite",
            color: "green"
          },
          {
            name: "Halısaha/Yüzme Havuzu ⚽️🏊‍♀️",
            value: "07:00 - 19:00",
            color: "green"
          }
        ],
        3: [
          {
            name: "Okul Öncesi 🐣",
            value: "Açık",
            color: "green"
          },
          {
            name: "İlkokul 🐥",
            value: "Açık",
            color: "green"
          },
          {
            name: "8. ve 12. sınıflar 📝",
            value: "Açık",
            color: "green"
          },
          {
            name: "Ortaokul 🐓",
            value: "Kapalı",
            color: "red"
          },
          {
            name: "Lise 🧍‍♀️🧍",
            value: "Yüz yüze sınav",
            color: "yellow"
          },
          {
            name: "Restoran/Kafe 🍔🥘",
            value: "07:00 - 19:00, 50% kapasite",
            color: "green"
          },
          {
            name: "Halısaha/Yüzme Havuzu ⚽️🏊‍♀️",
            value: "Kapalı",
            color: "red"
          }
        ],
        4: [
          {
            name: "Okul Öncesi 🐣",
            value: "Açık",
            color: "green"
          },
          {
            name: "İlkokul 🐥",
            value: "Açık",
            color: "green"
          },
          {
            name: "8. ve 12. sınıflar 📝",
            value: "Açık",
            color: "green"
          },
          {
            name: "Ortaokul 🐓",
            value: "Kapalı",
            color: "red"
          },
          {
            name: "Lise 🧍‍♀️🧍",
            value: "Yüz yüze sınav",
            color: "yellow"
          },
          {
            name: "Restoran/Kafe 🍔🥘",
            value: "Kapalı",
            color: "red"
          },
          {
            name: "Halısaha/Yüzme Havuzu ⚽️🏊‍♀️",
            value: "Kapalı",
            color: "red"
          }
        ]
      }
    };
  }
};
</script>

<style>
.text-green {
  color: #36b37e;
}
.text-yellow {
  color: #ffab00;
}
.text-red {
  color: #ff5630;
}
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
