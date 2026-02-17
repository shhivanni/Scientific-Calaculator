let historyList = document.getElementById("historyList");

function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        addToHistory(expression + " = " + result);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function sqrt() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.sqrt(value);
    addToHistory("√" + value + " = " + result);
    document.getElementById("display").value = result;
}

function sin() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.sin(value);
    addToHistory("sin(" + value + ") = " + result);
    document.getElementById("display").value = result;
}

function cos() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.cos(value);
    addToHistory("cos(" + value + ") = " + result);
    document.getElementById("display").value = result;
}

function tan() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.tan(value);
    addToHistory("tan(" + value + ") = " + result);
    document.getElementById("display").value = result;
}

function log() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.log10(value);
    addToHistory("log(" + value + ") = " + result);
    document.getElementById("display").value = result;
}

function ln() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.log(value);
    addToHistory("ln(" + value + ") = " + result);
    document.getElementById("display").value = result;
}

function addToHistory(text) {
    let li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}
// keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // numbers
    if (!isNaN(key)) {
        append(key);
    }

    // operators
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        append(key);
    }

    // decimal
    else if (key === ".") {
        append(".");
    }

    // enter = calculate
    else if (key === "Enter") {
        event.preventDefault();  // prevent form submit
        calculate();
    }

    // backspace
    else if (key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }

    // escape = clear
    else if (key === "Escape") {
        clearDisplay();
    }
else if (key === "s") {
    sin();
}
else if (key === "c") {
    cos();
}
else if (key === "t") {
    tan();
}
else if (key === "l") {
    log();
}
else if (key === "n") {
    ln();
}
else if (key === "r") {
    sqrt();
}


});
function openInstructions() {
    const modal = document.getElementById("instructionModal");
    modal.style.display = "flex";
}

function closeInstructions() {
    const modal = document.getElementById("instructionModal");
    modal.style.display = "none";
}

// close when clicking outside modal
window.onclick = function(event) {
    const modal = document.getElementById("instructionModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
let historyOpened = false;   // flag

function addToHistory(text) {

    // show history only once
    if (!historyOpened) {
        document.querySelector(".history").style.display = "block";
        historyOpened = true;
    }

    let li = document.createElement("li");
    li.textContent = text;
    historyList.prepend(li);
}

function clearHistory() {
    historyList.innerHTML = "";
}
deleteBtn.onclick = function(e) {
    e.stopPropagation();

    if (confirm("Are you sure you want to delete this entry?")) {
        li.remove();
    }
};

let itemToDelete = null;
deleteBtn.onclick = function(e) {
    e.stopPropagation();
    itemToDelete = li;
    document.getElementById("deleteModal").style.display = "flex";
};
function confirmDelete() {
    if (itemToDelete) {
        itemToDelete.remove();
        itemToDelete = null;
    }
    closeDeleteModal();
}

function closeDeleteModal() {
    document.getElementById("deleteModal").style.display = "none";
}

function checkHistoryVisibility() {
    const historyBox = document.querySelector(".history");
    const historyItems = document.querySelectorAll("#historyList li");

    if (historyItems.length === 0) {
        historyBox.style.display = "none";
        historyOpened = false;   // reset flag
    }
}
function confirmDelete() {
    if (itemToDelete) {
        itemToDelete.remove();
        itemToDelete = null;
    }

    closeDeleteModal();
    checkHistoryVisibility();  
}
function clearHistory() {
    historyList.innerHTML = "";
    checkHistoryVisibility();  
}
