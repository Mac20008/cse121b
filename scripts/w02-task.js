/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = 'Jose Machuca'
document.querySelector('#name').innerHTML = fullname;
const year = 2023;
/* Step 3 - Element Variables */
document.querySelector('#year').innerHTML = year;
const image = 'headshot.jpeg'
document.querySelector("img").setAttribute('src', 'images/' + image);
/* Step 4 - Adding Content */

/* Step 5 - Array */
const foods = ['tacos','salads', 'suahi']
document.querySelector('#food').textContent = foods;
let another = 'ramen noodels'
foods.push(another);
document.querySelector('#food').textContent = foods;
