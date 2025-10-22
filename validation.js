// console.log("conect");

const input = document.getElementById("useName");

const form = document.getElementById("userForm");

const errorMessage = document.getElementById("errormsg");

const user = document.getElementById("userList");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);

  let name = input.value;

  if (name === "") {
    errorMessage.textContent = "user name require";
    errorMessage.style.color = "red";
  } else {
    errorMessage.textContent = "submited";
    errorMessage.style.color = "green";
  }

  const itemList = document.createElement("li");
  itemList.textContent = `${name}`;
  user.appendChild(itemList);

  console.log(name);
});
