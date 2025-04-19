const display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === '0' && value !== '.') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === '') {
    display.value = '0';
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    if (display.value === 'Infinity' || display.value === '-Infinity') {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '(' || key === ')') {
    appendToDisplay(key);
  }
});