const inputSearch = document.querySelector("input");
const profiles = [];

async function getData() {
  const api = await fetch(`https://api.github.com/users/${inputSearch.value}`);
  inputSearch.value = "";
  if (api.status !== 200) {
    throw "invalid username.";
  } else {
    const data = await api.json();
    if (!profiles.includes(data.id)) {
      profiles.push(data.id);
      return {
        userImgUrl: data.avatar_url,
        userName: data.login,
        numOfRepo: data.public_repos,
        userID: data.id,
      };
    }
  }
}

function createElements() {
  //create elements
  const containerProfile = document.createElement("div");
  const img = document.createElement("div");
  const userNameClass = document.createElement("div");
  const userNumOfRepo = document.createElement("div");
  //append classes
  containerProfile.classList.add("container");
  img.classList.add("userImg");
  userNameClass.classList.add("userName");
  userNumOfRepo.classList.add("userNumOfRepo");
  //append to container
  containerProfile.append(img, userNameClass, userNumOfRepo);
  //append to big container
  document.querySelector(".all-profiles").append(containerProfile);
  return {
    img: img,
    userNameClass: userNameClass,
    userNumOfRepo: userNumOfRepo,
    container: containerProfile,
    containerAll: document.querySelector(".all-profiles"),
  };
}

document.querySelector("button").addEventListener("click", (e) => {
  const elementObj = createElements();
  const { img, userNameClass, userNumOfRepo } = elementObj;
  const dataObj = getData();
  dataObj
    .then((data) => {
      img.style.background = `url("${data.userImgUrl}") no-repeat center center / cover`;
      userNameClass.textContent = `Username : ${data.userName} `;
      userNumOfRepo.textContent = `Number of public repo : ${data.numOfRepo} `;
    })
    .catch((e) => {
      userNameClass.textContent = "Error : Invalid Profile";
      userNumOfRepo.textContent = ` `;
      img.style.background = `url("https://i1.sndcdn.com/avatars-000143401105-hcmrio-t500x500.jpg") no-repeat center center / cover`;
      setTimeout(() => {
        elementObj.containerAll.removeChild(elementObj.container);
      }, 1500);
    });
});
