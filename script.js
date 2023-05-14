const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask () {
  if (inputBox.value === '') {
    alert ("You must write your TASK!!!!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement ("span");
    span.innerHTML = "X";
    li.appendChild(span);
  }
  /*Убирает текст из поля ввода после  ввода текста */
  inputBox.value = "";
  saveData();
}

/*Каждый раз когда мы щелкнули на контейнер идет проверка по ЛИ и удаляет по клику */

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "Li") {
    e.target.classList.toggle ("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  },false);

/*Функция которая сохраняет данные в ЛОКАЛ СТОРАДЖ при закрытии браузера чтоб сохранялся ТУДУ лист */
function saveData() {
   localStorage.setItem("data",listContainer.innerHTML);
  }

function showTask () {
  listContainer.innerHTML = localStorage.getItem("data")
}

showTask();
