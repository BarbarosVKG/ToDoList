let AddButtonToDo=document.getElementById('container__boton');
let inputField=document.getElementById('container__texto');
let toDoContainer=document.getElementById('ToDoContainer');

AddButtonToDo.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add("Stylo");
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";

    });

    paragraph.addEventListener('dblclick',function(){
        paragraph.parentNode.removeChild(paragraph);
    })
});