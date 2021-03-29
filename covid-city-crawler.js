const CITY_CODES = [
	{
      name: "İSTANBUL",
      value: "34"
    },
    {
      name: "İZMİR",
      value: "35"
    },
    {
      name: "ANKARA",
      value: "6"
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
];
let map = document.querySelectorAll('#turkiye')[1];
let citiesGroup = map.getElementsByTagName('g');
var cities = [];
for (let city of citiesGroup) {
	let cityName = city.attributes['data-iladi'].value.toLocaleUpperCase('tr-TR');
	cityName = cityName === 'AFYON' ? 'AFYONKARAHİSAR' : cityName;
	let cityCode = CITY_CODES.filter((item) => {
		return item.name === cityName;
	})[0].value;
	let cityRisk = parseInt(city.attributes.id.value.replace('color_',''));
    cities.push({
    	id: cityCode,
    	name: cityName, 
    	risk: cityRisk,
    });
}
console.log(cities);