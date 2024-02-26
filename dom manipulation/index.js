// Write the code as shown in the video below:

// Write answer to the questions asked below:
const mainheading = document.querySelector('#main-heading')
mainheading.style.textAlign = 'right'
const basketheading = document.querySelector('#basket-heading')
basketheading.style.paddingLeft = '30px'
basketheading.style.color ='brown'
const fruits = document.querySelector('.fruits')
fruits.style.background = 'grey';
fruits.style.padding = '30px'
fruits.style.margin = '30px'
fruits.style.listStyleType = 'none'
fruits.style.width = '50%'
fruits.style.borderRadius = '5px'
const fruititem = document.querySelectorAll('.fruit')
for(let i = 0 ; i<fruititem.length ; i++){
  fruititem[i].style.padding = '10px'
  fruititem[i].style.margin = '10px'
  fruititem[i].style.borderRadius = '5px'
}
const oddfruit = document.querySelectorAll('.fruit:nth-child(odd)')
for(let i = 0 ; i<oddfruit.length; i++){
  oddfruit[i].style.background = 'lightgrey'
}
const evenfruit = document.querySelectorAll('.fruit:nth-child(even)')
for(let i = 0 ; i<oddfruit.length ; i++){
  evenfruit[i].style.background = 'brown'
    evenfruit[i].style.color = 'white'

}