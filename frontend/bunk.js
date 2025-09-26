// ==================== SAVE ATTENDANCE ====================
document.getElementById("saveAttendance").addEventListener("click", () => {
  const subject = document.getElementById("subjectSelect").value;
  const held = parseInt(document.getElementById("held").value);
  const attended = parseInt(document.getElementById("attended").value);
  const resultBox = document.getElementById("bunkStatus");

  if (!subject || isNaN(held) || isNaN(attended)) {
    resultBox.innerText = "Please fill all fields.";
    return;
  }

  if (attended > held) {
    resultBox.innerText = "Attended cannot be more than held.";
    return;
  }

  const minRequired = Math.ceil(held * 0.75);
  const bunkable = attended - minRequired;
  const percentage = ((attended / held) * 100).toFixed(2);

  // Save to localStorage
  const attendance = JSON.parse(localStorage.getItem("attendance") || "{}");
  attendance[subject] = { held, attended };
  localStorage.setItem("attendance", JSON.stringify(attendance));

  // Display result
  if (bunkable >= 0) {
    resultBox.innerHTML = `
      ✅ You are safe!<br>
      Attendance: ${percentage}%<br>
      You can bunk <strong>${bunkable}</strong> more class(es).
    `;
  } else {
    resultBox.innerHTML = `
      ⚠️ Below 75%<br>
      Attendance: ${percentage}%<br>
      Attend <strong>${Math.abs(bunkable)}</strong> more class(es) to recover.
    `;
  }

  // ✅ Re-render the summary table immediately
  renderSummaryTable();
});

// ==================== RENDER SUMMARY TABLE ====================
function renderSummaryTable() {
  const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
  const tbody = document.querySelector("#summaryTable tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  Object.entries(attendance).forEach(([subject, { held, attended }]) => {
    const percentage = ((attended / held) * 100).toFixed(1);
    const safeToBunk = attended >= Math.ceil(held * 0.75);
    const maxAllowed = Math.floor(attended / 0.75);
    const canBunk = Math.max(0, maxAllowed - held);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${subject}</td>
      <td>${held}</td>
      <td>${attended}</td>
      <td>${percentage}%</td>
      <td style="color: ${safeToBunk ? 'green' : 'red'}">${safeToBunk ? '✅ Yes' : '❌ No'}</td>
      <td>${canBunk}</td>
    `;

    tbody.appendChild(tr);
  });
}

// ==================== RESET ATTENDANCE ====================
document.getElementById("resetAttendance").addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all attendance data?")) {
    localStorage.removeItem("attendance");

    // Clear form inputs
    document.getElementById("subjectSelect").selectedIndex = 0;
    document.getElementById("held").value = "";
    document.getElementById("attended").value = "";

    document.getElementById("bunkStatus").innerText = "No data";

    renderSummaryTable();

    alert("Attendance data has been reset.");
  }
});

// ==================== INITIAL LOAD ====================
window.addEventListener("DOMContentLoaded", () => {
  renderSummaryTable();
});
document.getElementById("logForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subject = document.getElementById("logSubject").value;
  const date = document.getElementById("logDate").value;
  const status = document.querySelector('input[name="status"]:checked')?.value;

  if (!subject || !date || !status) return;

  // Save to logs
  const logs = JSON.parse(localStorage.getItem("weeklyLogs") || "[]");
  logs.push({ subject, date, status });
  localStorage.setItem("weeklyLogs", JSON.stringify(logs));

  // Update attendance counters
  const attendance = JSON.parse(localStorage.getItem("attendance") || "{}");
  if (!attendance[subject]) attendance[subject] = { held: 0, attended: 0 };

  attendance[subject].held += 1;
  if (status === "attended") attendance[subject].attended += 1;

  localStorage.setItem("attendance", JSON.stringify(attendance));

  // Update UI
  renderSummaryTable();
  renderLogTable();
  alert("Attendance logged.");
  document.getElementById("logForm").reset();
});

// Render weekly log history table
function renderLogTable() {
  const logs = JSON.parse(localStorage.getItem("weeklyLogs") || "[]");
  const tbody = document.querySelector("#logTable tbody");
  tbody.innerHTML = "";

  logs.slice().reverse().forEach(log => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${log.date}</td>
      <td>${log.subject}</td>
      <td>${log.status === "attended" ? "✅ Attended" : "❌ Missed"}</td>
    `;
    tbody.appendChild(tr);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderLogTable();
});
document.getElementById("clearLogs")?.addEventListener("click", () => {
  if (confirm("Clear all weekly logs?")) {
    localStorage.removeItem("weeklyLogs");
    renderLogTable();
    alert("Logs cleared.");
  }
});


