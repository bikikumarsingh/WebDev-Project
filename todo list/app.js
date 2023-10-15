// Tode List Practice 1
const input1 = [];
/*event listner */
document.querySelector(".add-todo-button").addEventListener("click",()=>{
    addTodoList();
})
document.querySelector(".delete-todo-button").addEventListener("click",()=>{
    document.querySelector('.js-todo-list').innerHTML='';
    document.querySelector(".display-status").innerHTML="";
})
function addtode() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;
  input1.push(name);
  inputElement.value = '';
  console.log(input1);
}
// Tode Practice 2
let todoList2 = [];

function printTode() {
  const inputElement = document.querySelector('.js-name-input-2');
  const name = inputElement.value;
  todoList2.push(name);
  inputElement.value = '';
  renderTodoSimple2();
}

function renderTodoSimple2() {
  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    todoListHTML += `<p>${todo}</p>`;
  }
  document.querySelector('.js-print-name').innerHTML = todoListHTML;

}
// Todo List

const todoList=[];
// const todoList = [{
//   name: 'make dinner',
//   date: '2022-12-22'
// }, {
//   name: 'wash dishes',
//   date: '2022-12-22'
// }];


function addTodoList() {

  const inputElement=document.querySelector('.js-name-input-3');
  const inputDateElement=document.querySelector('.js-date-input');
  
  const name = inputElement.value;
  if (name=="") {
    document.querySelector(".display-status").innerHTML="enter something.."
    return;
  }
  document.querySelector(".display-status").innerHTML="";
  const date = inputDateElement.value;
  todoList.push({name,date});
  // todoDate.push(date);
  // todoList.push(name);
  inputElement.value='';
  inputDateElement.value='';
  renderTodoList();
 
}
function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    // const todo = todoList[i];
    // const date = todoDate[i];
    const todoObject = todoList[i];
     
    const html= `
    <div>${todoObject.name} </div>
    <div>${todoObject.date}</div>
    <button onclick="todoList.splice(${i}, 1); renderTodoList();" class="delete-todo-button">Delete</button>
     
  `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
