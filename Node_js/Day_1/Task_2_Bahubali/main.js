
import getMovie from './movie.js';

import { printTitle,printDirector,shoutLead } from './helpers.js';

const movie=getMovie();

printTitle(movie);
printDirector(movie);
shoutLead(movie);