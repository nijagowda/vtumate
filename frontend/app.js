// ==================== REGISTER ====================
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const usn = document.getElementById("usn").value.trim();
  const semester = document.getElementById("semester").value;
  const course = document.getElementById("course").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password_confirmation").value;
  const errorBox = document.getElementById("error-message");

  if (!usn || !semester || !course || !password || !confirmPassword) {
    errorBox.innerText = "All fields are required!";
    return;
  }

  if (password.length < 4) {
    errorBox.innerText = "Password must be at least 4 characters long.";
    return;
  }

  if (password !== confirmPassword) {
    errorBox.innerText = "Passwords do not match.";
    return;
  }

  const newUser = { usn, semester, course, password };
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const alreadyExists = users.find((user) => user.usn === usn);
  if (alreadyExists) {
    errorBox.innerText = "User with this USN already exists.";
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! Please login.");
  window.location.href = "login.html";
});

// ==================== LOGIN ====================
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const usn = document.getElementById("usn").value.trim();
  const password = document.getElementById("password").value;
  const errorBox = document.getElementById("error-message");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find((user) => user.usn === usn && user.password === password);

  if (found) {
    localStorage.setItem("userName", usn);
    window.location.href = "dashboard.html";
  } else {
    errorBox.innerText = "Invalid USN or Password.";
  }
});

// ==================== DASHBOARD WELCOME ====================
const userName = localStorage.getItem("userName");
if (userName && document.querySelector(".user-info h2")) {
  document.querySelector(".user-info h2").innerText = `Welcome, ${userName}!`;
}

// ==================== TIMETABLE: Drag-Drop + Save/Load ====================
const cells = document.querySelectorAll(".cell");
const draggableButtons = document.querySelectorAll(".draggable");
const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");

// Enable drag-and-drop for subjects
draggableButtons.forEach((button) => {
  button.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", button.id);
  });
});

// Drop handling
cells.forEach((cell) => {
  cell.addEventListener("dragover", (e) => {
    e.preventDefault();
    cell.classList.add("drag-over");
  });

  cell.addEventListener("dragleave", () => {
    cell.classList.remove("drag-over");
  });

  cell.addEventListener("drop", (e) => {
    e.preventDefault();
    const subjectId = e.dataTransfer.getData("text");
    const subjectText = document.getElementById(subjectId).innerText;
    cell.innerHTML = subjectText;
    cell.classList.remove("drag-over");
  });
});

// Save timetable to localStorage
saveButton?.addEventListener("click", () => {
  const timetableData = {};
  cells.forEach((cell) => {
    if (cell.innerHTML) {
      const day = cell.dataset.day;
      const period = cell.dataset.period;
      timetableData[`${day}-${period}`] = cell.innerHTML;
    }
  });
  localStorage.setItem("timetable", JSON.stringify(timetableData));
  alert("Timetable saved successfully!");
});

// Load timetable from localStorage
loadButton?.addEventListener("click", () => {
  const timetableData = JSON.parse(localStorage.getItem("timetable"));
  if (timetableData) {
    cells.forEach((cell) => {
      const day = cell.dataset.day;
      const period = cell.dataset.period;
      const subject = timetableData[`${day}-${period}`];
      if (subject) {
        cell.innerHTML = subject;
      }
    });
    alert("Timetable loaded successfully!");
  } else {
    alert("No timetable found!");
  }
});

// ==================== Bunk Calculator (Optional) ====================
function calculateRemainingBunks() {
  let bunkableClasses = 0;
  let attendedClasses = 0;

  for (let day in timetable) {
    for (let timeSlot in timetable[day]) {
      bunkableClasses += 1;
      if (timetable[day][timeSlot]) {
        attendedClasses += 1;
      }
    }
  }

  let remainingBunks = bunkableClasses - attendedClasses;
  document.getElementById("remainingBunks").innerText = remainingBunks;
}
