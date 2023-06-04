// Global Info
let usernameInput = document.querySelector(".get-repos input"),
  srchBtn = document.querySelector(".get-repos button"),
  showData = document.querySelector(".show-data");

srchBtn.addEventListener("click", function (e) {
  e.preventDefault();

  getRepos();
});

// Main function
function getRepos() {
  showData.innerHTML = "";
  if (usernameInput.value == "") {
    showData.textContent = "Please, Write github username.";
  } else {
    fetch(`https://api.github.com/users/${usernameInput.value}/repos`)
      .then((result) => {
        return result.json();
      })

      .then((repos) => {
        if (repos.length > 1) {
          console.log(repos);
          repos.forEach((element) => {
            let repoDiv = document.createElement("div");

            let repoName = document.createElement("p");
            repoName.textContent = `${element.name}`;

            let repoStars = document.createElement("span");
            repoStars.textContent = `Stars ${element.stargazers_count}`;

            let repoLink = document.createElement("a");
            repoLink.setAttribute(
              "href",
              `https://github.com/${usernameInput.value}/${element.name}`
            );
            repoLink.textContent = "Open";
            repoLink.setAttribute("target", "_blank");

            let starsAndLink = document.createElement("div");

            // append elements
            starsAndLink.appendChild(repoStars);
            starsAndLink.appendChild(repoLink);
            repoDiv.appendChild(repoName);
            repoDiv.appendChild(starsAndLink);

            showData.appendChild(repoDiv);
          });
        } else {
          showData.textContent = "Write a valid username ⚠";
        }
      });
  }
}
