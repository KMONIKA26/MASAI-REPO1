let btn = document.querySelector(".fetch");
let div = document.querySelector(".main");

btn.addEventListener('click', myApi);

async function fetching() {
    try {
        let url = await fetch('https://reqres.in/api/users?page=2');
        let finalUrl = await url.json();
        return finalUrl.data;
    } catch (error) {
        console.log(error);
    }
}

function myApi() {
    div.innerHTML = "";

    fetching().then(data => {
        data.forEach(element => {
            let divi = document.createElement("div");
            let name = document.createElement("h4");
            let email = document.createElement("p");
            let img = document.createElement("img");

            name.innerText = `${element.first_name} ${element.last_name}`;
            email.innerText = `${element.email}`;
            img.src = element.avatar;

            divi.appendChild(name);
            divi.appendChild(email);
            divi.appendChild(img);
            div.appendChild(divi);
        });
    });
}
