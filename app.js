let currencyURL = "api.pages.dev/v1/currencies/eur.json";
let dropdawnSelects = document.querySelectorAll("select");
for (option of dropdawnSelects) {
    for (code in countryCodeList) {
        let newOptions = document.createElement("option");
        newOptions.value = code;
        newOptions.innerText = code;
        option.append(newOptions);

    }
}