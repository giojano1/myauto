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
function filterFunction() {
  document.getElementById("filterDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".filter-dropbtn") &&
    !event.target.matches(".filter-dropbtn img") &&
    !event.target.matches(".filter-dropbtn span")
  ) {
    var dropdowns = document.getElementsByClassName("filter-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
