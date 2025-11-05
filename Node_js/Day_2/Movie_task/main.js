// main.js
import { movie, characters, firstScene } from "./movieData.js";

// Movie Introduction (after a delay)
setTimeout(() => {
  console.log(` Now Showing: ${movie.title}`);
  console.log(`Directed by: ${movie.director}`);
  console.log(`Theme: ${movie.theme}`);
  console.log("\n Opening Scene:");
  console.log(firstScene);
}, 2000); // shows after 2 seconds

//  Introduce Characters one by one
let index = 0;
const interval = setInterval(() => {
  if (index < characters.length) {
    console.log(` Character ${index + 1}: ${characters[index]}`);
    index++;
  } else {
    clearInterval(interval);
    console.log("\n Scene Ready! Let's Roll!");
  }
}, 1500); // shows every 1.5 seconds
