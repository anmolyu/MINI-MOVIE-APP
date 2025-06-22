Project - Mini movie explorer
setup-
1> make a folder
2> clone the project using  this command ==>  git clone https://github.com/anmolyu/MINI-MOVIE-APP.git
3> write cd MINI-MOVIE-APP
4> write npm install 
5> use npm run dev for running project
6> You can also download zip file and extract it to run the project .
Project working video link ==  https://drive.google.com/file/d/1DBwNe8v7wTF1-curQTv-3MoGMBqPTc_i/view?usp=drive_link  
HOW I APPROACHED===>
1>Project Setup =>
I chose Vite for faster development and hot reload experience. I structured the project using modular React components and separate CSS files for clarity and maintainability.
2>Search Functionality using OMDb API =>
I implemented movie search using the OMDb API. Users can search by title, and results are limited to the top 10 to keep the UI clean and relevant.
3>Custom Debounce Hook =>
To reduce unnecessary API calls while typing, I created a custom Debounce hook that waits for 500ms of user inactivity before sending the API request.
4>Movie Display with Poster==>
Movie data is shown using the MoviePoster component, with fallback images if no poster is available. Posters, titles, and years are cleanly displayed in a responsive grid layout.
5>Watchlist with Local Storage Persistence==>
Users can add movies to a watchlist using the ＋ Watchlist button. The watchlist is saved in localStorage and auto-loaded on app refresh via useEffect.
6> Responsive & Styled UI
I used CSS with media queries for responsiveness and Google Fonts (Poppins) for modern typography. Each section like the movie grid, search bar, and watchlist has custom styling.
Tech Stack ==>
React (with Hooks)
Vite
OMDb API
JavaScript (ES6+)
CSS (Responsive Design)
Local Storage (for Watchlist)
PropTypes (for type-checking)




