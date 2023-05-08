const form = document.querySelector('.todo-form');
const btn = document.querySelector('.popup-button');

const displayForm = () => {
  form.style.display === 'none'
    ? (form.style.display = 'block')
    : (form.style.display = 'none');
};

const init = () => {
  form.addEventListener('submit', addTodoItem);
  btn.addEventListener('click', displayForm);
};

const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector('.todo-input').value;
  if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
  const todoItem = document.createElement('li');
  const todoText = document.createElement('span');
  const todoDel = document.createElement('button');

  todoText.innerText = text;
  todoText.className = 'todo-item-text';
  todoText.addEventListener('click', toggleTodoToDone);

  todoDel.innerText = '삭제';
  todoDel.className = 'todo-delete-button';
  todoDel.addEventListener('click', deleteTodoItem);

  todoItem.className = 'todo-list-item';
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector('.todo-list').appendChild(todoItem);

  document.querySelector('.todo-input').value = ''; //입력 초기화
};

const deleteTodoItem = (e) => {
  const target = e.target.parentNode; //event가 일어난 곳에 target -> 삭제버튼. 그거의 부모태그
  document.querySelector('.todo-list').removeChild(target);
};

const toggleTodoToDone = (e) => {
  //todo에 있는 걸 done으로 보내기
  deleteTodoItem(e); //span
  printDoneItem(e.target.innerText);
};

const printDoneItem = (text) => {
  const doneItem = document.createElement('li');
  const doneText = document.createElement('span');
  const doneDel = document.createElement('button');

  doneText.innerText = text;
  doneText.className = 'done-item-text';
  doneText.addEventListener('click', toggleDoneTodo);

  doneDel.innerText = '삭제';
  doneDel.className = 'done-delete-button';
  doneDel.addEventListener('click', deleteDoneItem);

  doneItem.className = 'done-list-item';
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector('.done-list').appendChild(doneItem);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector('.done-list').removeChild(target);
};

const toggleDoneTodo = (e) => {
  //done에 있는 걸 todo로 보내기
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

init(); //시작 함수
