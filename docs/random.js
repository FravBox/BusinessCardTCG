const cards = ["standardquip", "synaesthesia-productions", "Tayuyashoujo"];
const randomCard = cards[Math.floor(cards.length * Math.random())];
const url = `url(https://raw.githubusercontent.com/FravBox/BusinessCardTCG/main/free%20cards/amv/${randomCard}.png)`;
const gradient = `linear-gradient(to bottom, transparent, var(--background)), ${url}`;

function setRandomCard() {
  const card = document.getElementById("card-container");
  card.style.backgroundImage = gradient;
}
