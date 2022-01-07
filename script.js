const root = document.getElementById("root");

//Menu

const header = document.createElement("header");
header.classList = "header";
root.append(header);

const containerMenu = document.createElement("div");
containerMenu.classList = "menu";
header.append(containerMenu);

const divMenu = document.createElement("div");
divMenu.classList = "menu__burger";
divMenu.id = "menuButton";
divMenu.ariaLabel = "menuOpen";
containerMenu.append(divMenu);

//Open and Close menu
let menuBtn = document.querySelector(".menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.style.display = "block";
    containerMenu.style.background = "white";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.style.display = "none";
    menuOpen = false;
  }
});

//Create list menu

const nav = document.createElement("nav");
nav.classList = "nav";
nav.id = "navbar";
header.append(nav);

const ulNav = document.createElement("ul");
ulNav.classList = "nav__list";
nav.append(ulNav);

let menuArray = [
  "Min bakgrund",
  "Färdigheter",
  "Arbetslivserfarenhet",
  "Utbildning",
  "Socialt",
  "Kontakt",
];

for (let i = 0; i < menuArray.length; i++) {
  const liNav = document.createElement("li");
  liNav.classList = "nav__item";
  const aNav = document.createElement("a");
  aNav.classList = "nav__link";
  aNav.href = "menuitem" + [i];
  aNav.innerText = menuArray[i];
  ulNav.append(liNav);
  liNav.append(aNav);
}

//MAIN: Presentation Card with foto
//LEFT side content

const main = document.createElement("main");
root.append(main);

const sectionCard = document.createElement("section");
sectionCard.classList = "card";
main.append(sectionCard);

const divCardLeft = document.createElement("div");
divCardLeft.classList = "card__contentLeft";
sectionCard.append(divCardLeft);

const h1Card = document.createElement("h1");
h1Card.classList = "card__title";
h1Card.innerText = `Hej, jag heter Cornelia,
och jag utbildar mig 
till Front End utvecklare`;
divCardLeft.append(h1Card);

const cardBtnMail = document.createElement("a");
cardBtnMail.classList = "cardBtnMail";
cardBtnMail.ariaLabel = "Tryck för att sända mail till Cornelia";
cardBtnMail.href = "mailto: cornelialisaharder@gmail.com";
cardBtnMail.innerText = "Maila mig";
divCardLeft.append(cardBtnMail);

const cardBtnFont = document.createElement("i");
cardBtnFont.classList = "card__buttonFont far fa-envelope";
cardBtnMail.append(cardBtnFont);
// list for links on card left

let arrayCardLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/cornelia-harder-140442222/",
  },
  { name: "Github", link: "https://www.github.com/CorneliaLH" },
  { name: "Portfolio", link: "#" },
];

console.log(arrayCardLinks);
const cardList = document.createElement("ul");
cardList.classList = "card__list";
divCardLeft.append(cardList);

for (let u = 0; u < arrayCardLinks.length; u++) {
  const cardItem = document.createElement("li");
  cardItem.classList = "card__item";
  const cardLink = document.createElement("a");
  cardLink.classList = "card__link";
  cardLink.innerText = arrayCardLinks[u].name;
  cardLink.href = arrayCardLinks[u].link;

  cardList.append(cardItem);
  cardItem.append(cardLink);
}
//RIGHT side content
