// //IN ORDER TO USE THIS CODE THIS LINE FROM THE HTML DOC MUST BE COMMENTED OUT
// // <div class="section" id="brandDetails"></div>
// //this attempt to conditionally  render the inages under each brand is not working because
// //i am failing to hide the other brand's info so they are overlapping
// // <div class="section" id="brandDetails"></div> *

// const brandsDiv = () => document.querySelector("#brands"); //diff betweeen . and # is . refers to a class and id

// let brandsInfo = [];

// const displayBrand = (brand) => {
//   const div = document.createElement("div");
//   div.id = `brand-${brand.id}`;
//   div.className = "brand-card-front";

//   const img = document.createElement("img");
//   img.src = brand.main_image;

//   const h3 = document.createElement("h3");
//   const a = document.createElement("a");
//   a.textContent = brand.name;

//   a.href = "#";
//   //create a div to contain all the images for each brand
//   const brandDetails = document.createElement("div");
//   brandDetails.className = "section";
//   brandDetails.id = "brandDetails";

//   //render all images but set display to none
//   brand.extra_images.forEach((ImageUrl) => {
//     const img = document.createElement("img");
//     img.src = ImageUrl;
//     brandDetails.appendChild(img);
//   });
//   brandDetails.style.display = "none"
//   a.addEventListener("click", (event) => {
//     //setting brandDetails.style.display to "block" is basically removing
//     //the brandDetails div's cloak of invisibility
//     brandDetails.style.display = "block"
//   });
//   h3.appendChild(a);
//   const iconicHover = document.createElement("div");

//   img.addEventListener("mouseover", (event) => {
//     img.classList.add("animate");
//     iconicHover.textContent = `Founder: ${brand.founder}
//     Iconic Saying: ${brand.iconic_sayings}
//     Iconic Saying: ${brand.iconic_hover}
//     `;

//     img.replaceWith(iconicHover);
//   });
//   img.addEventListener("mouseleave", () => {
//     img.classList.remove("animate");
//     iconicHover.replaceWith(img);
//   });
//   const h4 = document.createElement("h4");
//   h4.textContent = brand.founder;
//   const likes = document.createElement("button");
//   likes.innerHTML = '<i class="far fa-heart"></i>';
//   likes.addEventListener("click", () => {
//     likes.innerHTML = '<i class="fas fa-heart"></i>';
//   });

//   // <!-- <div class="section" id="brandDetails"></div> -->
//   div.append(h3, img, h4, likes, brandDetails);

//   brandsDiv().appendChild(div);
// };

// const fetchBrands = () => {
//   fetch("http://localhost:8000/brands")
//     .then((response) => response.json())
//     .then((data) => {
//       brandsInfo = data;
//       data.forEach((brand) => {
//         displayBrand(brand);
//       });
//     })
//     .catch((error) => console.log(error));
// };
// const handlePageLoaded = () => {
//   fetchBrands();
// };
// document.addEventListener("DOMContentLoaded", handlePageLoaded);

