const photos = document.querySelectorAll(".sectionIimage");
const imageId = document.querySelectorAll("#section1 img");
console.log(imageId);
const newCard = document.createElement("div");
const box = document.createElement("div");
newCard.classList.add("newCardClass");



//const newPhoto = document.createElement("img");
//newPhoto.setAttribute("src", "imageId[0].src");
//newPhoto.setAttribute("height", "150px");
//newCard.prepend(newPhoto);
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
    newCard.style.display = "flex";
    newCard.style.alignItems = "center";
    newCard.style.justifyContent = "center";
    newCard.style.height = "100vh";
    newCard.style.width = "100vw";
    newCard.prepend(newPhoto);
    document.querySelector("#section1").prepend(newCard);
    newCard.append(box);
    box.innerHTML = "<div>NATURE</div><div>MOUNTAIN</div><span>Location:</span>";
    const title = document.createElement("h2");
    title.innerHTML = event.currentTarget.getAttribute("alt");
    box.prepend(title);
}

photos.forEach((photo) => photo.addEventListener("click", openCard));
newCard.style.background = "grey";

//photos.forEach((a) => console.log(a));