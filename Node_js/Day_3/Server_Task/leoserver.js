import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import url from "url";

//  setup directory and file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const moviePath = path.join(__dirname, "data", "movies.txt");

//  create server
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);

  //  Home Route
  if (q.pathname === "/") {
    res.end("🎬 Welcome to the Leo Movie Booking!");
  }

  // Movies Route
  else if (q.pathname === "/movies") {
    try {
      const data = fs.readFileSync(moviePath, "utf8");
      res.end(`Movies List:\n${data}`);
    } catch (err) {
      res.end(" Error reading movies file!");
    }
  }

  //  Booking Route
  else if (q.pathname === "/booking") {
    const name = q.query.name;
    const movie = q.query.movie;

    if (!name || !movie) {
      res.end(" Please provide both name and movie in the query string!");
    } else {
      res.end(` Booking Confirmed!\nName: ${name}\nMovie: ${movie}`);
    }
  }

  //  Contact Route
  else if (q.pathname === "/contact") {
    res.end("Contact us: leobooking@gmail.com");
  }

  //  File Path Route
  else if (q.pathname === "/path") {
    res.end(` File path: ${moviePath}`);
  }

  //  Page Not Found
  else {
    res.end(" Page Not Found!");
  }
});

// Start the server
server.listen(3000, () => {
  console.log(" Server running at http://localhost:3000");
});
