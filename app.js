let currencyURL = "api.pages.dev/v1/currencies/eur.json";
let dropdawns = document.querySelectorAll("select");
let FormBtn = document.querySelector("button")
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
FormBtn.addEventListener("click", (evnt) => {
    evnt.preventDefault();
    console.log(evnt.target)
})