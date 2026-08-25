let currencyURL = 'https://v6.exchangerate-api.com/v6/7d4178dda7f9706ac46e6c35/pair/INR/USD';
let dropdawns = document.querySelectorAll("select");
let FormBtn = document.querySelector("button")
let From = document.querySelector(".from select");
let to = document.querySelector(".to select");
for (option of dropdawns) {
    for (code in countryCodeList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = code;
        newOptions.value = code;
        option.append(newOptions);
        if (option.name === "from" && code === "USD") {
            newOptions.selected = "selected";
        }
        else if (option.name === "to" && code === "INR") {
            newOptions.selected = "selected";
        }
    }
    option.addEventListener("change", (evnt) => {
        updateFlag(evnt.target);
    })
}
function updateFlag(element) {
    let CurCountry = element.value;
    let CurCode = countryCodeList[CurCountry];
    let countryLink = `https://flagsapi.com/${CurCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = countryLink;
}
FormBtn.addEventListener("click", async (evnt) => {
    evnt.preventDefault();
    let URL = `https://v6.exchangerate-api.com/v6/7d4178dda7f9706ac46e6c35/pair/${From.value.toLowerCase()}/${to.value.toLowerCase()}`
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rate;
    console.log(rate)
});