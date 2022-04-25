const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const ul = document.createElement("ul");
document.body.append(ul);

users.forEach((user) => {
  //   console.log(user.firstName + " " + user.lastName);
  let li = document.createElement("li");
  li.innerText = user.firstName + " " + user.lastName;
  //   li.id = user.id;
  li.setAttribute("data-id", user.id);
  ul.append(li);
});

ul.style.listStyle = "none";
