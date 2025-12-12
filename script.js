const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            display.innerText = '0';
            return;
        }

        if (value === '=') {
            try {
                let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                display.innerText = parseFloat(result.toFixed(8)).toString();
            } catch {
                display.innerText = 'Error';
            }
            return;
        }

        if (value === '√') {
            try {
                let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                let final = Math.sqrt(result);
                display.innerText = parseFloat(final.toFixed(8)).toString();
            } catch {
                display.innerText = 'Error';
            }
            return;
        }

        if (value === '%') {
             try {
                let expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression) / 100;
                display.innerText = parseFloat(result.toFixed(8)).toString();
             } catch {
                 display.innerText = 'Error';
             }
             return;
        }

        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            if (display.innerText.length < 10) {
                display.innerText += value;
            }
        }
    });
});