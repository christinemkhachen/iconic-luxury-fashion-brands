const brandsDiv = () => document.querySelector("#brands");
const fetchBrands = () => {
  fetch("http://localhost:8000/brands")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((brand) => {
        const div = document.createElement("div");
        div.id = `brand-${brand.id}`;
        const img = document.createElement("img");
        img.src = brand.main_image;
        const h3 = document.createElement("h3");
        h3.textContent = brand.name;
        div.append(h3, img);
        brandsDiv().appendChild(div);
      });
    })
    .catch((error) => console.log(error));
};
const handlePageLoaded = () => {
  fetchBrands();
};
document.addEventListener("DOMContentLoaded", handlePageLoaded);
