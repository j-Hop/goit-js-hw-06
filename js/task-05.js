const el = {
    input: document.getElementById("name-input"),
    output: document.getElementById("name-output"),
  };

  el.input.addEventListener("input", onInput);
  function onInput(event) {
    const value = event.target.value.trim();
    el.output.textContent = value? value : "Anonymous"
  };




//   Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>