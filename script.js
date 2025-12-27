// Kanban Board Script

// COLUMN SELECTORS
const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const columns = [todo, progress, done];
// ================================

// MODAL
const toggleModal = document.querySelector("#toggle-modal");
const modalBg = document.querySelector(".modal .bg");
const modal = document.querySelector(".modal");
const addTaskBtn = document.querySelector("#add-new-task");
// ================================

// DRAG STATE
let dragTask = null;
// ================================

// STORAGE HELPERS
function saveTasksToStorage() {
	const data = {};

	columns.forEach((col) => {
		data[col.id] = Array.from(col.querySelectorAll(".task")).map((task) => ({
			title: task.querySelector("h2").textContent,
			description: task.querySelector("p").textContent,
		}));
	});

	localStorage.setItem("tasksData", JSON.stringify(data));
}

function updateCounts() {
	columns.forEach((col) => {
		const countDiv = col.querySelector(".right");
		countDiv.textContent = col.querySelectorAll(".task").length;
	});
}
// ================================

// TASK CREATOR
function createTask(title, description) {
	const taskDiv = document.createElement("div");
	taskDiv.className = "task";
	taskDiv.draggable = true;

	const h2 = document.createElement("h2");
	h2.textContent = title;

	const p = document.createElement("p");
	p.textContent = description;

	const btn = document.createElement("button");
	btn.textContent = "Delete";

	btn.addEventListener("click", () => {
		taskDiv.remove();
		saveTasksToStorage();
		updateCounts();
	});

	taskDiv.append(h2, p, btn);
	makeTaskDraggable(taskDiv);

	return taskDiv;
}
// ================================

// DRAG LOGIC
function makeTaskDraggable(task) {
	task.addEventListener("dragstart", () => {
		dragTask = task;
	});
	task.addEventListener("dragend", () => {
		dragTask = null;
	});
}
// ================================

// DROP LOGIC
function dragAndDropHandler(col) {
	col.addEventListener("dragover", (e) => e.preventDefault());

	col.addEventListener("drop", () => {
		if (!dragTask) return;
		col.appendChild(dragTask);
		saveTasksToStorage();
		updateCounts();
	});
}

columns.forEach(dragAndDropHandler);
// ================================

// LOAD FROM LOCAL STORAGE
const stored = JSON.parse(localStorage.getItem("tasksData"));
if (stored) {
	for (const colId in stored) {
		const col = document.querySelector(`#${colId}`);
		stored[colId].forEach((task) => {
			col.appendChild(createTask(task.title, task.description));
		});
	}
	updateCounts();
}
// ================================

// ADD NEW TASK
addTaskBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const title = document.querySelector("#task-input").value.trim();
	const desc = document.querySelector("#task-desc").value.trim();

	if (!title || !desc) {
		alert("Task Title and Description cannot be empty!");
		return;
	}

	const task = createTask(title, desc);
	todo.appendChild(task);

	saveTasksToStorage();
	updateCounts();

	document.querySelector("#task-input").value = "";
	document.querySelector("#task-desc").value = "";
	modal.classList.remove("active");
});
// ================================

// MODAL TOGGLE
toggleModal.addEventListener("click", () => modal.classList.add("active"));
modalBg.addEventListener("click", () => modal.classList.remove("active"));
// ================================
