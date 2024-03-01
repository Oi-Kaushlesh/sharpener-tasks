// Write your code below:
function handleFormSubmit(event){
   event.preventDefault();
   const name = event.target.username.value;
   const email = event.target.email.value;
   const phone = event.target.phone.value;
 
   let detailObj = {
     username : name,
     email : email,
     phone : phone
   }
   localStorage.setItem(email , JSON.stringify(detailObj));
   const list = document.createElement('li')
   const unorderlist = document.getElementById('userlist')

   list.style.fontWeight= 'bold';
   const delBtn = document.createElement('button')
   const delBtnText = document.createTextNode('Delete')
   delBtn.appendChild(delBtnText);
   console.log(delBtn)
   delBtn.className = 'deleteBtn'
   const listText = document.createTextNode(detailObj.username +" - "+ detailObj.email +" - "+ detailObj.phone)
   list.appendChild(listText );
   list.appendChild(delBtn)
   unorderlist.appendChild(list)
   delBtn.onclick = () =>{
         unorderlist.removeChild(list)
         localStorage.removeItem(email)
   }
 }
//  unorderlist.addEventListener('click' , function(event){
//    if (event.target.classList.contains('deleteBtn')) {
//       const listToDelete = event.target.parentElement
//       const emailToDelete = listToDelete.textContent.trim().split(' - ')[1];
//       unorderlist.removeChild(listToDelete)
//       localStorage.removeItem(emailToDelete)
//    }
//  })
//  module.exports = handleFormSubmit;