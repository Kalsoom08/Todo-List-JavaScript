let input = document.getElementById("data-input");
let button =  document.getElementById("add-button");
let ul = document.getElementById("data-list");


button.addEventListener('click', function(event) {
  if (!input.value.trim()) {
    return alert("Todo can't be empty!")
}
  event.preventDefault(); 
  var li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
  
li.onclick = function () {
    li.classList.toggle('completed');
  };

  var deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete";
  li.appendChild(deleteButton);

  deleteButton.onclick = ()=>{
li.remove();
  }

});


