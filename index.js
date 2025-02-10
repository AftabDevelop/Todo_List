const input = document.getElementById("input-box");
const list = document.querySelector(".todo-list");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("You Must write something!!!");
    } else {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = input.value;
        list.appendChild(li);

        const btn1 = document.createElement("button");
        btn1.className = "todo-item button";
        btn1.innerHTML = "Delete";
        li.appendChild(btn1);

        btn1.addEventListener("click", () => {
            li.remove();
        });
    }
    input.value = "";
});

// Fix: Use event delegation to apply line-through on clicked <li>
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration =
            event.target.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    }
});
