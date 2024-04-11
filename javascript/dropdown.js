// Funktion til at håndtere klik på dropdown-knappen
function dropdownKategori() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  var dropdownButton = document.getElementById('dropdownButton');
  if (dropdown.classList.contains("show")) {
      dropdownButton.style.backgroundColor = "#D5802D"; // Ændrer baggrundsfarven til orange
  } else {
      dropdownButton.style.backgroundColor = "#ffffff"; // Ændrer baggrundsfarven til hvid, når dropdown'en lukkes
  }
}

// Funktion til at håndtere valg af kategori og opdatering af knaptekst samt lukning af dropdown
function valgAfKategori(kategoriNavn) {
  var dropdownButton = document.getElementById('dropdownButton');
  dropdownButton.innerHTML = kategoriNavn; // Opdaterer knapteksten med navnet på den valgte kategori
  dropdownButton.style.backgroundColor = "#ffffff"; // Ændrer baggrundsfarven til hvid, når en kategori er valgt
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.remove("show"); // Lukker dropdown'en
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              valgAfKategori("Alle"); // Nulstil knapteksten til "Alle" når dropdown'en lukkes sammen
          }
      }
  }
}


