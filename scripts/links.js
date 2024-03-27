const baseURL = "https://roquepulido.github.io/wdd230/";
const linksURL = "https://roquepulido.github.io/wdd230/data/links.json";

const linksUl = document.getElementById("links");

async function getLinks(url) {
  url = "./data/links.json";
  const data = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  displayLinks(data);
}

function displayLinks(data) {
  data.weeks.forEach((info) => {
    const spanTitle = document.createElement("span");
    spanTitle.textContent = info.week;

    const li = document.createElement("li");
    li.appendChild(spanTitle);

    info.links.forEach((linkInfo) => {
      const spanSeparator = document.createElement("span");
      spanSeparator.textContent = "|";
      const anchor = document.createElement("a");
      anchor.setAttribute("href", linkInfo.url);
      anchor.setAttribute("target", "_blank");
      anchor.textContent = linkInfo.title;
      li.appendChild(anchor);
      li.appendChild(spanSeparator);
    });
    li.removeChild(li.lastChild);
    linksUl.appendChild(li);
  });
}

getLinks();
