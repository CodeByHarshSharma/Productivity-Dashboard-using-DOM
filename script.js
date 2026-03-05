function openFeatures() {
    let allElems = document.querySelectorAll(".elem")
    let allFullElems = document.querySelectorAll(".fullElem")
    let allFullElemsBackBtn = document.querySelectorAll(".fullElem .back")

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            allFullElems[elem.id].style.display = 'block'
        })
    })

    allFullElemsBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            allFullElems[back.id].style.display = 'none'
        })
    })
}

openFeatures();

var currentTask = [];

if (localStorage.getItem('currentTask')) {
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
}
else {
    console.error("Task list is empty")
}

function renderTask() {
    let allTask = document.querySelector(".allTask");

    let sum = ''
    currentTask.forEach(function (elem) {
        sum = sum + `<div class="Task">
                      <h5>${elem.task}<span class=${elem.imp}>imp</span></h5>
                      <button>Mark as Completed</button>
                     </div>`
    })

    allTask.innerHTML = sum
}

renderTask();

let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form #task-input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheck = document.querySelector(".addTask form #check");


form.addEventListener('submit', function (dets) {
    dets.preventDefault()
    currentTask.push(
        {
            task: taskInput.value,
            details: taskDetailsInput.value,
            check: taskCheck.checked
        }
    )
    localStorage.setItem('currentTask', JSON.stringify(currentTask))
    taskInput.value = ""
    taskDetailsInput.value = ""
    taskCheck.checked = false
    renderTask();
})

