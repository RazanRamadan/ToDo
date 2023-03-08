window.addEventListener("load", () => {
    local = JSON.parse(localStorage.getItem("Tasks")) || [];
    // JSON.parse =>> built in function بتاخد السترينغ وترجع قيمتها 
    //console.log(typeof JSON.parse("10"));
    const form = document.querySelector("form");
    task_input = document.querySelector("form input");
    // console.log(task_input);
    form.addEventListener("submit", (e) => {
       e.preventDefault();
 
       //console.log(e.target.elements.task.value);
       const todo = {
          task: e.target.elements.task.value
       }
       if (!e.target.elements.task.value) {
          alert("fill!")
       } else {
          local.push(todo);
          localStorage.setItem("Tasks", JSON.stringify(local));
       }
       e.target.reset();
       displayTasks();
    });
    displayTasks();
 });
 
 function displayTasks() {
    const list_tasks = document.querySelector("#tasks");
    // console.log(list_tasks);
    list_tasks.innerHTML = "";
    console.log("sd");
    local.forEach(todo => {
       list_tasks.innerHTML += `
         <div class="sameline">
         <div>
             <input type="text" value="${todo.task}" readonly/>
         </div>
         <div>
             <div>
                 <button class="edit">Edit</button>
                 <button class="delete">Delete</button>
             </div>
         </div>
     </div>
         `;
    });
    //Edit
    edit_btn = document.querySelectorAll("button.edit")
    console.log("edit_btn");
    console.log(edit_btn);
    edit_input = document.querySelectorAll("#tasks input")
    console.log(edit_input);
    edit_btn.forEach((edt, i) => {
       edt.addEventListener("click", () => {
 
          if (edt.innerText == "Edit") {
             edt.innerText = "Update";
             edit_input[i].removeAttribute("readonly");
          } else {
             edt.innerText == "Edit"
             edit_input[i].setAttribute("readonly", "readonly");
             console.log(local);
             local[i].task = edit_input[i].value;
             localStorage.setItem("Tasks", JSON.stringify(local));
 
 
          }
       })
    })
    delete_button = document.querySelectorAll("button.delete")
    console.log(delete_button);
    delete_button.forEach((del, i) => {
       del.addEventListener("click", () => {
          local.splice(i, 1);
          localStorage.setItem("Tasks", JSON.stringify(local));
          displayTasks();
       })
 
    })
 }