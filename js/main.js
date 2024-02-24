const list = document.querySelector("#list");
const filter = document.querySelector("#name");

filter.addEventListener("input", (event) => {
  console.log("click", event.target.value);
});

async function start() {
  list.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    setTimeout(() => {
      render(data);
    }, 2000);
  } catch (err) {
    list.style.color = "#f95959";
    list.innerHTML = err.message;
  }
}

function toHtml(user) {
  return `<li>${user.name}</li>`;
}

function render(users = []) {
  const html = users.map(toHtml).join("");
  list.innerHTML = html;
}

start();
