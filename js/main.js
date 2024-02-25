const list = document.querySelector("#list");
const filter = document.querySelector("#name");
let USERS = [];

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const data = await response.json();
    setTimeout(() => {
      USERS = data;
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
  if (users.length === 0) {
    list.innerHTML = "No matched users(((";
  } else {
    const html = users.map(toHtml).join("");
    list.innerHTML = html;
  }
}

start();
