function fetchBrands() {
  fetch("http://localhost:8000/brands")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchBrands();
