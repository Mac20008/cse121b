/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jose Machuca",
    photo: "images/headshot.jpeg",
    favoriteFoods: ["tacos" , "Chinese food", "sushi", "fried Chicken"],
    hobbies: ["basketball", "Football", "hiking", "watching movies", "weightlifting"],
    placeslived: [ ],

};

/* Populate Profile Object with placesLive objects */
myProfile.placeslived.push({
    place: "Damascus, MD",
    length: "20 years",
});

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const image = document.querySelector("#photo");
image.setAttribute("scr", myProfile.photo);
image.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);
  });
  
  myProfile.placesLived.forEach((length) => {
    let dd = document.createElement("dd");
    dd.textContent = length.length;
    document.querySelector("#places-lived").appendChild(dd);
  });