//_______________________________________________________________________________________________________
// MATTEO'S PASSING CODE!!!!
//function expression syntax is line below
const brandsDiv = () => document.querySelector("#brands"); //diff betweeen . and # is . refers to a class and
//everytime u see document.queryselector just think youre being a badass and youre like tellig HTML* SPECIFICALLY what to find
// # is going to refer to id
let brandsInfo = [];
//function declaration syntax would look like this
// function brandsDiv(){
//   document.querySelector("#brands")
// }
const displayBrand = (brand) => {
  const div = document.createElement("div"); //creating a div (brand 1 for example) this also an example html tag..
  //const brandDetails = document.createElement("div");

  // line above created  <div></div>
  //everytime i see document juust think JS is trying to communicate with the HTML* document so Js is just like "hey HTML*, make this tag for me" so the parameter you give it determines which kind of tag you create
  //brandDetails.className = "brandDetails";
  const extraImagesDiv = document.createElement("div");
  extraImagesDiv.id = `extra-${brand.name.replaceAll(" ", "-")}-images`;
  div.id = `brand-${brand.id}`; //we are setting an id attribute in this case with div.id (hence the id part) and giving it a value of the brand object's id so either brand-1, brand-2 brand-3 etc in this app
  console.log(div.id);
  //<div id="brand-1"> </div> it wil change dpending on the brand id number and .forEach method will iterate through our brands and change the brand id number ("brand-2" would be louis vuitton *dont forget the "" bc its a string) for each iteration
  div.className = "brand-card-front";
  //<div id="brand-1" class="brand-card-front">  </div>
  const img = document.createElement("img"); //using javascript to create an html tag *the html tag HAS TO BE VALID u cant just use a conveient name*
  //<img>
  img.src = brand.main_image;
  console.log(img.src);
  //<img src=""> we will rely on dot notation to dynamically pull in the relative path associated with that brand object's main image key
  const h3 = document.createElement("h3"); //using javascript to create an html tag
  //<h3></h3>
  const a = document.createElement("a");
  a.textContent = brand.name;
  //<h3>*brand's name goes here*</h3> we will rely on dot notation to grab the brand's name from our brand object
  a.href = "#";
  // an anchor tag will listen to a click event
  a.addEventListener("click", handleClick);
  //this is invoking a handleclick funtion
  h3.appendChild(a);
  const iconicHover = document.createElement("div");
  //we are using brand becaue it is the object and aconic_hover decause it is a key value (DB.jason), this is called invoking a function*******

  img.addEventListener("mouseover", (event) => {
    img.classList.add("animate");
    iconicHover.textContent = ` info blah blah interpolate
    Iconic Saying: ${brand.iconic_sayings}
    Iconic Saying: ${brand.iconic_hover}
    `;
    // the entire point of 31-33 - 31 hieds the icnoic hover when youre not hovering over, 32 means yes dispkay the icnoc hover quote when the mouse is hovering over and
    // 33 displays it as a block of text${/elements
    img.replaceWith(iconicHover);
  });
  img.addEventListener("mouseleave", () => {
    img.classList.remove("animate");
    iconicHover.replaceWith(img);
    // this closes the mouse over function so the quote doesnt stay displayed
  });
  const h4 = document.createElement("h4"); //using javascript to create an html tag
  // <h4></h4>
  h4.textContent = brand.founder; //
  // <h4>*brand founder *</h4>we will rely on dot notation to grab the brand's founder from our brand object
  const likes = document.createElement("button");
  //button is a built in html tag
  likes.innerHTML = '<i class="far fa-heart"></i>';
  // we added an icon to the button use font awesome and  the .innerHTML option/attribute or whatever
  // names the button love
  likes.addEventListener("click", () => {
    likes.innerHTML = '<i class="fas fa-heart"></i>';
  });
  h3.append(likes);
  div.append(h3, img, h4, likes, extraImagesDiv);
  //appending basically means put the tags in parenthesis inside of the tag on the left in this example div
  // <div id="brand-1" class="brand-card-front">
  //<h3>*brand's name goes here*</h3>
  //<img src="">
  // <h4>*brand founder *</h4>
  //</div>
  brandsDiv().appendChild(div);
  //show me where the div will go inside your html file
};
const handleClick = (event) => {
  const logo = event.target.textContent;
  const brand = brandsInfo.find((brandObj) => brandObj.name === logo);
  const brandDetails = document.querySelector(
    `#extra-${brand.name.replaceAll(" ", "-")}-images`
  );

  brandDetails.innerHTML = "";
  brand.extra_images.forEach((ImageUrl) => {
    const img = document.createElement("img");
    img.src = ImageUrl;
    brandDetails.appendChild(img);
  });
};
const fetchBrands = () => {
  fetch("http://localhost:8000/brands") //grabs all data from db.json
    .then((response) => response.json()) //gives you wayy TMI (gives me back an http response)
    //it is always necessary to call the response.json() method on the response to get the response body aka the data from your db.json aka body objy objy objy
    //breaks into all the info u didnt need and gives you back exactly what u ask for, in this
    //case it would be the data from the db.json file aka all the brands, names, etc
    .then((data) => {
      //now we can take the data we got back and use it to dynamically generate html with js code
      brandsInfo = data;
      data.forEach((brand) => {
        //.foreach itterates through the brands aka objects in order of how its written so the the first brand will be chanel and all the info inside the object/element

        displayBrand(brand);
        //show me where the div will go inside your html file
      });
    })
    .catch((error) => console.log(error));
};
const handlePageLoaded = () => {
  fetchBrands();
};
document.addEventListener("DOMContentLoaded", handlePageLoaded);

