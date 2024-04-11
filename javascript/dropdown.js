function dropdownKategori() {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  let dropdownButton = document.getElementById('dropdownButton');
  if (dropdown.classList.contains("show")) {
      dropdownButton.style.backgroundColor = "#D5802D"; 
  } else {
      dropdownButton.style.backgroundColor = "#ffffff"; 
  }
}


function valgAfKategori(kategoriNavn) {
  let dropdownButton = document.getElementById('dropdownButton');
  dropdownButton.innerHTML = kategoriNavn; 
  dropdownButton.style.backgroundColor = "#ffffff"; 
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.remove("show"); 
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              valgAfKategori("Alle"); 
          }
      }
  }
}



