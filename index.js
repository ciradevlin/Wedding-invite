//HTML 
//inputs 
// <button> for the selections <input type="radio">
// <div> for the right-hand side 

//CSS 
//CSS grid 
// - 2 column grid left is form and right is invite 
//make different classes for each type 

//j.s 
// 1. form 
//event listener for typing 

//2. styling (toggling between styles)
// onClick on button etc change styles for invitation 


const bridesFirst = document.getElementById('inputOne')
// <input>
bridesFirst.addEventListener('keydown', function(event) { 
 //display inputOne text in #example
 const invatation = document.querySelector('#bridefn') 
// invatation.innerText = bridesFirst.value
 invatation.innerHTML = '<p class="tag">' + bridesFirst.value + '</p>'
});

const groomsfirst = document.getElementById('inputtwo')

groomsfirst.addEventListener('keydown', function(event) {
  const groomsName = document.querySelector('#groomfn')
  groomsName.innerHTML = '<p>' + groomsfirst.value+ '</p>'


});