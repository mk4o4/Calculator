document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');
  const operators = ['+', '-', '×', '÷', '%'];

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (button.id === 'theme-toggle') {
        return; // Skip the theme toggle button
      }

      const buttonText = button.textContent;

      if (button.id === 'clear') {
        display.value = '';
      } else if (button.id === 'backspace') {
        display.value = display.value.slice(0, -1);
      } else if (button.id === 'equals') {
        try {
          const result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
          display.value = result;
        } catch {
          display.value = 'Error';
        }
      } else if (button.id === 'parentheses') {
        const openParentheses = (display.value.match(/\(/g) || []).length;
        const closeParentheses = (display.value.match(/\)/g) || []).length;
        if (openParentheses <= closeParentheses) {
          display.value += '(';
        } else {
          display.value += ')';
        }
      } else if (buttonText === '.' && display.value.includes('.')) {
        // Do nothing if '.' is already present in the display
      } else if (operators.includes(buttonText) && display.value !== '') {
        display.value += buttonText;
      } else if (!operators.includes(buttonText)) {
        display.value += buttonText;
      }
    });
  });
});
