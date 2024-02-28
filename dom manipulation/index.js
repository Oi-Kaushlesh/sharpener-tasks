// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
// const btn = document.createElement('button')
const btnText = "Edit"
// btn.appendChild(btnText);
// btn.className = 'edit-btn'
// console.log(btn)
const addbtn = document.querySelectorAll('.fruit')
for(let i = 0 ; i<addbtn.length ; i++){
    const editBtn = document.createElement('button'); 
    editBtn.textContent = btnText;
    editBtn.className = 'edit-btn';
    addbtn[i].appendChild(editBtn);
    // addbtn[i].appendChild(btn)
}
form.addEventListener('submit',function(event){
        event.preventDefault();
        const fruittoadd = document.getElementById('fruit-to-add')
        const newli = document.createElement('li')
        newli.innerHTML = fruittoadd.value + '<button class="delete-btn">x</button>'+ '<button class="edit-btn">Edit</button>'
        // const liText = document.createTextNode(fruittoadd.value)
        // newli.appendChild(liText)
        // newli.className = "fruit"
        // const btn = document.createElement('button')
        // const btnText = document.createTextNode('x')
        // btn.appendChild(btnText)
        // btn.className='delete-btn'
        // newli.appendChild(btn)
        fruits.appendChild(newli)
    }
)
fruits.addEventListener('click' , function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruittodelete = event.target.parentElement
        fruits.removeChild(fruittodelete)
    }
})
