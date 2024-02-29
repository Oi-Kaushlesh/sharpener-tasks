// Write your code below:
function savetolocalStorage(event){
   event.preventDefault();
   const nameh = event.target.username.value;
   const emailh = event.target.email.value;
   const phoneh = event.target.phone.value;

   localStorage.setItem('Username' , nameh);  
   localStorage.setItem('Email' , emailh);
   localStorage.setItem('Phone' , phoneh);
}
module.exports = savetolocalStorage;