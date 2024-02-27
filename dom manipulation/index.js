// Write your code below:
const heading = document.createElement('h3')
const headingText = document.createTextNode( "Buy high quality organic fruits online")
heading.appendChild(headingText)
// heading.style.fontStyle = 'italic'
heading.setAttribute('style' , 'font-style: italic;')
// console.log(heading)
const divs = document.getElementsByTagName('div')
const firstdiv = divs[0]
firstdiv.appendChild(heading)
const para = document.createElement('p')
const paraText = document.createTextNode("Total fruits: 4")
para.appendChild(paraText)
const fruits = document.querySelector('.fruits')
const secondDiv = divs[1]
secondDiv.insertBefore(para , fruits )
para.id = "fruits-total"