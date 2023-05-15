const form = document.querySelector('.todo-input-items');
const btn = document.querySelector('.popup-button');
const goalbtn = document.querySelector('.goal-check-button');
let isChanged = false;

const displayForm = () => {
  form.style.display === 'block'
    ? (form.style.display = 'none')
    : (form.style.display = 'block');
};

const init = () => {
  form.addEventListener('submit', addTodoItem);
  btn.addEventListener('click', displayForm);
  btn.addEventListener('click', changeBackground);
};

form.addEventListener('submit', add_task);
// goalbtn.addEventListener('click', changeGoalCheck);
// goalbtn.addEventListener('click', percent_goal);

function changeBackground() {
  if (!isChanged) {
    btn.style.backgroundImage = 'url(./img/Variant3.png)';
    isChanged = true;
  } else {
    btn.style.backgroundImage = 'url(./img/Variant2.png)';
    isChanged = false;
  }
}

const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector('.todo-input').value;
  if (todoContent) printTodoItem(todoContent);
};

const printTodoItem = (text) => {
  const todoItem = document.createElement('li');
  const todoText = document.createElement('span');
  const todoDel = document.createElement('button');
  const todoLabel = document.createElement('label');
  const todoInput = document.createElement('input');
  todoInput.setAttribute('type', 'checkbox');
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo-check-button';

  todoText.innerText = text;
  todoText.className = 'todo-item-text';
  todoDiv.addEventListener('click', toggleTodoToDone);

  todoDel.className = 'todo-delete-button';
  todoDel.addEventListener('click', deleteTodoItem);
  todoDel.addEventListener('click', del_task);

  todoItem.className = 'todo-list-item';
  todoLabel.appendChild(todoInput);
  todoLabel.appendChild(todoDiv);
  todoItem.appendChild(todoLabel);
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
  const target2 = e.target.parentNode.parentNode;
  const target3 = e.target.parentNode.nextSibling;
  document.querySelector('.todo-list').removeChild(target2);
  printDoneItem(target3.innerText);
};

const printDoneItem = (text) => {
  const doneItem = document.createElement('li');
  const doneText = document.createElement('span');
  const doneDel = document.createElement('button');
  const doneLabel = document.createElement('label');
  const doneInput = document.createElement('input');
  doneInput.setAttribute('type', 'checkbox');
  doneInput.checked = true;
  const doneDiv = document.createElement('div');
  doneDiv.className = 'done-check-button';

  doneText.innerText = text;
  doneText.className = 'done-item-text';
  doneDiv.addEventListener('click', toggleDoneTodo);

  doneDel.className = 'done-delete-button';
  doneDel.addEventListener('click', deleteDoneItem);
  doneDel.addEventListener('click', del_task);

  doneItem.className = 'done-list-item';
  doneLabel.appendChild(doneInput);
  doneLabel.appendChild(doneDiv);
  doneItem.appendChild(doneLabel);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);
  document.querySelector('.done-list').appendChild(doneItem);
};

const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector('.done-list').removeChild(target);
};

const toggleDoneTodo = (e) => {
  const target2 = e.target.parentNode.parentNode;
  const target3 = e.target.parentNode.nextSibling;
  document.querySelector('.done-list').removeChild(target2);
  printTodoItem(target3.innerText);
};

var taskCount = 0;

const taskNum = document.querySelector('.taskNum');
taskNum.innerText = taskCount + ' task';

// function changeGoalCheck() {
//   if (document.getElementById('goal-check').checked) {
//     del_goal();
//   } else {
//     add_goal();
//   }
// }

function add_task() {
  taskCount += 1;
  taskNum.innerText = taskCount + ' task';
}

function del_task() {
  taskCount -= 1;
  taskNum.innerText = taskCount + ' task';
}

// var goalCount = 0;
// var goalPercent = 0;

// const goalNum = document.querySelector('.goalNum');
// goalNum.innerText = goalCount;
// const goalPer = document.querySelector('.goalPer');
// goalPer.innerText = goalPercent;

// function add_goal() {
//   goalCount += 1;
//   goalNum.innerText = goalCount;
// }

// function del_goal() {
//   goalCount -= 1;
//   goalNum.innerText = goalCount;
// }

// function percent_goal() {
//   goalPercent = (goalCount / 5) * 100;
//   goalPer.innerText = goalPercent;
// }

