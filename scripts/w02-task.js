/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = 'Jose Machuca';
const currentdate = new Date();
const currentyear = currentdate.getFullYear();
const profilePicture = 'images/headshot.jpeg';
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img');
/* Step 4 - Adding Content */
 nameElement.innerHTML = `<strong> ${fullname} </strong>`;
yearElement.textContent = `${currentyear}`;
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullname}`);
/* Step 5 - Array */
let foods = [ 'tacos' , 'sushi' , 'ramen noodles', 'pizza' , 'burgers', 'waffles', 'fried chicken'];

foodElement.innerHTML = `<p>${foods}</p>`;
foods.push('chocolate', 'soup','apples');
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;
