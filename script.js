let input = document.getElementById("data-input");
let button = document.getElementById("add-button");
let ul = document.getElementById("data-list");

button.addEventListener('click', function(event) {
  if (!input.value.trim()) {
    return alert("Todo can't be empty!");
  }
  event.preventDefault();

  var li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";

  li.onclick = function() {
    li.classList.toggle('completed');
  };

  var deleteButton = document.createElement('button');
  var deleteImg = document.createElement('img');
  deleteImg.src = './Images/delete (1).png'; 
  deleteImg.alt = 'Delete';
  deleteImg.style.width = '20px'; 
  deleteImg.style.height = '20px';
  deleteButton.appendChild(deleteImg);
  li.appendChild(deleteButton);

  deleteButton.onclick = () => {
    li.remove();
  };
});


let themeToggleBtn = document.getElementById('theme-toggle-btn');
let body = document.body;
var img = document.getElementById('btn-img');
var mainContainer = document.getElementById('main-div');

body.style.transition = 'background-image 0.5s ease';
themeToggleBtn.addEventListener('click', function() {
  if (body.style.backgroundImage === 'url("./Images/b4.jpg")') {
    body.style.backgroundImage = 'url("./Images/b2.jpg")';
    themeToggleBtn.textContent = '🌞';
    mainContainer.style.backgroundColor = 'rgba(240, 248, 255, 0.543)';
  } else {
    body.style.backgroundImage = 'url("./Images/b4.jpg")';
    themeToggleBtn.textContent = '🌙';
   mainContainer.style.backgroundColor ="rgba(0, 0, 0, 0.326)"
  }
});
