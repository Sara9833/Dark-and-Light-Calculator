const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clear") {
        display.innerText = "";
      } else if (item.id == "backspace") {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } else if (display.innerText != "" && item.id == "equal") {
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error";
        }
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else if (item.id == "^") {
        display.innerText += "**";
      } else if (item.id == "sqrt") {
        try {
          display.innerText = eval(`Math.sqrt(${display.innerText})`);
        } catch (error) {
          display.innerText = "Error";
        }
      } else if (item.id == "%") {
        try {
          display.innerText = eval(display.innerText) / 100;
        } catch (error) {
          display.innerText = "Error";
        }
      } else if (item.id == "factorial") {
        try {
          display.innerText = factorial(eval(display.innerText));
        } catch (error) {
          display.innerText = "Error";
        }
      } else {
        display.innerText += item.id;
      }
    };
  });
  
  // Function to calculate factorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
