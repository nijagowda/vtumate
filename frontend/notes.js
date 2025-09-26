// Unified subject + module structure
const subjects = [
  {
    subject: "Mathematics-1",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1c1rOb4a-PWksxTpkqEynBKsktF-OFIJJ/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1N12FrYNB4IWdR4RUOwMyR5Vg88veA4nI/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1e6yJVQOhWuFJoA4_LkTU9xw0ECe1ujrS/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1QZ9BMISGH1Qi5iOhhJerAFivBIeQldzk/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1l2oCDeeu0T69oFXwNJP5Scdmxkh0PQrN/view?usp=drive_link" },
    ]
  },
  {
    subject: "Mathematics-2",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1wt723IZRjUJ5NZuxwUh_coq1TUZ0TMl0/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1Z3L4lP7KMGIyC0S8eokFRctFv_3YR1Wv/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1K73dNlG_jm3El4g1cTZ6syuX6QjsoVba/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1HTHfKa4xxDYrs0BAYtYsKjNXS4Pm3cP7/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1uGjfZ16l-OIpZ7sQd7lDms7a8MJRpz9q/view?usp=drive_link" },
    ]
  },
  {
    subject: "Chemistry",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1rvkJG7G26QUnnQ4ODwXsI5c-unhXWAcz/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1G-ARk6NoPMR7rLy9xhaVFEhFv63dX8JX/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1O__Xq39uErfJ_TIAgkuW1OIE5iA1_FcI/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1dLk2wQRanhmxXq-pzS9P6xIhUAcgxqdh/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1TNDll38hUbrNywTTRInOU_TyXthtrzTI/view?usp=drive_link" },
    ]
  },
  {
    subject: "Applied Physics",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1vwEO1QIh36JOFmvvS0XjavDDltJUNUzh/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/10KJERCXeGZqJuqB2uk2Wb0nFeBo1ug5-/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1zjMwTpcq2ay66ZcGv5rmSeVPsh_f0ivp/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1s_ePLVyB7TVaBaSnWrChkDOiGxrVXqdH/view?usp=drive_link" },
    ]
  },
  {
    subject: "Basic Electronics",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1L_XHJ-dOgGk1XOLNzA1jCZVy8m1lM-Q0/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1L_rsewPwn51zyETcg_eDY3au7QxVLt5b/view?usp=sharing" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1L_xpdPrGLlP1JoVBnPM8ISTVXyvcwlZk/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1LeTRrpmF89GkUj4FmwYUNnpothlvoe_i/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1LiTTFE6kq5Nb59yAgKJfAZxqddaMfB_m/view?usp=drive_link" },
    ]
  },
  {
    subject: "Introduction to C++ Programming",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1Is_fnSpIcjGl3IGw8EY0xj6bnPmiIHUy/view?usp=drive_link" },
    ]
  },
  {
    subject: "Introduction to Python Programming",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1LrhCm5LRUj_nYhPVFFAWInJ5RGy8IeCP/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1Ltmd0DuA4F_zKWLw2zyd_l0eKAeGslp5/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1LwbNP6onXZyW6LqDyRmnvCh07eTl-2d5/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1LwgTqeBxVjceK-9wRKOhrVKHk9SNaSQb/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1LyF85p0XgSOEl0CsTm7WXT9AaqxImQLm/view?usp=drive_link" },
    ]
  },
  {
    subject: "Introduction to Mechanical Engineering",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1Mevt2hNfynPPu2z9r9CyEEYAXvinu5kJ/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1Mf9Pl8FGOmaZtAjoi6JT3cNs9PalUx0e/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1MgoXkI0Iu7VUuV58ZdQlb3U2bycXHDwH/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1MietWrj9JC29_VV81Y7cHWiTERhDR47f/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1MnMKhAwyG_4CnlMae13T12YauM-H-BdZ/view?usp=drive_link" },
    ]
  },
  {
    subject: "Renewable Energy Sources",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1KPV72dhLIuVbk7XkTYVfPxZ9mcTfGtnt/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1kSqk4abY1Ga3w9axOiCkcPIEN82BO12e/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1vNYhcXM5nS2-rSSB_zzbI6z5kdb3PFMb/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1NROtYJ9S2_qNTF5D12aaaIt4H2cP2yAV/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1yJ6mn6BiufLwWppuGUv72Fk4uDR6yoHc/view?usp=drive_link" },
    ]
  },
  {
    subject: "Communicative English",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1NR7AOJdJhO1Ls_fJ_u4byOZ3G-F2UwVn/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1NR7AOJdJhO1Ls_fJ_u4byOZ3G-F2UwVn/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1NR7AOJdJhO1Ls_fJ_u4byOZ3G-F2UwVn/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1NR7AOJdJhO1Ls_fJ_u4byOZ3G-F2UwVn/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1NR7AOJdJhO1Ls_fJ_u4byOZ3G-F2UwVn/view?usp=drive_link" },
    ]
  },
  {
    subject: "Professional Writing Skills in English",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1GTl4kSS-wQ5wOicm31EINPLE0qsOqTlR/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1GTl4kSS-wQ5wOicm31EINPLE0qsOqTlR/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1GTl4kSS-wQ5wOicm31EINPLE0qsOqTlR/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1GTl4kSS-wQ5wOicm31EINPLE0qsOqTlR/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1GTl4kSS-wQ5wOicm31EINPLE0qsOqTlR/view?usp=drive_link" }
    ]
  },
  {
    subject: "Samskrutika Kannada",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/yourfilelink1" },
      { module: "Module 2", link: "https://drive.google.com/yourfilelink2" },
      { module: "Module 3", link: "https://drive.google.com/yourfilelink3" },
      { module: "Module 4", link: "https://drive.google.com/yourfilelink4" },
      { module: "Module 5", link: "https://drive.google.com/yourfilelink5" },
    ]
  },
  {
    subject: "Indian Constitution",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1NBQToQOco8-vsNMMEY7feNbvDp6mJ-Pg/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1ND_jdobk11rt9jNz3B8UGfyV9SOOvAR8/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1NKPagcNJJpA3VtDfhggi5Ya_Dr4TRNJb/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1NKl6x4_V4IuVxyavCnxJxWjCgjy364bw/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1NPIRu8bBT1w1YsmxhDUUNC86ZB1fAYem/view?usp=drive_link" },
    ]
  },
  {
    subject: "Innovation and Design Thinking ",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1ft1OkR4DjjoJyiyj4CrvVnrkSl-JDmMq/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1ft1OkR4DjjoJyiyj4CrvVnrkSl-JDmMq/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1ft1OkR4DjjoJyiyj4CrvVnrkSl-JDmMq/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1ft1OkR4DjjoJyiyj4CrvVnrkSl-JDmMq/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1ft1OkR4DjjoJyiyj4CrvVnrkSl-JDmMq/view?usp=drive_link" },
    ]
  },
  {
    subject: "Scientific Foundations of Health ",
    modules: [
      { module: "Module 1", link: "https://drive.google.com/file/d/1Nf_sIOiRrTR6yRcaCpiVZkaAx427yCwq/view?usp=drive_link" },
      { module: "Module 2", link: "https://drive.google.com/file/d/1Nf_sIOiRrTR6yRcaCpiVZkaAx427yCwq/view?usp=drive_link" },
      { module: "Module 3", link: "https://drive.google.com/file/d/1Nf_sIOiRrTR6yRcaCpiVZkaAx427yCwq/view?usp=drive_link" },
      { module: "Module 4", link: "https://drive.google.com/file/d/1Nf_sIOiRrTR6yRcaCpiVZkaAx427yCwq/view?usp=drive_link" },
      { module: "Module 5", link: "https://drive.google.com/file/d/1Nf_sIOiRrTR6yRcaCpiVZkaAx427yCwq/view?usp=drive_link" },
    ]
  }  
];

// DOM references
const subjectContainer = document.getElementById("allSubjects");
const searchInput = document.getElementById("searchInput");

// Function to render subjects
function renderSubjects(filter = "") {
  subjectContainer.innerHTML = ""; // Clear previous

  subjects
    .filter(sub => sub.subject.toLowerCase().includes(filter.toLowerCase()))
    .forEach(subjectData => {
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("subject-item");

      const title = document.createElement("h4");
      title.textContent = subjectData.subject;
      subjectDiv.appendChild(title);

      const modulesDiv = document.createElement("div");
      modulesDiv.classList.add("module-links");

      subjectData.modules.forEach(mod => {
        const a = document.createElement("a");
        a.href = mod.link;
        a.textContent = mod.module;
        a.target = "_blank";
        a.className = "module-link";
        modulesDiv.appendChild(a);
      });

      subjectDiv.appendChild(modulesDiv);
      subjectContainer.appendChild(subjectDiv);
    });
}

// Search filter
searchInput.addEventListener("input", () => {
  renderSubjects(searchInput.value);
});

// Initial render
renderSubjects();
