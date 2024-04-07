const gridbutton = document.getElementById("grid");
const listbutton = document.getElementById("list");
const display = document.querySelector("article");
const directory = document.getElementById("directory");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");

  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  gridbutton.classList.remove("active");
  listbutton.classList.add("active");
}
async function getData() {
  let data = [];
  const url = "./data/members.json";
  data = await fetch(url).then((r) => r.json());
  data.forEach((business) => {
    directory.innerHTML += `
    <div class="business-container">
      <img src="${business.image}" alt="${business.name}">
      <span class="name">${business.name}</span>
      <span class="address">${business.address}</span>
      <a href="tel:${business.phone}" class="phone">${business.phone}</a>
      <a href="${business.website}" class="website">${business.website}</a>
    </div>`;
  });
}
getData();
