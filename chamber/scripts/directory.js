const gridbutton = document.getElementById("grid");
const listbutton = document.getElementById("list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");

  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  gridbutton.classList.remove("active");
  listbutton.classList.add("active");
}

document.addEventListener("alpine:init", () => {
  Alpine.data("directory", () => ({
    elements: [],

    async getData() {
      const url = "./data/members.json";
      this.elements = await fetch(url).then((r) => r.json());
    },
    init() {
      this.getData();
    },
  }));
});
