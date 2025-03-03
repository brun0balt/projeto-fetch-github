import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.querySelector("#btn-search").addEventListener("click", () => {
  const userName = document.querySelector("#input-search").value;
  if (validateEmptyInput(userName)) return;
  getUserData(userName);
});

document.querySelector("#input-search").addEventListener("keyup", (event) => {
  const userName = event.target.value;
  const key = event.which || event.keyCode;
  const isEnterKeyPressed = key === 13;

  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  }
});

async function getUserData(userName) {
  const userResponse = await getUser(userName);

  if (userResponse.message === "Not Found") {
    screen.renderNotFound();
    return;
  }

  const repositoriesResponse = await getRepositories(userName);

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);

  screen.renderUser(user);
}

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com um nome de usuário do GitHub");
    return true;
  }
}
