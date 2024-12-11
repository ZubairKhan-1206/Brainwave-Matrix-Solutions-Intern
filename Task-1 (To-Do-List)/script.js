const addbtn = document.getElementById("addbtn");
let savedtask = localStorage.getItem("savedtask")
  ? JSON.parse(localStorage.getItem("savedtask"))
  : [];

const showsavedtask = () => {
  if (savedtask.length != 0) {
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = " ";
    savedtask.map((i, index) => {
      //creating elements
      const li = document.createElement("li");
      const div = document.createElement("div");
      const innerdiv = document.createElement("div");

      innerdiv.innerHTML = `<button class=${index}  onclick="deletearrval(${index})">Delete</button> <button class="Checkedbtn"  onclick="checkthe(${index})">Checked</button> `;
      div.classList.add("task");
      li.textContent = `⭐ ${i}`;
      div.appendChild(li);
      div.appendChild(innerdiv);
      tasklist.appendChild(div);
    });
  }
};

showsavedtask();

addbtn.addEventListener("click", () => {
  const taskinput = document.getElementById("taskinput");
  if (taskinput.value == "") {
    alert("!! Plase enter the task !!!");
  } else {
    savedtask.push(taskinput.value);
    taskinput.value = "";
    const arrstring = JSON.stringify(savedtask);
    localStorage.setItem("savedtask", arrstring);
    showsavedtask();
  }
});

const deletearrval = (index) => {
  if (savedtask.length == 1) {
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = " ";
    savedtask.pop();
    const arrstring = JSON.stringify(savedtask);
    localStorage.setItem("savedtask", arrstring);
  } else {
    savedtask.splice(index, 1);
    const arrstring = JSON.stringify(savedtask);
    localStorage.setItem("savedtask", arrstring);
    showsavedtask();
  }
};

const checkthe = (index) => {
  showsavedtask(index);
};
