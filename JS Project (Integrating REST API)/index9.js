let countNum = 0;
function formSubmit(event) {
  event.preventDefault();
  countNum++;
  const studentDetails = {
    name: event.target.name.value,
    mobile: event.target.mobile.value,
    address: event.target.address.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/ec2e89ea993c45b7ba7edb002cc7194c/studentData",
      studentDetails
    )
    .then((result) =>{
        displayUser(result.data);
        updateStudentCount();
    })
    .catch((err) => console.log(err));
  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("address").value = "";
  const countPara = document.getElementById("studentCount");
  countPara.textContent = countNum;
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/ec2e89ea993c45b7ba7edb002cc7194c/studentData"
    )
    .then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        displayUser(result.data[i]);
      }
      updateStudentCount();
    })
    .catch((err) => {
      console.log(err);
    });
});
function displayUser(studentDetails) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.appendChild(
    document.createTextNode(
      `${studentDetails.name} - ${studentDetails.mobile} - ${studentDetails.address}`
    )
  );
  const delbtn = document.createElement("button");
  delbtn.className = "btn btn-danger me-2";
  delbtn.appendChild(document.createTextNode("Delete"));
  listItem.appendChild(delbtn);
  const editbtn = document.createElement("button");
  editbtn.className = "btn btn-warning me-2";
  editbtn.appendChild(document.createTextNode("Edit"));
  listItem.appendChild(editbtn);
  const ul = document.getElementById("list");
  ul.appendChild(listItem);

  delbtn.addEventListener("click", function deleteuser(event) {
    axios
      .delete(
        `https://crudcrud.com/api/ec2e89ea993c45b7ba7edb002cc7194c/studentData/${studentDetails._id}`
      )
      .then((result) => {
        const ul = document.getElementById("list");
        ul.removeChild(event.target.parentElement);
        updateStudentCount();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  editbtn.addEventListener("click", function edituser(event) {
    document.getElementById("name").value = studentDetails.name;
    document.getElementById("mobile").value = studentDetails.mobile;
    document.getElementById("address").value = studentDetails.address;

    axios
      .delete(
        `https://crudcrud.com/api/ec2e89ea993c45b7ba7edb002cc7194c/studentData/${studentDetails._id}`
      )
      .then((result) => {
        const ul = document.getElementById("list");
        ul.removeChild(event.target.parentElement);
        updateStudentCount();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
function updateStudentCount() {
  axios
    .get(
      "https://crudcrud.com/api/ec2e89ea993c45b7ba7edb002cc7194c/studentData"
    )
    .then((result) => {
      const countPara = document.getElementById("studentCount");
      countNum = result.data.length;
      countPara.textContent = countNum;
    })
    .catch((err) => {
      console.log(err);
    });
}
