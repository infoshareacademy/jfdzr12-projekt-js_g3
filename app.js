const photos = document.querySelectorAll(".sectionIimage");
const imageId = document.querySelectorAll("#section1 img");
const newCard = document.createElement("div");
const newCard2 = document.createElement("div");
const box = document.createElement("div");
newCard.classList.add("newCardClass");
const newButton = document.createElement("button");
let counter = 0;

const header3and4and5 = document.querySelector(".header3and4");
const basketButton = document.createElement("div");
basketButton.classList.add("header5");
basketButton.innerHTML = "Basket";
header3and4and5.append(basketButton);

newCard.style.display = "flex";
newCard.style.alignItems = "center";
newCard.style.justifyContent = "center";
newCard.style.height = "100vh";
newCard.style.width = "100vw";

function openCard() {
    const source = event.currentTarget.getAttribute("src");
    const newPhoto = document.createElement("img");
    newPhoto.setAttribute("src", source);
    newPhoto.setAttribute("height", "150px");
    newButton.setAttribute("type", "submit");
    newButton.innerHTML = "Add to basket";
    newCard.style.display = "flex";
    newCard.style.alignItems = "center";
    newCard.style.justifyContent = "center";
    newCard.style.height = "100vh";
    newCard.style.width = "100vw";
    newCard.prepend(newPhoto);
    document.querySelector("#section1").prepend(newCard);
    newCard.append(box);
    newCard.append(newButton);
    box.innerHTML = "<div>Price:</div><div>NATURE</div><div>MOUNTAIN</div><span>Location:</span>";
    const title = document.createElement("h2");
    title.innerHTML = event.currentTarget.getAttribute("alt");
    const Target = event.currentTarget;
    box.prepend(title);
    newButton.addEventListener("click", () => createForm(Target));
}

photos.forEach((photo) => photo.addEventListener("click", openCard));
newCard.style.background = "grey";
newCard2.style.background = "green";
newCard2.style.height = "50vh";
newCard2.style.width = "50vw";

 function createForm(Target) {   
     const Name = Target.getAttribute("alt");
     const Price = Target.getAttribute("price");
     const myObj = {
        title: Name,
        price: Price
     };
     localStorage.setItem(`Product${counter}`, JSON.stringify(myObj));
     counter++;
    }

basketButton.addEventListener("click", () => openBasket());

function openBasket() {
    document.querySelector(".slogan").prepend(newCard2);
    for (let i; i < localStorage.length; i++) {
        if (localStorage.key(i).includes("Product")) {
            newCard2.innerHTML += localStorage.key(item);
        }
    }
}

import { fetchPhotos } from "./photos.js";
const album = fetchPhotos();
console.log(album);
for (const item of album) {
    const gallery = document.querySelector("#section1")
    const addPhoto = document.createElement("img");
    addPhoto.setAttribute("src", item.url);
    gallery.appendChild(addPhoto);
}
