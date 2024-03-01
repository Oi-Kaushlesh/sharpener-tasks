// Write your code below:
function handleFormSubmit(event){
   event.preventDefault();
   const nameh = event.target.username.value;
   const emailh = event.target.email.value;
   const phoneh = event.target.phone.value;

    let myObj = {
      username : nameh,
      email : emailh , 
      phone : phoneh      
    }
   localStorage.setItem("User Details" , JSON.stringify(myObj));  
   console.log(localStorage)
}
