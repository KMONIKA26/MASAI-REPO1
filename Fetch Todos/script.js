let container = document.querySelector(".container")
let btn = document.querySelector(".fetch-todo")
let dataContainer = document.querySelector(".data")

async function fetchApi() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let finalRes = await res.json()

        console.log(finalRes)

        finalRes.forEach(element => {
            console.log(element)
            dataContainer.append(card(element.title, element.completed))
        });

    } catch (error) {
        console.log(error)
    }
}

function card(title, isCompleted) {
    let card = document.createElement("div");
    card.innerHTML = `
        <div class="card">
            <span> 
                <p>${title}</p> 
                <input type="checkbox" ${isCompleted ? "checked" : ""} name="" id="">
            </span>
        </div>
    `
    return card
}

btn.addEventListener('click', fetchApi);
