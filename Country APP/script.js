let container = document.querySelector(".container");
let fetchBtn = document.querySelector(".fetch");
let high = document.querySelector(".high");
let low = document.querySelector(".low");

let arr = [];

async function fetchApi() {
    try {
        let api = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
        let finalApi = await api.json();
        arr = finalApi.data;
        displayData(finalApi.data);
    } catch (error) {
        console.log(error);
    }
}

fetchBtn.addEventListener('click', fetchApi);

function displayData(data) {
    container.innerHTML = "";

    data.forEach(element => {
        let countryElement = document.createElement("div");
        countryElement.className = "card";

        let countryName = document.createElement("h2");
        let countryDetails = document.createElement("p");

        countryName.textContent = element.country;
        countryDetails.textContent = `ID: ${element.id}, Rank: ${element.Rank}, Population: ${element.population}`;
        countryDetails.className = "details";

        countryElement.appendChild(countryName);
        countryElement.appendChild(countryDetails);

        container.appendChild(countryElement);
    });
}

high.addEventListener('click', () => {
    arr.sort((a, b) => b.population - a.population);
    displayData(arr);
});

low.addEventListener('click', () => {
    arr.sort((a, b) => a.population - b.population);
    displayData(arr);
});
