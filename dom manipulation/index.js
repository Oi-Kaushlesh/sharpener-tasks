function handleFormSubmit(event) {
  event.preventDefault();
  const nameh = event.target.username.value;
  const emailh = event.target.email.value;
  const phoneh = event.target.phone.value;

  let myObj = {
    username: nameh,
    email: emailh,
    phone: phoneh,
  };
  localStorage.setItem(myObj.email, JSON.stringify(myObj));
  showOnsceen(myObj);
  function showOnsceen(myObj) {
    const unlist = document.querySelector("ul");
    const li = document.createElement("li");
    const listitem = document.createTextNode(
      myObj.username + " - " + myObj.email + " - " + myObj.phone
    );
    li.appendChild(listitem);
    unlist.appendChild(li);
    const delbtn = document.createElement("button");
    const btnText = document.createTextNode("Delete");
    delbtn.appendChild(btnText);
    li.append(delbtn);
    delbtn.onclick = () => {
      unlist.removeChild(li);
      localStorage.removeItem(myObj.email);
    };
    const editbtn = document.createElement("button");
    const edbtntext = document.createTextNode("Edit");
    editbtn.appendChild(edbtntext);
    li.appendChild(editbtn);
    editbtn.onclick = (event) => {
      document.getElementById('username').value = myObj.username
      document.getElementById('email').value = myObj.email
      document.getElementById('phone').value = myObj.phone

      unlist.removeChild(li);
      localStorage.removeItem(myObj.email);
    };
  }
}
