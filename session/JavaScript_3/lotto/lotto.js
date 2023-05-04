let numbers = [];

while (numbers.length < 6) {
  let randNum = parseInt(Math.random() * 45 + 1);

  if (numbers.indexOf(randNum) == -1) {
    numbers.push(randNum);
  }
}

console.log(numbers);

for (let i = 0; i < 6; i++) {
  numbers.sort((a, b) => a - b);
  document.getElementById(`ball${i + 1}`).innerHTML = numbers[i];
}
