function Add() {
    var value =document.getElementById('inp').value
    var empty=document.createElement('empty');
    // empty.setAttribute('.class')
    var h2 =document.createElement('h2')
    var icon =document.createElement('i')
    icon.setAttribute('class','fa-solid fa-trash-can remove')
 h2.innerHTML=value;
 empty.appendChild(h2)
 empty.appendChild(icon)
 document.getElementById('div').appendChild(empty)

 var remover=document.querySelectorAll('.remove')
   for(var i = 0 ; i < remover.length; i++ ){
       remover[i].onclick =function (){
        this.parentElement.remove()
       }
   }
}