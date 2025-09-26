const physicsCycleSubjects = [
    { code: "BMATE101", name: "Mathematics", credits: 4 },
    { code: "BPHYE102", name: "Applied Physics ", credits: 4 },
    { code: "BBEE103", name: " Basic Electronics", credits: 3 },
    { code: "BESCK104", name: "Engineering Science Course", credits: 3 },
    { code: "BETCK105", name: "Emerging Technology Course", credits: 3},
    { code: "BPLCK105", name: "Programming Language Course", credits: 3 },
    { code: "BPWSK106", name: "Professional Writing Skills in English", credits: 1 },
    { code: "BICOK107", name: "Indian Constitution", credits: 1 },
    { code: "BSFHK158", name: "Scientific Foundations of Health", credits: 1 }
];

const chemistryCycleSubjects = [
    { code: "BMATE201", name: "Mathematics", credits: 4 },
    { code: "BCHEE202", name: "Chemistry", credits: 4 },
    { code: "BCEDK203", name: "Computer-Aided Engineering Drawing", credits: 3 },
    { code: "BESCK204", name: "Engineering Science Course", credits: 3 },
    { code: "BETCK205", name: "Emerging Technology Course", credits: 3},
    { code: "BPLCK205", name: "Programming Language Course", credits: 3 },
    { code: "BENGK206", name: "Communicative English", credits: 1 },
    { code: "BKSKK207/BKBKK207", name: "Samskrutika Kannada/ Balake Kannada", credits: 1 },
    { code: "BIDTK258", name: "Innovation and Design Thinking", credits: 1 }
];

const subjectDropdown = document.getElementById("subject");
const cycleDropdown = document.getElementById("cycle");

function populateSubjects(cycle) {
    subjectDropdown.innerHTML = '<option value="" disabled selected>Select Subject</option>';

    const subjects = cycle === "physics" ? physicsCycleSubjects : chemistryCycleSubjects;
    subjects.forEach(subject => {
        const option = document.createElement("option");
        option.value = JSON.stringify(subject);
        option.textContent = `${subject.code} - ${subject.name}`;
        subjectDropdown.appendChild(option);
    });
}

cycleDropdown.addEventListener("change", () => {
    const selectedCycle = cycleDropdown.value;
    populateSubjects(selectedCycle);
});

document.getElementById("cgpaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedSubject = JSON.parse(subjectDropdown.value);
    const marks = parseFloat(document.getElementById("marks").value);

    if (marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    const gradePoints = calculateGradePoints(marks);

    const table = document.getElementById("subjectList");
    const row = table.insertRow();
    row.innerHTML = `
        <td>${selectedSubject.code} - ${selectedSubject.name}</td>
        <td>${selectedSubject.credits}</td>
        <td>${marks}</td>
        <td>${gradePoints}</td>
    `;

    const subjectData = {
        credits: selectedSubject.credits,
        gradePoints
    };

    if (!window.subjects) window.subjects = [];
    window.subjects.push(subjectData);

    subjectDropdown.value = "";
    document.getElementById("marks").value = "";
});

function calculateGradePoints(marks) {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    if (marks >= 40) return 5;
    return 0;
}

document.getElementById("calculateBtn").addEventListener("click", function () {
    if (!window.subjects || window.subjects.length === 0) {
        alert("No subjects added. Please add subjects to calculate CGPA.");
        return;
    }

    let totalCredits = 0;
    let totalPoints = 0;

    window.subjects.forEach(subject => {
        totalCredits += subject.credits;
        totalPoints += subject.credits * subject.gradePoints;
    });

    const cgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("cgpaResult").innerText = cgpa;
});
