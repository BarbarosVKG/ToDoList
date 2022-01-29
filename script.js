let AddButtonToDo=document.getElementById('container__boton');
let inputField=document.getElementById('container__texto');
let toDoContainer=document.getElementById('ToDoContainer');

AddButtonToDo.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);

});