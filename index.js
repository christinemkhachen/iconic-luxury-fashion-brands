const brandsDiv = () => document.querySelector("#brands");
let brandsInfo = [];

const displayBrand = (brand) => {
  const extraImagesDiv = document.createElement("div");
  extraImagesDiv.id = `extra-${brand.name.replaceAll(" ", "-")}-images`;
  extraImagesDiv.className = "extra-images";

  const div = document.createElement("div");
  div.id = brand.name.replaceAll(" ", "-").toLowerCase();
  div.className = "brand-card-front";

  const img = document.createElement("img");
  img.src = brand.main_image;

  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  a.textContent = brand.name;
  a.href = `#${brand.name.replaceAll(" ", "-").toLowerCase()}`;
  a.addEventListener("click", handleClick);
  h3.appendChild(a);

  const iconicHover = document.createElement("div");

  img.addEventListener("mouseenter", (event) => {
    img.classList.add("animate");
    iconicHover.textContent = ` 
     ${brand.iconic_sayings}
     ${brand.iconic_hover}
    `;
    img.replaceWith(iconicHover);
  });
  iconicHover.addEventListener("mouseleave", () => {
    img.classList.remove("animate");
    iconicHover.replaceWith(img);
  });
  const h4 = document.createElement("h4");
  h4.textContent = brand.founder;
  const likes = document.createElement("button");
  likes.innerHTML = '<i class="far fa-heart"></i>';
  likes.addEventListener("click", () => {
    likes.innerHTML = '<i class="fas fa-heart"></i>';
  });
  h3.append(likes);
  div.append(h3, img, h4, extraImagesDiv);
  brandsDiv().appendChild(div);
};

const handleClick = (event) => {
  const logo = event.target.textContent;
  const brand = brandsInfo.find((brandObj) => brandObj.name === logo);
  const brandDetails = document.querySelector(
    `#extra-${brand.name.replaceAll(" ", "-")}-images`
  );
  const brandCardFront = document.querySelector(
    `#${brand.name.replaceAll(" ", "-").toLowerCase()}`
  );

  if (brandDetails.innerHTML === "") {
    if (!brandCardFront.classList.contains("block-view")) {
      document
        .querySelectorAll(".brand-card-front")
        .forEach((div) => div.classList.toggle("block-view"));
    }
    document
      .querySelectorAll(".extra-images")
      .forEach((div) => (div.innerHTML = ""));
    brand.extra_images.forEach((ImageUrl) => {
      const img = document.createElement("img");
      img.src = ImageUrl;
      img.className = "extra-image";
      brandDetails.appendChild(img);
    });
  } else {
    brandDetails.innerHTML = "";
    document
      .querySelectorAll(".brand-card-front")
      .forEach((div) => div.classList.remove("block-view"));
  }
};

const fetchBrands = () => {
  fetch("http://localhost:3000/brands")
    .then((response) => response.json())
    .then((data) => {
      brandsInfo = data;
      data.forEach((brand) => {
        displayBrand(brand);
      });
    })
    .catch((error) => console.log(error));
};

const handlePageLoaded = () => {
  fetchBrands();
};

document.addEventListener("DOMContentLoaded", handlePageLoaded);
