console.log("El JavaScript está funcionando.");

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-input");
  const btnSearch = document.querySelector(".btn-search");
  const btnLucky = document.querySelector(".btn-lucky");

  if (!input) {
    console.error("No se encontró el elemento .search-input");
    return;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      search();
    }
  });

  if (btnSearch) {
    btnSearch.addEventListener("click", search);
  }

  if (btnLucky) {
    btnLucky.addEventListener("click", lucky);
  }

  function search() {
    const query = input.value.trim();
    if (query !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
      console.log("El campo está vacío — no se realiza la búsqueda");
    }
  }

  function lucky() {
    const query = input.value.trim();
    if (query !== "") {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    } else {
      console.log("El campo está vacío — no se realiza la búsqueda");
    }
  }
});




