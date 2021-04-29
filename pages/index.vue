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
        <h1 style="margin-bottom:0">Dışarı çıkabilmene</h1>
        <h1
          style="margin-bottom:0; font-weight: 500;"
          v-text="timeleftText"
        ></h1>
        <h1 style="margin-bottom:0">kaldı</h1>
        <h5>
          Tedbirli ol, Güvende ol, Lysol!
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
import {
  Button,
  Container,
  Row,
  Column,
  Input,
  ButtonGroup,
  Table
} from "kunodo";
export default {
  components: { Button, Container, Row, Column, Input, ButtonGroup, Table },
  data() {
    return {
      timeleftText: "",
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
  },
  mounted() {
    var countDownDate = new Date("May 17, 2021 05:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      this.timeleftText =
        days +
        " gün " +
        hours +
        " saat " +
        minutes +
        " dakika " +
        seconds +
        " saniye ";
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        this.timeleftText = "Hurraahhh";
      }
    }, 1000);
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
