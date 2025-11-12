
let movies = {
  1: { movieName: "Jilla", hero: "Vijay", heroine: "Samantha" },
  2: { movieName: "Kandhara", hero: "Rishab Shetty", heroine: "Sapthami Gowda" },
  3: { movieName: "Asuran", hero: "Dhanush", heroine: "Ammu Abirami" },
  4: { movieName: "Settai", hero: "Arya", heroine: "Hansika" },
  5: { movieName: "Puli", hero: "Vijay", heroine: "Hansika" }
};


export const TamilMoviesController = (req, res) => {
  const tamilMovies = ["Jilla", "Kandhara", "Asuran", "Settai", "Puli"];
  res.status(200).json({
    msg: "List of Tamil Movies",
    tamilMovies: tamilMovies
  });
};


export const MovieIdController = (req, res) => {
  const { movieid } = req.params;
  const selectedMovie = movies[movieid];

  if (!selectedMovie) {
    return res.status(404).json({ msg: "Movie not found" });
  }

  res.status(200).json({
    msg: "Movie found successfully!",
    movie: selectedMovie
  });
};


export const UpdateMovieController = (req, res) => {
  const { movieid } = req.params;
  const { movieName, hero, heroine } = req.body;

  if (!movies[movieid]) {
    return res.status(404).json({ msg: "Movie not found" });
  }

  
  movies[movieid] = {
    ...movies[movieid],
    movieName: movieName || movies[movieid].movieName,
    hero: hero || movies[movieid].hero,
    heroine: heroine || movies[movieid].heroine
  };

  res.status(200).json({
    msg: `Movie with ID ${movieid} updated successfully!`,
    updatedMovie: movies[movieid]
  });
};



export const DeleteMovieController = (req, res) => {
  const { movieid } = req.params;

  if (!movies[movieid]) {
    return res.status(404).json({ msg: "Movie not found" });
  }

  
  delete movies[movieid];

  res.status(200).json({
    msg: `Movie with ID ${movieid} deleted successfully!`
  });
};
