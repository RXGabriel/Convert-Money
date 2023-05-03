const button = document.getElementById("convert-botton");
const select = document.getElementById("currency-select");

const dolar = 5.01;
const euro = 5.54;
const bitcoin = 142348.34;

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const CurrencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dolár Americano") {
    CurrencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }
  if (select.value === "€ Euro") {
    CurrencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
  if (select.value === "Bitcoin") {
    CurrencyValueText.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(inputReais / bitcoin);
  }
};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dolár Americano") {
    currencyName.innerHTML = "Dolár Americano";
    currencyImg.src = "./assets/eua.png";
  }
  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }
  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }
  convertValues();
  console.log();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
