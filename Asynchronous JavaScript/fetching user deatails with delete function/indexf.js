// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/41792b93ac2447248ff93478be4089e7/appointmentData",
      userDetails
    )
    .then((result) => displayUser(result.data))
    .catch((err) => console.log(err));

}
    window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(
        "https://crudcrud.com/api/41792b93ac2447248ff93478be4089e7/appointmentData"
      )
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            displayUser(response.data[i])
        }
      })
      .catch((err) => console.log(err));
  });

function displayUser(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios
      .delete(
        `https://crudcrud.com/api/41792b93ac2447248ff93478be4089e7/appointmentData/${userDetails._id}`
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
  });

  editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });
}
// Do not touch the code below
// module.exports = handleFormSubmit;

// Do not touch the code below
module.exports = handleFormSubmit;