let stack = [];

function pushElement() {
    let input = document.getElementById("stackInput").value;
    if (input === "") return;

    stack.push(input);
    updateStack();
    document.getElementById("stackInput").value = "";
}

function popElement() {
    if (stack.length === 0) return;
    stack.pop();
    updateStack();
}

function resetStack() {
    stack = [];
    updateStack();
}

function updateStack() {
    let stackContainer = document.getElementById("stack");
    stackContainer.innerHTML = "";

    stack.forEach((value) => {
        let div = document.createElement("div");
        div.classList.add("stack-element");
        div.textContent = value;
        stackContainer.appendChild(div);
    });
}