//add japanese brand

//add event listener that when you hover over the brand name, once you have clicked on the button stating the brand, it displays
//another iconic saying from that brand/founder or the famous tagline

//side note: IN OUR DB JSON there is only 1 object with only 1 key of brands and only 1 value of a nested array and then however many other objects nested within that 1 array.
//inside that array the elements (which are technically called objects in this case) are our brand objects (however many brands we include) lets say around 6 elements/objects (they are the same thing in this scenario)
//inside our brand objects/elements (chanel, LV, etc and all info within that object so all keys and values) we have a nested  array to contain our images.

//REMEMBER emmet lets you abbreviate your html in your html doc
// div.section#title will generate
// <div class="section" id="title">
//function expression syntax is line below
//__________________________________________________________________________________________________________
// bELOW IS A FAILED ATTEMPT AT A CONDITIONAL RENDER (christines)
//IN ORDER TO USE THIS CODE THIS LNE FROM THE HTML DOC MUST BE COMMENTED OUT
// <div class="section" id="brandDetails"></div>
//const brandsDiv = () => document.querySelector("#brands"); //diff betweeen . and # is . refers to a class and
// //everytime u see document.queryselector just think youre being a badass and youre like tellig HTML* SPECIFICALLY what to find
// // # is going to refer to id
// let brandsInfo = [];
// //function declaration syntax would look like this
// // function brandsDiv(){
// //   document.querySelector("#brands")
// // }
// const displayBrand = (brand) => {
//   const div = document.createElement("div"); //creating a div (brand 1 for example) this also an example html tag..
//   // line above created  <div></div>
//   //everytime i see document juust think JS is trying to communicate with the HTML* document so Js is just like "hey HTML*, make this tag for me" so the parameter you give it determines which kind of tag you create
//   div.id = `brand-${brand.id}`; //we are setting an id attribute in this case with div.id (hence the id part) and giving it a value of the brand object's id so either brand-1, brand-2 brand-3 etc in this app
//   console.log(div.id);
//   //<div id="brand-1"> </div> it wil change dpending on the brand id number and .forEach method will iterate through our brands and change the brand id number ("brand-2" would be louis vuitton *dont forget the "" bc its a string) for each iteration
//   div.className = "brand-card-front";
//   //<div id="brand-1" class="brand-card-front">  </div>
//   const img = document.createElement("img"); //using javascript to create an html tag *the html tag HAS TO BE VALID u cant just use a conveient name*
//   //<img>
//   img.src = brand.main_image;
//   console.log(img.src);
//   //<img src=""> we will rely on dot notation to dynamically pull in the relative path associated with that brand object's main image key
//   const h3 = document.createElement("h3"); //using javascript to create an html tag
//   //<h3></h3>
//   const a = document.createElement("a");
//   a.textContent = brand.name;
//   //<h3>*brand's name goes here*</h3> we will rely on dot notation to grab the brand's name from our brand object
//   a.href = "#";
//   // an anchor tag will listen to a click event
//   a.addEventListener("click", (e) => {
//     const logo = e.target.textContent;
//     const brand = brandsInfo.find((brandObj) => brandObj.name === logo);
//     const hideBrands = brandsInfo.filter((brandObj) => brandObj.name != logo);
//     hideBrands.forEach((brand) => hideBrand(brand));
//     //brandDetails.innerHTML = "";
//     brand.extra_images.forEach((ImageUrl) => {
//       const img = document.createElement("img");
//       img.src = ImageUrl;
//       brandDetails.appendChild(img);
//     });
//   });
//   h3.appendChild(a);
//   const iconicHover = document.createElement("div");
//   //we are using brand becaue it is the object and aconic_hover decause it is a key value (DB.jason)

