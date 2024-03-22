// NAV
function navFunction() {
  document.getElementById("headerDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".nav-dropbtn") &&
    !event.target.matches(".nav-dropbtn img") &&
    !event.target.matches(".nav-dropbtn a")
  ) {
    var dropdowns = document.getElementsByClassName("nav-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// FILTER
function filterFunction1() {
  document.getElementById("filterDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".filter-dropbtn1") &&
    !event.target.matches(".filter-dropbtn1 img") &&
    !event.target.matches(".filter-dropbtn1 span")
  ) {
    var dropdowns = document.getElementsByClassName("filter-drop-1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// FILTER
function filterFunction2() {
  document.getElementById("filterDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".filter-dropbtn2") &&
    !event.target.matches(".filter-dropbtn2 img") &&
    !event.target.matches(".filter-dropbtn2 span")
  ) {
    var dropdowns = document.getElementsByClassName("filter-drop-2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

