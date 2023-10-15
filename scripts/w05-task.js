/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const headingThree = document.createElement("h3");
   
    headingThree.textContent = temple.templeName;
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.location;
    
    article.appendChild(headingThree);
    article.appendChild(image);
    
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const url =
  "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

async function getTemples() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
  }
}

/* reset Function */
const reset = () => {
  const templesElement = document.querySelector("#temples");
  while (
    templesElement.firstChild) 
    {
    templesElement.removeChild(templesElement.firstChild);
  }
};

/* sortBy Function */
const sortBy = (temples) => {
  
    reset();

  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      
      break;
    
      case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );

      break;
      
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );

      break;

    case "all":
      displayTemples(temples);
      break;
   
      default:
        console.error("Invalid filter value");
  }
};

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
 
    sortBy(templeList);

});