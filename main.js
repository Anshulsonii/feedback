let form = document.querySelector("form");
let select = document.querySelector("select");
let ul = document.querySelector("ul");
let textarea = document.querySelector("textarea");


const saveFeedback = (e) => {
    e.preventDefault();

let li = document.createElement("li");
li.className = "list-group-item rounded-0 shadow-sm";

let h1 = document.createElement("h1");
h1.className = "display-3";
h1.innerText = "Rating : " + select.value;

let h2 = document.createElement("h2");
h2.className = "display-4";
h2.innerText = "Review : " + textarea.value;


let delBtn = document.createElement("button");
delBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
delBtn.innerText = "Delete";

li.appendChild(h1);
li.appendChild(h2);
li.appendChild(delBtn);

ul.appendChild(li);

form.reset();

};
form.addEventListener("submit", saveFeedback);