const goals = [
  {
    name: '물 1L 마시기 💧',
    achieved: false,
    count: 0,
    percent: 0,
  },
  {
    name: '10,000보 이상 걷기 🏃‍♀️',
    achieved: false,
    count: 0,
    percent: 0,
  },
  {
    name: '오전 7시 기상 ⏰',
    achieved: false,
    count: 0,
    percent: 0,
  },
];

const goalList = document.getElementById('goalList');

function updateGoals() {
  goalList.innerHTML = '';
  goals.forEach((goal, index) => {
    const goalLi = document.createElement('li');
    const goalCheckbox = document.createElement('input');
    goalCheckbox.type = 'checkbox';
    goalCheckbox.id = `goal${index + 1}`;
    goalCheckbox.checked = goal.achieved;

    const goalLabel = document.createElement('label');
    const goalDiv = document.createElement('div');
    goalDiv.className = 'goal-check-button';

    goalCheckbox.addEventListener('change', () => {
      if (goalCheckbox.checked) {
        goal.achieved = true;
        goal.count += 1;
        countSpan.innerText = goal.count;
        goal.percent = goal.count / 5;
        percentSpan.innerText = goal.percent * 100;
      } else {
        goal.achieved = false;
        goal.count -= 1;
        countSpan.innerText = goal.count;
        goal.percent = goal.count / 5;
        percentSpan.innerText = goal.percent * 100;
      }
    });

    const goalsBoxContainer = document.createElement('div');
    goalsBoxContainer.className = 'goals-box-container';

    const goalTitle = document.createElement('div');
    goalTitle.className = 'goal-title';

    const goalsMonth = document.createElement('div');
    goalsMonth.className = 'goals-month';

    const goalsCheckCount = document.createElement('div');
    goalsCheckCount.className = 'goal-check';
    const goalsAchievement1 = document.createElement('span');
    goalsAchievement1.className = 'goals-achievement 1';
    goalsAchievement1.innerText = '이번 달 달성 횟수';

    const goalCheckPercent = document.createElement('div');
    goalCheckPercent.className = 'goal-check';
    const goalsAchievement2 = document.createElement('span');
    goalsAchievement2.className = 'goals-achievement 2';
    goalsAchievement2.innerText = '목표 달성률';

    const span = document.createElement('span');
    span.innerText = goal.name;
    span.className = 'goal-list-title';
    const goalsDivNumber1 = document.createElement('div');
    const goalsDivNumber2 = document.createElement('div');
    goalsDivNumber1.className = 'goalsDivNumber';
    goalsDivNumber2.className = 'goalsDivNumber';
    const countSpan = document.createElement('span');
    countSpan.className = 'count';
    countSpan.innerText = goal.count;
    const percentSpan = document.createElement('span');
    percentSpan.className = 'count';
    percentSpan.innerText = goal.percent;
    const goalsNumber1 = document.createElement('span');
    const goalsNumber2 = document.createElement('span');
    goalsNumber1.className = 'goals-number';
    goalsNumber2.className = 'goals-number';
    goalsNumber1.innerText = '회';
    goalsNumber2.innerText = '%';

    goalLabel.appendChild(goalCheckbox);
    goalLabel.appendChild(goalDiv);
    goalTitle.appendChild(goalLabel);
    goalTitle.appendChild(span);

    goalsDivNumber1.appendChild(countSpan);
    goalsDivNumber1.appendChild(goalsNumber1);
    goalsCheckCount.appendChild(goalsAchievement1);
    goalsCheckCount.appendChild(goalsDivNumber1);
    goalsDivNumber2.appendChild(percentSpan);
    goalsDivNumber2.appendChild(goalsNumber2);
    goalCheckPercent.appendChild(goalsAchievement2);
    goalCheckPercent.appendChild(goalsDivNumber2);

    goalsMonth.appendChild(goalsCheckCount);
    goalsMonth.appendChild(goalCheckPercent);
    goalsBoxContainer.appendChild(goalTitle);
    goalsBoxContainer.appendChild(goalsMonth);
    goalLi.appendChild(goalsBoxContainer);

    goalList.appendChild(goalLi);
  });

  const goalAddBoxContainer = document.createElement('div');
  goalAddBoxContainer.className = 'goals-box-container';
  const goalAddBox = document.createElement('div');
  goalAddBox.className = 'goals-add-container';
  const goalAddBoxImg = document.createElement('img');
  goalAddBoxImg.id = 'goals-add';
  goalAddBoxImg.src = './img/Default.png';

  goalAddBox.appendChild(goalAddBoxImg);
  goalAddBoxContainer.appendChild(goalAddBox);

  goalList.appendChild(goalAddBoxContainer);
}

updateGoals();

init();