//   img.addEventListener("mouseover", (event) => {
//     img.classList.add("animate");
//     iconicHover.textContent = `Founder: ${brand.founder}
//     Iconic Saying: ${brand.iconic_sayings}
//     Iconic Saying: ${brand.iconic_hover}
//     `;
//     // the entire point of 31-33 - 31 hieds the icnoic hover when youre not hovering over, 32 means yes dispkay the icnoc hover quote when the mouse is hovering over and
//     // 33 displays it as a block of text${/elements
//     img.replaceWith(iconicHover);
//   });
//   img.addEventListener("mouseleave", () => {
//     img.classList.remove("animate");
//     iconicHover.replaceWith(img);
//     // this closes the mouse over function so the quote doesnt stay displayed
//   });
//   const h4 = document.createElement("h4"); //using javascript to create an html tag
//   // <h4></h4>
//   h4.textContent = brand.founder; //
//   // <h4>*brand founder *</h4>we will rely on dot notation to grab the brand's founder from our brand object
//   const likes = document.createElement("button");
//   //button is a built in html tag
//   likes.innerHTML = '<i class="far fa-heart"></i>';
//   // we added an icon to the button use font awesome and  the .innerHTML option/attribute or whatever
//   // names the button love
//   likes.addEventListener("click", () => {
//     likes.innerHTML = '<i class="fas fa-heart"></i>';
//   });
//   const brandDetails = document.createElement("div");
//   brandDetails.className = "section";
//   brandDetails.id = "brandDetails";

//   let renderBtn = document.createElement("button");
//   renderBtn.innerText = "Go back to view more iconic labels!";
//   renderBtn.addEventListener("click", (e) => {
//     brandsDiv().style.display = "none"
//     brandDetails.style.display = "none";
//     fetchBrands();
//   });

//   // <!-- <div class="section" id="brandDetails"></div> -->
//   div.append(h3, img, h4, likes, brandDetails, renderBtn);

//   //appending basically means put the tags in parenthesis inside of the tag on the left in this example div
//   // <div id="brand-1" class="brand-card-front">
//   //<h3>*brand's name goes here*</h3>
//   //<img src="">
//   // <h4>*brand founder *</h4>
//   //</div>
//   brandsDiv().appendChild(div);
//   //show me where the div will go inside your html file
// };
// // const handleClick = (event) => {
// //   const logo = event.target.textContent;
// //   const brand = brandsInfo.find((brandObj) => brandObj.name === logo);
// //   brandDetails.innerHTML = "";
// //   brand.extra_images.forEach((ImageUrl) => {
// //     const img = document.createElement("img");
// //     img.src = ImageUrl;
// //     brandDetails.appendChild(img);
// //   });
// // };
// const fetchBrands = () => {
//   console.log("I AM FETCHING!!!");
//   fetch("http://localhost:8000/brands") //grabs all data from db.json
//     .then((response) => response.json()) //gives you wayy TMI (gives me back an http response)
//     //it is always necessary to call the response.json() method on the response to get the response body aka the data from your db.json aka body objy objy objy
//     //breaks into all the info u didnt need and gives you back exactly what u ask for, in this
//     //case it would be the data from the db.json file aka all the brands, names, etc
//     .then((data) => {
//       //now we can take the data we got back and use it to dynami generate html with js code
//       brandsInfo = data;
//       data.forEach((brand) => {
//         //.foreach itterates through the brands aka objects in order of how its written so the the first brand will be chanel and all the info inside the object/element

//         displayBrand(brand);
//         //show me where the div will go inside your html file
//       });
//     })
//     .catch((error) => console.log(error));
// };
// const handlePageLoaded = () => {
//   fetchBrands();
// };
// document.addEventListener("DOMContentLoaded", handlePageLoaded);

// //add japanese brand

// //add event listener that when you hover over the brand name, once you have clicked on the button stating the brand, it displays
// //another iconic saying from that brand/founder or the famous tagline

// //side note: IN OUR DB JSON there is only 1 object with only 1 key of brands and only 1 value of a nested array and then however many other objects nested within that 1 array.
// //inside that array the elements (which are technically called objects in this case) are our brand objects (however many brands we include) lets say around 6 elements/objects (they are the same thing in this scenario)
// //inside our brand objects/elements (chanel, LV, etc and all info within that object so all keys and values) we have a nested  array to contain our images.

// //REMEMBER emmet lets you abbreviate your html in your html doc
// // div.section#title will generate
// // <div class="section" id="title">
// function hideBrand(hiddenBrand) {
//   let hidden = document.getElementById(`brand-${hiddenBrand.id}`);
//   hidden.style.display = "none";
// }
