const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

if (gridbutton) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
}

const url = "data/members.json";

async function getJohnstonData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.johnston);
    displayJohnston (data.johnston);
    
}

getJohnstonData()
  
const displayJohnston = (johnston) => {
    const cards = document.querySelector("section.cards"); // select the output container element

    johnston.forEach((johnston) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let company = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");
        

        company.textContent = `${johnston.company}`;
        address.textContent = `${johnston.address}`;
        phone.textContent = `${johnston.phone}`;
        
        web.setAttribute("href", `${johnston.web}`);
        web.textContent = `${johnston.curl}`;

        logo.setAttribute("src", johnston.logo);
        logo.setAttribute("alt", "Business Logo");
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");
    

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        
        cards.appendChild(card);
    })

}