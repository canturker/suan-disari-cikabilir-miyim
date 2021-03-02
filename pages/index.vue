<template>
  <Container class="disari-container">
    <Row class="disari-row">
      <Column lg="6" md="6" sm="4">
        <h1>
          Şu an dışarı çıkabilir miyim? 🤔
        </h1>
        <div class="disari-form">
          <Combobox
            :items="city"
            locale="tr-TR"
            v-model="selectedCity"
            :error="cityError"
            :message="cityErrorMessage"
            label="Yaşadığınız Şehir"
          />
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

        <h5 style="text-align: center; margin-bottom: 5px; margin-top: 70px;">
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
      selectedCity: "",
      // risk level 1 to 4, 1 low level 4 highest
      JSON: {
        1: {
          age: {
            20: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            },
            65: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            },
            other: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            }
          }
        },
        2: {
          age: {
            20: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            },
            65: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            },
            other: {
              day: {
                funday: "evet",
                sunday: "evet"
              }
            }
          }
        },
        3: {
          age: {
            20: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            },
            65: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            },
            other: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            }
          }
        },
        4: {
          age: {
            20: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            },
            65: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            },
            other: {
              day: {
                funday: "evet",
                sunday: "hayir"
              }
            }
          }
        }
      },
      city: [
        {
          name: "-",
          value: 0
        },
        {
          name: "ADANA",
          value: "1"
        },
        {
          name: "ADIYAMAN",
          value: "2"
        },
        {
          name: "AFYONKARAHİSAR",
          value: "3"
        },
        {
          name: "AĞRI",
          value: "4"
        },
        {
          name: "AMASYA",
          value: "5"
        },
        {
          name: "ANKARA",
          value: "6"
        },
        {
          name: "ANTALYA",
          value: "7"
        },
        {
          name: "ARTVİN",
          value: "8"
        },
        {
          name: "AYDIN",
          value: "9"
        },
        {
          name: "BALIKESİR",
          value: "10"
        },
        {
          name: "BİLECİK",
          value: "11"
        },
        {
          name: "BİNGÖL",
          value: "12"
        },
        {
          name: "BİTLİS",
          value: "13"
        },
        {
          name: "BOLU",
          value: "14"
        },
        {
          name: "BURDUR",
          value: "15"
        },
        {
          name: "BURSA",
          value: "16"
        },
        {
          name: "ÇANAKKALE",
          value: "17"
        },
        {
          name: "ÇANKIRI",
          value: "18"
        },
        {
          name: "ÇORUM",
          value: "19"
        },
        {
          name: "DENİZLİ",
          value: "20"
        },
        {
          name: "DİYARBAKIR",
          value: "21"
        },
        {
          name: "EDİRNE",
          value: "22"
        },
        {
          name: "ELAZIĞ",
          value: "23"
        },
        {
          name: "ERZİNCAN",
          value: "24"
        },
        {
          name: "ERZURUM",
          value: "25"
        },
        {
          name: "ESKİŞEHİR",
          value: "26"
        },
        {
          name: "GAZİANTEP",
          value: "27"
        },
        {
          name: "GİRESUN",
          value: "28"
        },
        {
          name: "GÜMÜŞHANE",
          value: "29"
        },
        {
          name: "HAKKARİ",
          value: "30"
        },
        {
          name: "HATAY",
          value: "31"
        },
        {
          name: "ISPARTA",
          value: "32"
        },
        {
          name: "MERSİN",
          value: "33"
        },
        {
          name: "İSTANBUL",
          value: "34"
        },
        {
          name: "İZMİR",
          value: "35"
        },
        {
          name: "KARS",
          value: "36"
        },
        {
          name: "KASTAMONU",
          value: "37"
        },
        {
          name: "KAYSERİ",
          value: "38"
        },
        {
          name: "KIRKLARELİ",
          value: "39"
        },
        {
          name: "KIRŞEHİR",
          value: "40"
        },
        {
          name: "KOCAELİ",
          value: "41"
        },
        {
          name: "KONYA",
          value: "42"
        },
        {
          name: "KÜTAHYA",
          value: "43"
        },
        {
          name: "MALATYA",
          value: "44"
        },
        {
          name: "MANİSA",
          value: "45"
        },
        {
          name: "KAHRAMANMARAŞ",
          value: "46"
        },
        {
          name: "MARDİN",
          value: "47"
        },
        {
          name: "MUĞLA",
          value: "48"
        },
        {
          name: "MUŞ",
          value: "49"
        },
        {
          name: "NEVŞEHİR",
          value: "50"
        },
        {
          name: "NİĞDE",
          value: "51"
        },
        {
          name: "ORDU",
          value: "52"
        },
        {
          name: "RİZE",
          value: "53"
        },
        {
          name: "SAKARYA",
          value: "54"
        },
        {
          name: "SAMSUN",
          value: "55"
        },
        {
          name: "SİİRT",
          value: "56"
        },
        {
          name: "SİNOP",
          value: "57"
        },
        {
          name: "SİVAS",
          value: "58"
        },
        {
          name: "TEKİRDAĞ",
          value: "59"
        },
        {
          name: "TOKAT",
          value: "60"
        },
        {
          name: "TRABZON",
          value: "61"
        },
        {
          name: "TUNCELİ",
          value: "62"
        },
        {
          name: "ŞANLIURFA",
          value: "63"
        },
        {
          name: "UŞAK",
          value: "64"
        },
        {
          name: "VAN",
          value: "65"
        },
        {
          name: "YOZGAT",
          value: "66"
        },
        {
          name: "ZONGULDAK",
          value: "67"
        },
        {
          name: "AKSARAY",
          value: "68"
        },
        {
          name: "BAYBURT",
          value: "69"
        },
        {
          name: "KARAMAN",
          value: "70"
        },
        {
          name: "KIRIKKALE",
          value: "71"
        },
        {
          name: "BATMAN",
          value: "72"
        },
        {
          name: "ŞIRNAK",
          value: "73"
        },
        {
          name: "BARTIN",
          value: "74"
        },
        {
          name: "ARDAHAN",
          value: "75"
        },
        {
          name: "IĞDIR",
          value: "76"
        },
        {
          name: "YALOVA",
          value: "77"
        },
        {
          name: "KARABÜK",
          value: "78"
        },
        {
          name: "KİLİS",
          value: "79"
        },
        {
          name: "OSMANİYE",
          value: "80"
        },
        {
          name: "DÜZCE",
          value: "81"
        }
      ],
      cityRiskList: [
        {
          id: 0,
          name: "-",
          disabled: true
        },
        {
          id: "1",
          name: "ADANA",
          risk: 2
        },
        {
          id: "2",
          name: "ADIYAMAN",
          risk: 4
        },
        {
          id: "3",
          name: "AFYONKARAHİSAR",
          risk: 2
        },
        {
          id: "4",
          name: "AĞRI",
          risk: 1
        },
        {
          id: "5",
          name: "AMASYA",
          risk: 4
        },
        {
          id: "6",
          name: "ANKARA",
          risk: 2
        },
        {
          id: "7",
          name: "ANTALYA",
          risk: 3
        },
        {
          id: "8",
          name: "ARTVİN",
          risk: 3
        },
        {
          id: "9",
          name: "AYDIN",
          risk: 2
        },
        {
          id: "10",
          name: "BALIKESİR",
          risk: 4
        },
        {
          id: "11",
          name: "BİLECİK",
          risk: 3
        },
        {
          id: "12",
          name: "BİNGÖL",
          risk: 1
        },
        {
          id: "13",
          name: "BİTLİS",
          risk: 1
        },
        {
          id: "14",
          name: "BOLU",
          risk: 3
        },
        {
          id: "15",
          name: "BURDUR",
          risk: 4
        },
        {
          id: "16",
          name: "BURSA",
          risk: 2
        },
        {
          id: "17",
          name: "ÇANAKKALE",
          risk: 3
        },
        {
          id: "18",
          name: "ÇANKIRI",
          risk: 2
        },
        {
          id: "19",
          name: "ÇORUM",
          risk: 2
        },
        {
          id: "20",
          name: "DENİZLİ",
          risk: 2
        },
        {
          id: "21",
          name: "DİYARBAKIR",
          risk: 1
        },
        {
          id: "22",
          name: "EDİRNE",
          risk: 4
        },
        {
          id: "23",
          name: "ELAZIĞ",
          risk: 2
        },
        {
          id: "24",
          name: "ERZİNCAN",
          risk: 2
        },
        {
          id: "25",
          name: "ERZURUM",
          risk: 2
        },
        {
          id: "26",
          name: "ESKİŞEHİR",
          risk: 2
        },
        {
          id: "27",
          name: "GAZİANTEP",
          risk: 2
        },
        {
          id: "28",
          name: "GİRESUN",
          risk: 4
        },
        {
          id: "29",
          name: "GÜMÜŞHANE",
          risk: 4
        },
        {
          id: "30",
          name: "HAKKARİ",
          risk: 1
        },
        {
          id: "31",
          name: "HATAY",
          risk: 2
        },
        {
          id: "32",
          name: "ISPARTA",
          risk: 2
        },
        {
          id: "33",
          name: "MERSİN",
          risk: 3
        },
        {
          id: "34",
          name: "İSTANBUL",
          risk: 3
        },
        {
          id: "35",
          name: "İZMİR",
          risk: 3
        },
        {
          id: "36",
          name: "KARS",
          risk: 2
        },
        {
          id: "37",
          name: "KASTAMONU",
          risk: 2
        },
        {
          id: "38",
          name: "KAYSERİ",
          risk: 3
        },
        {
          id: "39",
          name: "KIRKLARELİ",
          risk: 3
        },
        {
          id: "40",
          name: "KIRŞEHİR",
          risk: 2
        },
        {
          id: "41",
          name: "KOCAELİ"
        },
        {
          id: "42",
          name: "KONYA",
          risk: 4
        },
        {
          id: "43",
          name: "KÜTAHYA",
          risk: 3
        },
        {
          id: "44",
          name: "MALATYA",
          risk: 2
        },
        {
          id: "45",
          name: "MANİSA",
          risk: 2
        },
        {
          id: "46",
          name: "KAHRAMANMARAŞ",
          risk: 2
        },
        {
          id: "47",
          name: "MARDİN",
          risk: 1
        },
        {
          id: "48",
          name: "MUĞLA",
          risk: 3
        },
        {
          id: "49",
          name: "MUŞ",
          risk: 1
        },
        {
          id: "50",
          name: "NEVŞEHİR",
          risk: 2
        },
        {
          id: "51",
          name: "NİĞDE",
          risk: 3
        },
        {
          id: "52",
          name: "ORDU",
          risk: 4
        },
        {
          id: "53",
          name: "RİZE",
          risk: 4
        },
        {
          id: "54",
          name: "SAKARYA",
          risk: 4
        },
        {
          id: "55",
          name: "SAMSUN",
          risk: 4
        },
        {
          id: "56",
          name: "SİİRT",
          risk: 1
        },
        {
          id: "57",
          name: "SİNOP",
          risk: 4
        },
        {
          id: "58",
          name: "SİVAS",
          risk: 2
        },
        {
          id: "59",
          name: "TEKİRDAĞ",
          risk: 3
        },
        {
          id: "60",
          name: "TOKAT",
          risk: 4
        },
        {
          id: "61",
          name: "TRABZON",
          risk: 4
        },
        {
          id: "62",
          name: "TUNCELİ",
          risk: 2
        },
        {
          id: "63",
          name: "ŞANLIURFA",
          risk: 1
        },
        {
          id: "64",
          name: "UŞAK",
          risk: 1
        },
        {
          id: "65",
          name: "VAN",
          risk: 1
        },
        {
          id: "66",
          name: "YOZGAT",
          risk: 2
        },
        {
          id: "67",
          name: "ZONGULDAK",
          risk: 3
        },
        {
          id: "68",
          name: "AKSARAY",
          risk: 4
        },
        {
          id: "69",
          name: "BAYBURT",
          risk: 2
        },
        {
          id: "70",
          name: "KARAMAN",
          risk: 3
        },
        {
          id: "71",
          name: "KIRIKKALE",
          risk: 3
        },
        {
          id: "72",
          name: "BATMAN",
          risk: 1
        },
        {
          id: "73",
          name: "ŞIRNAK",
          risk: 1
        },
        {
          id: "74",
          name: "BARTIN",
          risk: 2
        },
        {
          id: "75",
          name: "ARDAHAN",
          risk: 3
        },
        {
          id: "76",
          name: "IĞDIR",
          risk: 1
        },
        {
          id: "77",
          name: "YALOVA",
          risk: 2
        },
        {
          id: "78",
          name: "KARABÜK",
          risk: 2
        },
        {
          id: "79",
          name: "KİLİS",
          risk: 3
        },
        {
          id: "80",
          name: "OSMANİYE",
          risk: 4
        },
        {
          id: "81",
          name: "DÜZCE",
          risk: 3
        }
      ]
    };
  },
  methods: {
    formClick() {
      const now = new Date();
      if (!this.selectedCity) {
        this.cityError = true;
        this.cityErrorMessage =
          "Risk bölgenizi bulabilmek adına ihtiyacım var 🥺";
        return;
      }
      if (!this.age) {
        this.ageError = true;
        this.ageErrorMessage =
          "Önemli olan ruhumuzun genç olması çekinmeyin 😇";
        return;
      }
      let isSunday = now.getDay() === 0;
      let isHoursBetween21and5 = now.getHours() >= 21 || now.getHours() < 5;
      let selectedCityRiskLevel = this.cityRiskList.find(item => {
        return item.id === this.selectedCity;
      }).risk;
      if (isHoursBetween21and5) {
        this.$router.push(`hayir/${selectedCityRiskLevel}`);
        return;
      }
      let route = this.JSON[selectedCityRiskLevel].age[this.ageCalculated].day[
        isSunday ? "sunday" : "funday"
      ];
      this.$router.push(`${route}/${selectedCityRiskLevel}`);
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
