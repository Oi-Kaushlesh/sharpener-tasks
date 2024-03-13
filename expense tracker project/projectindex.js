const ullist = document.getElementById("list");
function handleFormSubmit(event) {
  event.preventDefault();
  const amounti = event.target.amount.value;
  const descrip = event.target.description.value;
  const cate = event.target.category.value;
  let num = Math.floor(Math.random() * 1000);
  let obj = {
    UniqueId: num,
    Amount: amounti,
    Description: descrip,
    Category: cate,
  };
  localStorage.setItem(num, JSON.stringify(obj));
  const listitem = document.createElement("li");
  listitem.className = "list-group-item";
  const delbtn = document.createElement("button");
  delbtn.className = "btn btn-outline-danger me-2";
  const editbtn = document.createElement("button");
  editbtn.className = "btn btn-outline-warning me-2";
  delbtn.textContent = "Delete Expense";
  editbtn.textContent = "Edit Expense";
  const listText = document.createTextNode(
    obj.Amount + " - " + obj.Description + " - " + obj.Category + " "
  );
  listitem.appendChild(listText);
  listitem.appendChild(delbtn);
  listitem.appendChild(editbtn);
  ullist.appendChild(listitem);
  delbtn.onclick = () => {
    ullist.removeChild(listitem);
    localStorage.removeItem(num);
  };
  editbtn.onclick = () => {
    event.target.amount.value = obj.Amount;
    event.target.description.value = obj.Description;
    event.target.category.value = obj.Category;
    ullist.removeChild(listitem);
    localStorage.removeItem(num);
  };
}
