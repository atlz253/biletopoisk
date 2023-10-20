# Description of a simple api

Original [api](https://github.com/SArchieEdu/shri-react-hw-2023) author is [ArchieSA](https://github.com/ArchieSA)

Starting the server with the command `node server.js` (if from the root, then `node simple_api/server.js` )

Usually the server is started at http://localhost:3001.

Cinemas:
http://localhost:3001/api/cinemas

Movies:
http://localhost:3001/api/movies - all films
http://localhost:3001/api/movies?cinemaId={айдишка кинотеатра} - movies in a particular cinema
http://localhost:3001/api/movie?movieId={айдишка фильма} - a specific movie

Reviews:
http://localhost:3001/api/reviews - all reviews
http://localhost:3001/api/reviews?movieId={айдишка фильма} - reviews of a particular movie
