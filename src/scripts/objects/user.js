const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  username: "",
  repositories: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.username = gitHubUser.login;
  },

  setRepositories(repositories) {
    this.repositories = repositories;
  },
};

export { user };
