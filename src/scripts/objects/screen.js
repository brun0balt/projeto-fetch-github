const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class='info'> <img src= '${
      user.avatarUrl
    }' alt= 'user profile card'/>
                            <div class='data'>
                                <h1>${user.name ?? "not found"}</h1>
                                <p>${user.bio ?? "not found"}</p>
                            </div>
                        </div>`;

    let repositoriesItems = "";
    user.repositories.forEach(
      repos =>
        repositoriesItems += `<li><a href="${repos.html_url}"
        target="_blank"> ${repos.name}</a></li>`)

    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItems}</ul>
                                        </div>`
    }
  },

  renderNotFound(){
    this.userProfile.innerHTML = "<h3>usuário não encontrado</h3>"
  }
};

export { screen };
